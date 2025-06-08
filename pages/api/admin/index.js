import { serialize } from "cookie";

const handler = (req, res) => {
  try {
    console.log("=== API DEBUG ===");
    console.log("Method:", req.method);
    console.log("Body:", req.body);
    console.log("ENV Check:");
    console.log("- ADMIN_USERNAME:", process.env.ADMIN_USERNAME);
    console.log("- ADMIN_PASSWORD:", process.env.ADMIN_PASSWORD);
    console.log("- ADMIN_TOKEN:", process.env.ADMIN_TOKEN);

    const { method } = req;

    if (method === "POST") {
      const { username, password } = req.body;
      
      console.log("Login attempt:", { username, password });
      
      if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
      ) {
        console.log("✅ Credentials match!");
        
        const cookieValue = serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        });
        
        console.log("Setting cookie:", cookieValue);
        
        res.setHeader("Set-Cookie", cookieValue);
        return res.status(200).json({ message: "Success" });
      } else {
        console.log("❌ Wrong credentials");
        return res.status(400).json({ message: "Wrong Credentials" });
      }
    }

    if (method === "PUT") {
      console.log("Logout request");
      res.setHeader(
        "Set-Cookie",
        serialize("token", "", {
          maxAge: -1,
          path: "/",
        })
      );
      return res.status(200).json({ message: "Success" });
    }

    // Method not allowed
    return res.status(405).json({ message: "Method not allowed" });

  } catch (error) {
    console.error("❌ API Error:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export default handler;
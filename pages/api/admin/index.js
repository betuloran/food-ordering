import { serialize } from "cookie";

const handler = (req, res) => {
              console.log("=== API Route Debug ===");
              console.log("Method:", req.method);
              console.log("Body:", req.body);
              console.log("ENV Variables:");
              console.log("- USERNAME:", process.env.ADMIN_USERNAME);
              console.log("- PASSWORD:", process.env.ADMIN_PASSWORD ? "EXISTS" : "MISSING");
              console.log("- TOKEN:", process.env.ADMIN_TOKEN ? "EXISTS" : "MISSING");

              const { method } = req;

              if (method === "POST") {
                            const { username, password } = req.body || {};

                            console.log("Login attempt:", { username, password });

                            if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
                                          console.log("✅ Credentials match! Setting cookie...");

                                          const cookieValue = serialize("token", process.env.ADMIN_TOKEN, {
                                                        maxAge: 60 * 60,
                                                        sameSite: "strict",
                                                        path: "/",
                                          });

                                          console.log("Cookie value:", cookieValue);

                                          res.setHeader("Set-Cookie", cookieValue);
                                          return res.status(200).json({
                                                        message: "Login is successful!",
                                                        token: process.env.ADMIN_TOKEN // Sadece debug için
                                          });
                            } else {
                                          console.log("❌ Wrong credentials!");
                                          return res.status(401).json({ message: "Wrong credentials!" });
                            }
              } else {
                            return res.status(405).json({ message: "Method not allowed!" });
              }
};

export default handler;
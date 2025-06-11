import Product from "../../../models/Product";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products); // newProduct değil, products olmalı!
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  }

  else if (method === "POST") {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct); // POST için 201 doğru
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to create product" });
    }
  }

  else {
    // Desteklenmeyen method'lar için
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
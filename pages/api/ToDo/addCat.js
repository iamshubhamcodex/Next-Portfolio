import dbConnect from "@/lib/dbConnect";
import Category from "@/Model/ToDo/Category";

export default async function handler(req, res) {
  let { method, body } = req;

  if (typeof body === "string") body = JSON.parse(body);
  await dbConnect("ToDo");

  if (method === "POST") {
    let cat = new Category(body);
    let savedCat = await cat.save();
    res.json({ success: true, cat: savedCat });
    try {
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: error.message });
    }
  } else res.json({ for: "adding Cat" });
}

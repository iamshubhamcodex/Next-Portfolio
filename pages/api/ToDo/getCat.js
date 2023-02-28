import dbConnect from "@/lib/dbConnect";
import Category from "@/Model/ToDo/Category";

export default async function handler(req, res) {
  let { method } = req;

  await dbConnect("ToDo");

  if (method === "POST") {
    try {
      let cats = await Category.find();
      res.json({ success: true, cats: cats });
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: error.message });
    }
  } else res.json({ for: "getting Cat" });
}

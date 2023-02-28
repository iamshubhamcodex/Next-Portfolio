import dbConnect from "@/lib/dbConnect";
import Category from "@/Model/ToDo/Category";
import Task from "@/Model/ToDo/Task";

export default async function handler(req, res) {
  let { method, body } = req;

  if (typeof body === "string") body = JSON.parse(body);

  await dbConnect("ToDo");

  if (method === "POST") {
    try {
      await Category.findByIdAndDelete(body.id);
      let cats = await Task.find({ belongs: body.name });
      cats.map(async (k) => {
        await Task.findByIdAndDelete(k._id);
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: error.message });
    }
  } else res.json({ for: "deleting Cat" });
}

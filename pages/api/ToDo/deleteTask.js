import dbConnect from "@/lib/dbConnect";
import Task from "@/Model/ToDo/Task";

export default async function handler(req, res) {
  let { method, body } = req;

  if (typeof body === "string") body = JSON.parse(body);

  await dbConnect("ToDo");

  if (method === "POST") {
    try {
      await Task.findByIdAndDelete(body.id);
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: error.message });
    }
  } else res.json({ for: "getting Cat" });
}

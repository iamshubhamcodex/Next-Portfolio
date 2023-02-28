import dbConnect from "@/lib/dbConnect";
import Task from "@/Model/ToDo/Task";

export default async function handler(req, res) {
  let { body, method } = req;
  if (typeof body === "string") body = JSON.parse(body);

  await dbConnect("ToDo");

  if (method === "POST") {
    try {
      let tasks = await Task.find({ belongs: body.belongs });
      res.json({ success: true, tasks: tasks });
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: error.message });
    }
  } else res.json({ for: "getting Tasks" });
}

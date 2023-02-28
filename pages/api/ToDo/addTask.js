import dbConnect from "@/lib/dbConnect";
import Task from "@/Model/ToDo/Task";

export default async function handler(req, res) {
  let { method, body } = req;

  if (typeof body === "string") body = JSON.parse(body);
  await dbConnect("ToDo");

  if (method === "POST") {
    let task = new Task(body);
    let savedTask = await task.save();
    res.json({ success: true, task: savedTask });
    try {
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: error.message });
    }
  } else res.json({ for: "adding Task" });
}

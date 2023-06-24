import dbConnect from "@/lib/dbConnect";
import DailyTodo from "@/Model/DailyTodo/DailyTodo";

let id = "64975b74532cc8e1808da046";

export default async function handler(req, res) {
  let { method, body } = req;
  await dbConnect("DailyTodo");

  if (method === "GET") {
    try {
      let todo = await DailyTodo.findById(id);
      res.status(201).json({ success: true, todo: todo });
    } catch (error) {
      console.log(error.message);
      res.json({ success: false, error: "Some Internal Server Error" });
    }
  } else if (method === "POST") {
    let { save, score, todo } = body;
    if (save === "Score") {
      let oldTodo = await DailyTodo.findById(id);
      let savedTodo = await DailyTodo.findByIdAndUpdate(
        id,
        {
          $set: { score: parseInt(score) + parseInt(oldTodo.score) },
        },
        { new: true }
      );

      res
        .status(201)
        .json({ success: true, msg: "created Todo", todo: savedTodo });
    } else {
      let oldTodo = await DailyTodo.findById(id);
      let savedTodo = await DailyTodo.findByIdAndUpdate(
        id,
        {
          $set: { todo: [...oldTodo.todo, todo] },
        },
        { new: true }
      );

      res
        .status(201)
        .json({ success: true, msg: "created Todo", todo: savedTodo });
    }
  } else res.json({ for: "adding Todo" });
}

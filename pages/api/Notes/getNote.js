import dbConnect from "@/lib/dbConnect";
import Note from "@/Model/Notes/Note";

export default async function handler(req, res) {
  const { body, method } = req;

  await dbConnect("Notes");

  if (method === "POST") {
    try {
      let note = await Note.find(JSON.parse(body));
      res.status(201).json({ success: true, note: note });
    } catch (error) {
      console.log(error.message);
      res.json({ success: false, error: "Some Internal Server Error" });
    }
  } else res.json({ for: "adding Note" });
}

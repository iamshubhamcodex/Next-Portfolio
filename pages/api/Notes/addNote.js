import dbConnect from "@/lib/dbConnect";
import Content from "@/Model/Notes/Content";
import Note from "@/Model/Notes/Note";

export default async function handler(req, res) {
  const { body, method } = req;

  await dbConnect("Notes");

  if (method === "POST") {
    try {
      let note = new Note(body);
      let savedNote = await note.save();

      let content = await Content.find({ name: body.belongs });
      let tempContent = content[0].contents;
      let newContent = { heading: body.heading, noteId: body.name };
      let updatedContent = await Content.findOneAndUpdate(
        { name: body.belongs },
        { $set: { contents: [...tempContent, newContent] } },
        { new: true }
      );

      res
        .status(201)
        .json({ success: true, note: savedNote, content: updatedContent });
    } catch (error) {
      console.log(error.message);
      res.json({ success: false, error: "Some Internal Server Error" });
    }
  } else res.json({ for: "adding Note" });
}

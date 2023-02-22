import dbConnect from "@/lib/dbConnect";
import Content from "@/Model/Notes/Content";

export default async function Handler(req, res) {
  const { body, method } = req;

  await dbConnect("Notes");

  if (method === "POST") {
    try {
      let content = await Content.find({ name: body.name });
      let tempContent = content[0].contents;
      let newContent = body.content;
      let updatedContent = await Content.findOneAndUpdate(
        { name: body.name },
        { $set: { contents: [...tempContent, newContent] } },
        // { $set: { contents: [newContent] } },
        { new: true }
      );
      res.status(200).json({ success: true, content: updatedContent });
    } catch (error) {
      console.log(error);
      res.status(501).json("Some Internal Server Error");
    }
  } else res.json({ for: "updating notes. Only for admin" });
}

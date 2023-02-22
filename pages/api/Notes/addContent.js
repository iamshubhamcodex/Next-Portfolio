import dbConnect from "@/lib/dbConnect";
import Content from "@/Model/Notes/Content";

export default async function handler(req, res) {
  const { body, method } = req;

  await dbConnect("Notes");

  if (method === "POST") {
    try {
      let content = new Content(body);
      let savedContent = await content.save();
      res.status(201).json({ success: true, content: savedContent });
    } catch (error) {
      console.log(error.message);
      res.json({ success: false, error: "Some Internal Server Error" });
    }
  } else res.json({ for: "adding Content" });
}

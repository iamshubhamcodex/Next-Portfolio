import dbConnect from "@/lib/dbConnect";
import Chat from "@/Model/ChatApp/Chat";

export default async function handler(req, res) {
  let { method, body } = req;

  await dbConnect("chatapp");
  if (method === "POST") {
    let chat = new Chat(body);
    let savedChat = await chat.save();
    res.json({ success: true, chat: savedChat });
  } else {
    res.json({ for: "adding chat" });
  }
}

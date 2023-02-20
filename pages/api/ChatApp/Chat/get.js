import Chat from "@/Model/ChatApp/Chat";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  let { method, body } = req;

  await dbConnect("chatapp");
  if (method === "POST") {
    try {
      let chat = await Chat.findById(body.chatId);
      res.json({ success: true, chat: chat });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        error: "Some Internal Error Occured ",
      });
    }
  } else res.json({ for: "getting Chat" });
}

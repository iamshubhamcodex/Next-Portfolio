import Chat from "@/Model/ChatApp/Chat";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  const { body, method } = req;
  let { chatId, chat } = body;

  await dbConnect("chatapp");

  if (method === "POST") {
    try {
      let resChat = await Chat.findById(chatId);
      let tempChat = [...resChat.chats];
      let setChat = { from: chat.from, content: chat.content };
      resChat = await Chat.findByIdAndUpdate(
        chatId,
        { $set: { chats: [...tempChat, setChat] } },
        // { $set: { chats: [setChat] } },
        { new: true }
      );
      res.status(201).json({ success: true, chat: resChat });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        error: "Some Internal Error Occured",
      });
    }
  } else res.status(200).json({ for: "For getting users" });
}

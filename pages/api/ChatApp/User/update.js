import User from "@/Model/ChatApp/User";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  const { body, method } = req;
  let { email, chatId, user1, user2 } = body;

  await dbConnect("chatapp");

  if (method === "POST") {
    try {
      let user = await User.find({ email: email });
      let tempChat = [...user[0].chats];
      let setChat = {
        chatId: chatId,
        users: [
          { name: user1.name, email: user1.email },
          { name: user2.name, email: user2.email },
        ],
      };
      user = await User.findOneAndUpdate(
        { email: body.email },
        { $set: { chats: [...tempChat, setChat] } },
        // { $set: { chats: [setChat] } },
        { new: true }
      );

      res.status(201).json({ success: true, user: user });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        error: "Some Internal Error Occured while adding your task",
      });
    }
  } else res.status(200).json({ for: "For getting users" });
}

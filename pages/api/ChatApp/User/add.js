import User from "@/Model/ChatApp/User";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  const { body, method } = req;

  await dbConnect("chatapp");
  if (method === "POST") {
    try {
      const user = new User(body);
      const savedUser = await user.save();
      res.status(201).json({ success: true, user: savedUser });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        error: "Some Internal Error Occured while adding your task",
      });
    }
  } else res.status(200).json({ for: "For adding users" });
}

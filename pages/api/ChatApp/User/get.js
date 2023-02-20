import User from "@/Model/ChatApp/User";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  const { body, method } = req;

  await dbConnect("chatapp");
  if (method === "POST") {
    try {
      const user = await User.find(body);
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

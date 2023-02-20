import User from "@/Model/ECoaching/User";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  const { body, method } = req;

  await dbConnect("ecoaching");
  if (method === "POST") {
    try {
      console.log(body._id);
      await User.findByIdAndDelete(body._id);
      res.json({ success: true, msg: "Deleted User" });
      // const savedUser = await user.save();
      // sendMail function goes here. Parameter = body.email;
      // res.status(201).json({ success: true, user: savedUser });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        error: "Some Internal Error Occured while adding your task",
      });
    }
  } else res.status(200).json({ for: "For adding users" });
}

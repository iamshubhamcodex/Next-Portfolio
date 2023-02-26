import dbConnect from "@/lib/dbConnect";
import User from "@/Model/PassManage/User";

export default async function handler(req, res) {
  let { method, body } = req;
  if (typeof body === String) body = JSON.parse(body);

  await dbConnect("PassManage");

  if (method === "POST") {
    try {
      let user = new User(body);
      let savedUser = await user.save();
      res.json({ success: true, user: savedUser });
    } catch (error) {
      console.log(error);
      res.status(501).json({ success: false, error: error.message });
    }
  } else res.json({ for: "adding User" });
}

import dbConnect from "@/lib/dbConnect";
import User from "@/Model/PassManage/User";

export default async function handler(req, res) {
  let { method, body } = req;
  if (typeof body === "string") body = JSON.parse(body);

  await dbConnect("PassManage");

  if (method === "POST") {
    try {
      let user = await User.find(body);
      res.json({ success: true, user: user[0] });
    } catch (error) {
      console.log(error);
      res.status(501).json({ success: false, error: error.message });
    }
  } else res.json({ for: "adding User" });
}

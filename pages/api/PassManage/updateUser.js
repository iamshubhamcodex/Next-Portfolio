import dbConnect from "@/lib/dbConnect";
import User from "@/Model/PassManage/User";

export default async function handler(req, res) {
  let { method, body } = req;
  if (typeof body === "string") body = JSON.parse(body);

  await dbConnect("PassManage");

  if (method === "POST") {
    let user;
    try {
      switch (body.what) {
        case "mpass":
          user = await User.findOneAndUpdate(
            { email: body.email },
            { $set: body.set },
            { new: true }
          );
      }
      res.status(200).json({ success: true, user: user });
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: error.message });
    }
  } else {
    res.json({ for: "updating user" });
  }
}

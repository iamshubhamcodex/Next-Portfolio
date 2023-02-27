import dbConnect from "@/lib/dbConnect";
import Pass from "@/Model/PassManage/Pass";

export default async function handler(req, res) {
  let { method, body } = req;
  if (typeof body === "string") body = JSON.parse(body);

  await dbConnect("PassManage");

  if (method === "POST") {
    let user;
    try {
      switch (body.what) {
        case "mpass":
          user = await Pass.findOneAndUpdate(
            { email: body.email },
            { $set: body.set },
            { new: true }
          );
          break;
        case "logins":
        case "generals":
        case "ids":
        case "notes":
          let prev = await Pass.findOne({ email: body.email });
          let toSet = {};
          toSet[body.what] = [...prev[body.what], body.set[body.what]];
          user = await Pass.findOneAndUpdate(
            { email: body.email },
            { $set: toSet },
            { new: true }
          );
          break;
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

import dbConnect from "@/lib/dbConnect";
import Pass from "@/Model/PassManage/Pass";

export default async function handler(req, res) {
  let { method, body } = req;
  if (typeof body === "string") body = JSON.parse(body);

  await dbConnect("PassManage");
  if (method === "POST") {
    try {
      let user = await Pass.findOne({ email: body.email });
      let tempArr = user[body.what.toLowerCase()].filter((k) => {
        return k._id.toString() !== body.id;
      });
      let toSet = {};
      toSet[body.what.toLowerCase()] = tempArr;
      user = await Pass.findOneAndUpdate(
        { email: body.email },
        { $set: toSet },
        { new: true }
      );
      res.json({ success: true, user: user });
    } catch (error) {
      console.log(error);
      res.status(501).json({ success: false, error: error.message });
    }
  } else res.json({ for: "deleting Credential" });
}

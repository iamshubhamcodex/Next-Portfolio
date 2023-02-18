import User from "@/Model/ECoaching/User";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  const { body } = req;

  await dbConnect();

  try {
    let admin = body.email === "root@admin";
    let data = admin ? await User.find() : await User.find(body);
    if (data.length > 0) {
      res.json({ admin: admin, success: true, user: data });
    } else res.send({ success: false, error: "No Credential Found" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: "Some Internal Error Occured while adding your task",
    });
  }
}

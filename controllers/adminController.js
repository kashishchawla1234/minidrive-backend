import File from "../models/File.js";
import User from "../models/User.js";

export const getAllFiles = async (req, res) => {
  const admin = await User.findById(req.user._id);
  if (!admin?.isAdmin) return res.status(403).json({ message: "Forbidden" });

  const files = await File.find().populate("owner", "email");
  res.json(files.map(f => ({ ...f._doc, ownerEmail: f.owner.email })));
};

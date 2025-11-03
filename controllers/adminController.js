// import File from "../models/File.js";
// import User from "../models/User.js";

// export const getAllFiles = async (req, res) => {
//   const admin = await User.findById(req.user._id);
//   if (!admin?.isAdmin) return res.status(403).json({ message: "Forbidden" });

//   const files = await File.find().populate("owner", "email");
//   res.json(files.map(f => ({ ...f._doc, ownerEmail: f.owner.email })));
// };

import File from "../models/File.js";

export const getAllFiles = async (req, res) => {
  try {
    const files = await File.find().populate("owner", "email");
    const formatted = files.map((f) => ({
      _id: f._id,
      filename: f.filename,
      ownerEmail: f.owner?.email || "Unknown",
      url: f.url,
      createdAt: f.createdAt,
    }));
    res.json(formatted);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ message: "Server error fetching files" });
  }
};


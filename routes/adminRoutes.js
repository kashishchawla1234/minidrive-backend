// import express from "express";
// import { protect } from "../middleware/authMiddleware.js";
// import { getAllFiles } from "../controllers/adminController.js";

// const router = express.Router();

// router.get("/files", protect, getAllFiles);

// export default router;

import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import { getAllFiles } from "../controllers/adminController.js";

const router = express.Router();

router.get("/files", protect, adminOnly, getAllFiles);

export default router;

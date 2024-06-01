const express = require("express");
const router = express.Router();
const { sendMessage, createGroup } = require("../controllers/chatController");
const auth = require("../middlewares/authMiddleware");

router.post("/message", auth, sendMessage);
router.post("/group", auth, createGroup);

module.exports = router;

const Message = require("../models/Message");
const Group = require("../models/Group");
const User = require("../models/User");

exports.sendMessage = async (req, res) => {
  const { content, chatId } = req.body;
  try {
    const message = new Message({
      sender: req.user.id,
      content,
      chatId,
    });
    await message.save();
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.createGroup = async (req, res) => {
  const { name, members } = req.body;
  try {
    const group = new Group({ name, members });
    await group.save();
    res.json(group);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// const ChatModel = require("../models/ChatModel.js");

// createChat = async (req, res) => {
//   const newChat = new ChatModel({
//     members: [req.body.senderId, req.body.acceptId],
//   });
//   try {
//     const result = await newChat.save();
//     res.status(200).send(result);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
// module.exports = createChat;

// module.exports = chatUser = async () => {
//   try {
//     const chat = await chatModel.find({
//       members: { $in: [req.params.userId] },
//     });
//     res.status(200).send(chat);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// module.exports = chatFind = async () => {
//   try {
//     const chat = await chatModel.findOne({
//       members: { $all: [req.params.firstId, req.params.secondId] },
//     });
//     res.status(200).send(chat);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

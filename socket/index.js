const io = require("socket.io")(8800, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("user connected ");

  //TAKE USER ID
  socket.on("addUser", (userId) => {
    if (userId) {
      addUser(userId, socket.id);
      io.emit("getUsers", users);
    }
  });

  //GET AND SEND  MESSAGE
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  // send message to a specific user
  socket.on("send-message", (data) => {
    const { receiverId } = data;
    const user = users.find((user) => user.userId === receiverId);
    console.log("Sending from socket to :", receiverId);
    console.log("Data: ", data);
    if (user) {
      io.to(user.socketId).emit("receive-message", data);
    }
  });

  socket.on("disconnect", () => {
    console.log("user is disconnected");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
  // io.emit("welcome", "hello this is socket server !");

  //ADD user
  // socket.on("new-user-add", (newUserId) => {
  //   //USER AUTH
  //   if (!activeUsers.some((user) => user.userId === newUserId)) {
  //     activeUsers.push({
  //       userId: newUserId,
  //       socketId: socket.id,
  //     });
  //     console.log("Connected user", activeUsers);
  //   }
  //   io.emit("get-users", activeUsers);
  // });

  //SENDING MESSAGE
  // socket.on("send-message", (data) => {
  //   const { receiverId } = data;
  //   const user = activeUsers.find((user) => user.userId === receiverId);
  //   console.log("sending from socket to :", receiverId);
  //   console.log("Data", data);
  //   if (user) {
  //     io.to(user.socketId).emit("receive-message", data);
  //   }
  // });

  // socket.on("disconnect", () => {
  //   const activeUsers = activeUsers.filter(
  //     (user) => user.socketId !== socket.id
  //   );
  //   console.log("user disconnect", activeUsers);

  //   io.emit("get-users", activeUactiveUsersser);
  // });
});

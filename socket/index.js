const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];
// let activeUsers = [];

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
  //USER CONNECT
  console.log("user connected ");

  // TAKE USER ID
  socket.on("addUser", (userId) => {
    console.log(userId);
    if (userId) {
      addUser(userId, socket.id);
      io.emit("getUsers", users);
    }
  });

  //SEND AND GET MESSAGE
  socket.on("sendMessage", ({ senderId, recevierId, text }) => {
    if (recevierId) {
      let user = getUser(recevierId);

      console.log(user);
      if (user) {
        io.to(user.socketId).emit("getMessage", {
          senderId,
          text,
        });
      }
    } else console.log("reciver yoxdur");
  });

  //DISCONNECT
  socket.on("disconnect", () => {
    console.log("User disconnected");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });

  // // ADD USER SOCKET SERVER
  // socket.on("new-user-add", (newUserId) => {
  //   if (newUserId) {
  //     if (!activeUsers.some((user) => user.userId === newUserId)) {
  //       activeUsers.push({
  //         userId: newUserId,
  //         socketId: socket.id,
  //       });
  //     }
  //     io.emit("get-users", activeUsers);
  //   }
  // });

  //SEND MESSAGE
  // socket.on("send-message", (data) => {
  //   const { receiverId } = data;
  //   // console.log(data);
  //   if (activeUsers) {
  //     const user = activeUsers.find((user) => user.userId === receiverId);
  //     // console.log("sending from socket to : ", receiverId);
  //     // console.log("Data", data);
  //     if (user) {
  //       io.to(user.socketId).emit("receive-message", data);
  //     }
  //   }
  // });

  //USER DISCONNECT

  // socket.on("disconnect", () => {
  //   activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
  //   console.log("user disconnected");
  //   io.emit("get-users", activeUsers);
  // });

  //GET AND SEND  MESSAGE
  // socket.on("sendMessage", ({ senderId, receiverId, text }) => {
  //   const user = getUser(receiverId);
  //   io.to(user.socketId).emit("getMessage", {
  //     senderId,
  //     text,
  //   });
  // });

  // send message to a specific user
  // socket.on("send-message", (data) => {
  //   const { receiverId } = data;
  //   const user = users.find((user) => user.userId === receiverId);
  //   console.log("Sending from socket to :", receiverId);
  //   // console.log("Data: ", data);
  //   if (user) {
  //     io.to(user.socketId).emit("receive-message", data);
  //   }
  // });

  // socket.on("disconnect", () => {
  //   console.log("user is disconnected");
  //   removeUser(socket.id);
  //   io.emit("getUsers", users);
  // });
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

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
let data;
const server = http.createServer(app);
const connectedUsers = {};
const unreadPetitions = {};
let index = 0;
const io = new Server(server, {
  cors: {
    origin: "http://192.168.20.150:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  socket.on('client_id', function(clientData) {
    console.log('Client ID received from client:', clientData.client_id);
    socket.join(clientData.client_id);
    
    connectedUsers[clientData.client_id] = clientData.client_id;
    
    const responseData = {
      Type: "id",
      socketID: clientData.client_id,
    };
    console.log(responseData);
    io.to(clientData.client_id).emit("server_message", responseData);
  });
  


  socket.emit("server_requests", unreadPetitions);

  socket.on("send_message", (data) => {
    console.log(data.message);
    index = Object.keys(unreadPetitions).length;
    unreadPetitions[index + 1] = data.message;
    console.log(unreadPetitions);
    socket.broadcast.emit("recieve_message", data);
  });

  socket.on("disconnect", () => {
   

    // Enviar la lista actualizada después de la desconexión de un usuario
    console.log(connectedUsers);
    
  });
});

server.listen(3001, () => {
  console.log("Server is running");
});

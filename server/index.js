const express = require("express");
const app = express();
const https = require("https");
const { Server } = require("socket.io");
const cors = require("cors");
const mysql = require("mysql2/promise");
const fs = require("fs");

// Configuración de CORS
app.use(
  cors({
    origin: "https://www.emelth.life",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
// Crear una pool de conexiones a la base de datos
const pool = mysql.createPool({
  host: "191.101.232.160", // host de la base de datos
  user: "strats1", // usuario de la base de datos
  password: "4[%[T_I?7wk997%1oqnD0,Ss(", // contraseña de la base de datos
  database: "emelth", // nombre de la base de datos
});

// Agregar una ruta para verificar que el servidor esté funcionando
app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
});

const server = https.createServer(app);
const connectedUsers = {};
const unreadPetitions = {};
let index = 0;
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("client_id", async function (clientData) {
    socket.join(clientData.client_id);
    const rol = clientData.rol;

    connectedUsers[clientData.client_id] = clientData.client_id;
    // Consulta a la base de datos para obtener peticiones sin leer
    try {
      const connection = await pool.getConnection();
      switch (rol) {
        case "1":
          const userid = clientData.id;
          console.log(userid);
          const [datarows] = await connection.execute(
            "SELECT * FROM respuestapet where id_emi = ?",
            [userid]
          );

          if (datarows.length > 0) {
            io.to(clientData.client_id).emit("server_requests", datarows);
          }
          connection.release();

          break;
        case "3":
          const [rows] = await connection.execute("SELECT * FROM vwEncargado");
          connection.release();

          // Enviar las peticiones sin leer al cliente
          io.to(clientData.client_id).emit("server_requests", rows);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error al consultar las peticiones sin leer:", error);
    }
  });

  socket.emit("server_requests", unreadPetitions);

  socket.on("send_message", async (data) => {
    index = Object.keys(unreadPetitions).length;
    try {
      const connection = await pool.getConnection();
      const [result] = await connection.execute(
        "INSERT INTO persona (per_nombre, per_appat, per_apmat) VALUES (?, ?, ?)",
        [data.message.Name, data.message.LastName, data.message.LastName2]
      );
      const insertedId = result.insertId;
      console.log("ID del registro insertado:", insertedId);

      // Ejecutar la segunda consulta solo si la primera se realizó con éxito
      if (insertedId) {
        const [result2] = await connection.execute(
          "INSERT INTO registropaciente (pac_rango, id_per, pac_sexo, pac_edad, pac_padecimiento, id_esp,id_est) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [
            data.message.Emergency,
            insertedId,
            data.message.Sex,
            data.message.Age,
            data.message.Description,
            1,
            1,
          ]
        );
        const id = result2.insertId;
        console.log(id);
        await connection.execute(
          "INSERT INTO petresemi (id_pac,id_emi) VALUES (?, ?)",
          [id, data.session]
        );
      }

      connection.release();
    } catch (error) {
      console.error("Error al guardar el mensaje:", error);
    }
    try {
      // Realiza la inserción en la base de datos como lo estás haciendo actualmente

      // Después de la inserción, vuelva a consultar todas las peticiones actualizadas
      const connection = await pool.getConnection();
      const [rows] = await connection.execute("SELECT * FROM vwEncargado");
      connection.release();

      // Envía las peticiones actualizadas al cliente
      socket.broadcast.emit("server_requests", rows);
    } catch (error) {
      console.error("Error al guardar el mensaje:", error);
    }
  });
  socket.on("accept_message", async (data) => {
    const connection = await pool.getConnection();

    console.log(data);
    const sqlInsert = await connection.execute(
      "UPDATE registropaciente SET id_est = ? WHERE id_pac = ?",
      [2, data.folio]
    );
    if (sqlInsert) {
      const connection = await pool.getConnection();
      const resultaccept = await connection.execute(
        "UPDATE petresemi SET id_res = ? WHERE id_pac = ?",
        [data.session, data.folio]
      );
      if (resultaccept) {
        const [resultemi] = await connection.execute(
          "SELECT id_emi from petresemi where id_pac= ?",
          [data.folio]
        );
        const [idEmisor] = await connection.execute(
          "select ws_webid as websocketid from websocketid where id_wsid = ?",
          [resultemi[0].id_emi]
        );
        const id = idEmisor[0].websocketid;
        console.log(id);
      }
      const [rows] = await connection.execute("SELECT * FROM vwEncargado");

      connection.release();
      socket.broadcast.emit("server_requests", rows);
      socket.emit("server_requests", rows);
    }

    connection.release();
  });

  socket.on("disconnect", () => {
    console.log(connectedUsers);
  });
});

server.listen(3003, () => {
  console.log("Server is running on port 3003");
});

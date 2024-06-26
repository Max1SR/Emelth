const express = require("express");
const app = express();
const https = require("https");
const { Server } = require("socket.io");
const cors = require("cors");
const fs = require("fs");
const mysql = require("mysql2/promise");

// Custom CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Replace '*' with your specific origin if needed
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Configuración de CORS
app.use(
  cors({
    origin: "*", // Replace '*' with your specific origin if needed
    methods: ["GET", "POST"],
    allowedHeaders: "*",
    credentials: true
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
app.get("/", function (req, res) {
  res.send("Hola Mundo");
});

// Leer los certificados SSL
const sslOptions = {
  key: fs.readFileSync(
    "../../../etc/nginx/ssl-certificates/www.emelthserver.cloud.key"
  ),
  cert: fs.readFileSync(
    "../../../etc/nginx/ssl-certificates/www.emelthserver.cloud.crt"
  ),
};

const httpsServer = https.createServer(sslOptions, app);

const io = new Server(httpsServer, {
  cors: {
    origin:'*', // Replace '*' with your specific origin if needed
    methods: ["GET", "POST"],
    allowedHeaders: "*",
    credentials: true
  }
});

const connectedUsers = {};
const unreadPetitions = {};

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
        ;
          const [datarows] = await connection.execute(
            "SELECT * FROM respuestapet WHERE id_emi = ?",
            [userid]
          );

          if (datarows.length > 0) {
            io.to(clientData.client_id).emit("server_requests", datarows);
          }
          connection.release();
          break;
        case "3":
          const [rows] = await connection.query("SELECT * FROM vwencargado");
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


  socket.on("send_message", async (data) => {
    const connection = await pool.getConnection();
    

    const latitud_origen = data.location.latitude;
    const longitud_origen = data.location.longitude;
    const radio = 5; // Radio en kilómetros

    const distanceSql = `
      SELECT
        id_cor,
        latitud,
        longitud,
        (6371 * acos(
            cos(radians(?)) * cos(radians(latitud)) * cos(radians(longitud) - radians(?)) +
            sin(radians(?)) * sin(radians(latitud))
        )) AS distancia
      FROM
        coordenadas
      WHERE
        latitud BETWEEN ? AND ?
        AND longitud BETWEEN ? AND ?
      ORDER BY
        distancia
      LIMIT 1;
    `;

    const minLat = latitud_origen - radio / 111.045;
    const maxLat = latitud_origen + radio / 111.045;
    const minLng = longitud_origen - radio / (111.045 * Math.cos(latitud_origen * Math.PI / 180));
    const maxLng = longitud_origen + radio / (111.045 * Math.cos(latitud_origen * Math.PI / 180));

    const [nearestPoint] = await connection.execute(distanceSql, [
      latitud_origen, longitud_origen, latitud_origen,
      minLat, maxLat, minLng, maxLng
    ]);

    console.log("Punto más cercano:", nearestPoint[0].id_cor);
    // try {
    //  
    //   const [result] = await connection.execute(
    //     "INSERT INTO persona (per_nombre, per_appat, per_apmat) VALUES (?, ?, ?)",
    //     [data.message.Name, data.message.LastName, data.message.LastName2]
    //   );
    //   const insertedId = result.insertId;
    //   console.log("ID del registro insertado:", insertedId);

    //   // Ejecutar la segunda consulta solo si la primera se realizó con éxito
    //   if (insertedId) {
    //     const [result2] = await connection.execute(
    //       "INSERT INTO registropaciente (pac_rango, id_per, pac_sexo, pac_edad, pac_padecimiento, id_esp, id_est) VALUES (?, ?, ?, ?, ?, ?, ?)",
    //       [
    //         data.message.Emergency,
    //         insertedId,
    //         data.message.Sex,
    //         data.message.Age,
    //         data.message.Description,
    //         1,
    //         1,
    //       ]
    //     );
    //     const id = result2.insertId;
    //     console.log(id);
    //     await connection.execute(
    //       "INSERT INTO petresemi (id_pac, id_emi) VALUES (?, ?)",
    //       [id, data.session]
    //     );
    //   }
    //   connection.release();
    // } catch (error) {
    //   console.error("Error al guardar el mensaje:", error);
    // }
    // try {
    //   const connection = await pool.getConnection();
    //   const [rows] = await connection.execute("SELECT * FROM vwencargado");
    //   connection.release();

    //   socket.broadcast.emit("server_requests", rows);
    // } catch (error) {
    //   console.error("Error al guardar el mensaje:", error);
    // }
  });

  socket.on("accept_message", async (data) => {
    try {
      const connection = await pool.getConnection();
      console.log(data);

      const sqlInsert = await connection.execute(
        "UPDATE registropaciente SET id_est = ? WHERE id_pac = ?",
        [2, data.folio]
      );

      if (sqlInsert) {
        const resultaccept = await connection.execute(
          "UPDATE petresemi SET id_res = ? WHERE id_pac = ?",
          [data.session, data.folio]
        );

        if (resultaccept) {
          const [resultemi] = await connection.execute(
            "SELECT id_emi FROM petresemi WHERE id_pac= ?",
            [data.folio]
          );
          const [idEmisor] = await connection.execute(
            "SELECT ws_webid AS websocketid FROM websocketid WHERE id_wsid = ?",
            [resultemi[0].id_emi]
          );
          const id = idEmisor[0].websocketid;
          console.log(id);
        }

        const [rows] = await connection.execute("SELECT * FROM vwencargado");
        connection.release();

        socket.broadcast.emit("server_requests", rows);
        socket.emit("server_requests", rows);
      }

      connection.release();
    } catch (error) {
      console.error("Error al aceptar el mensaje:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

io.listen(3001, () => {
  console.log("Server is running on port 3001");
});

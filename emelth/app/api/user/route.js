import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";
import bcrypt from "bcrypt";
import util from "util";
import { websocket } from "@/lib/generate";
const saltRounds = 10;

const connection = await conn.getConnection();

export async function POST(request) {
    const { username, password, rol, hospital } = await request.json();
    const idper = '1';

    const checkEmailSql = 'SELECT * FROM usuario WHERE usu_correo = ?';
    try {
        const [result] = await connection.query(checkEmailSql, [username]);

        if (result.length > 0) {
            return NextResponse.json({ message: "Usuario ya existe" });
        } else {
            const sql1 = "SELECT COUNT(*) AS total_registros FROM websocketid;";
            const [result1] = await connection.query(sql1);
            const totalRegistros = result1[0].total_registros;

            const WebSocketId = websocket(rol, totalRegistros);

            const sql2 = "INSERT INTO websocketid(ws_webid) VALUES (?)";
            const [result2]= await connection.query(sql2, [WebSocketId]);
            const insertId = result2.insertId;

            const sql = 'INSERT INTO usuario (id_per, usu_correo, usu_pass, id_rol, id_wsid) VALUES (?, ?, ?, ?, ?)';
            const hash = await bcrypt.hash(password.toString(), saltRounds);
            const values = [idper, username, hash, rol, insertId];

            const [result3] = await connection.query(sql, values);
            const userId = result3.insertId;

            if (rol === "3"&&hospital) {
                console.log(rol)
                console.log(hospital)
                const sql4 = "SELECT id_hos FROM hospital WHERE hos_nombre = ?";
                const [result4] = await connection.query(sql4, [hospital]);
                if (result4.length > 0) {
                    const hospitalId = result4[0].id_hos;
                    const sql5 = 'INSERT INTO encargadohos (id_usu, id_hos) VALUES (?, ?)';
                    const valueshos = [userId, hospitalId];
                    await connection.query(sql5, valueshos);
                    
                } else {
                    connection.release();
                    return NextResponse.json({ message: "Hospital no encontrado" });
                }
            }
            connection.release()
            return NextResponse.json({ message: 'Usuario registrado exitosamente' });
        }
    } catch (err) {
        connection.release();
        console.error('Error:', err);
        return NextResponse.json({ message: 'Error interno del servidor' });
    }
}

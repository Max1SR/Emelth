import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";
import bcrypt from "bcrypt";
const saltRounds = 10; 

export function GET(){
    return NextResponse.json("Hello world")
}
export async function POST(request){
    const {username,password,rol} = await request.json();
    const WebSocketId= '1'
    const idper="1"
    const sql = 'INSERT INTO usuario (id_per,usu_correo,usu_pass,id_rol,id_wsid) VALUES (?)';
   console.log("new register")

    bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return NextResponse.json({ error: 'Internal server error' });
        }

       
        const values = [idper,req.body.username, hash,req.body.rol, WebSocketId];

        conn.query(sql, [values], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ error: 'User registration failed' });
            }

            res.json({ Status: 'User registered successfully' });
        });
    });
    return NextResponse.json("Hello world")

}
export function POST(){
    return NextResponse.json("Hello world")

}

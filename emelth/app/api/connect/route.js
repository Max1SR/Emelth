import { NextResponse } from "next/server";
import {conn} from "@/lib/mysql";
import bcrypt from "bcrypt"

const connection = await conn.getConnection();

export async function GET() {
    try {
        const result = await connection.query('SELECT NOW()');
        connection.release();

        console.log(result[0]);
        return NextResponse.json({ message: "Hello world", timestamp: result[0] });
    } catch (error) {
        connection.release();

        console.error(error);
        return NextResponse.json({ error: "Error fetching timestamp" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const requestjson = await request.json();
        const checkEmailSql = 'SELECT * FROM usuario WHERE usu_correo = ?';
        const [result] = await connection.query(checkEmailSql, [requestjson.username]);
        if (result.length > 0) {
            const match = await bcrypt.compare(requestjson.password.toString(), result[0].usu_pass);
            if (match) {
                if (`${result[0].id_rol}`!="1"){
                    return NextResponse.json({ error: "El usuario no es paramedico" }, { status: 401 });

                }else{
                const user = {
                    image: `${result[0].id_usu}`,
                    name: `${result[0].id_rol}`,
                    email: `${result[0].id_wsid}`
                };
                console.log(user);
                connection.release()
                return NextResponse.json(user);}
            } else {
                connection.release();

                return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
            }
        } else {
            connection.release();

            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
    } catch (err) {
        connection.release();

        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

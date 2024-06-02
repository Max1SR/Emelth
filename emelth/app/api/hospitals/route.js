import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";

export async function GET() {
    try {
        const sql = `SELECT DISTINCT Nombre, Telefono, Calle, Colonia, CodigoPostal 
                     FROM vwhospital`;
        const result = await conn.query(sql);
        console.log(result);
        // Cerrar la conexión después de usarla
        await conn.end();
        return NextResponse.json({ message: result });
    } catch (error) {
        console.error("Error al obtener datos de la base de datos:", error);
        // Devolver un mensaje de error en caso de que ocurra algún problema
        return NextResponse.error(error);
    }
}

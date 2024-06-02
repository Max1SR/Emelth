import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";

// Consulta SQL para obtener todas las especialidades
const sqlQuery = `SELECT * FROM especialidad`;

export async function GET() {
    try {
        // Ejecuta la consulta SQL para obtener todas las especialidades
        const result = await conn.query(sqlQuery);
        
        // Devuelve una respuesta JSON con el resultado de la consulta
        return NextResponse.json({
            Status: "Success",
            data: result
        });
    } catch (error) {
        // Maneja cualquier error que ocurra durante la ejecución de la consulta
        console.error("Error al obtener las especialidades:", error);
        
        // Devuelve una respuesta de error
        return NextResponse.error(error);
    }
}

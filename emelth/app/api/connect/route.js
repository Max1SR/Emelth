import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";

export async function GET() {
    try {
        // Ejecuta la consulta para obtener la fecha y hora actuales
        

        // Devuelve una respuesta JSON con un mensaje simple
        return NextResponse.json({ message: "Hello world" });
    } catch (error) {
        // Maneja cualquier error que ocurra durante la ejecución de la consulta
        console.error("Error al obtener la fecha y hora actuales:", error);
        
        // Devuelve una respuesta de error
        return NextResponse.error(error);
    }
}

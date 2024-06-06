import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";
const connection = await conn.getConnection();

export async function GET(){
    try {
        const [rows] = await conn.query('SELECT * FROM vwPacientes');
        if (rows.length > 0) {connection.release();
            return NextResponse.json({ message: rows,success:"success" });
        } else {
            connection.release();
            return NextResponse.json({ message: "Sin registros con estas caracteristicas", success:"error" });
        }
    } catch (error) {
        connection.release();
        console.error(error);
        return NextResponse.json({ message: "Error del lado del servidor",success:"error" });
    }
}

export async function POST(request){
    try {
        const { value, filter } = await request.json();
        let filtersql;
        

        switch (filter) {
            case "0":
                filtersql= "SELECT * FROM vwPacientes"
                break;
            case "1":
                filtersql = "SELECT * FROM vwPacientes WHERE Sex = ?";
                
                break;
            case "2":
                filtersql = "SELECT * FROM vwPacientes WHERE Emergency = ?";

                break;
            case "3":
                filtersql = "SELECT * FROM vwPacientes WHERE Age = ?";


            
                break;
            case "4":
                filtersql = "SELECT * FROM vwPacientes WHERE Estate = ?";

                break;
            default:
                return NextResponse.json({ message: "Filtro no valido" });
        }

        if (filtersql && value) {
            const [rows] = await connection.query(filtersql, value);
            if (rows.length>0) {
                connection.release();
                return NextResponse.json({ message: rows, success:"success"});
            } else {
                connection.release();
                return NextResponse.json({ message: "Sin registros", success:"error"});
            }
        } else {
            connection.release();
            return NextResponse.json({ message: "Filtro no valido",success:"error"});
        }
    } catch (error) {
        connection.release();
        console.error(error);
        return NextResponse.json({ message: "Error procesando al procesar los datos", success:"error" });
    }
}

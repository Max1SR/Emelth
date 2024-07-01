import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";
const connection = await conn.getConnection();

export async function POST(request){
    const request1= await request.json();
    const data= request1.folio;
    const [result]=await connection.query(  "UPDATE registropaciente SET id_est = 3 WHERE id_pac = ?",[
        data

    ]);

    if (result){ 
        connection.release();

        return NextResponse.json({message:"exitoso"})
}else{
connection.release();

return NextResponse.json({message:"fallo"})}

}
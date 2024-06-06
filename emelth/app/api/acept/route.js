import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";
const connection = await conn.getConnection();

export async function POST(request){
    const request1= await request.json();
    const data= request1.id;
    const [result]=await connection.query('SELECT * FROM respuestapet where id_res= ?',[
        data

    ]);

    if (result){ 
        connection.release();

        return NextResponse.json({message:result})
}else{
connection.release();

return NextResponse.json({message:"fallo"})}

}
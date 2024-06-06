import { NextResponse } from "next/server";
import { websocket } from "@/lib/generate";
import { conn } from "@/lib/mysql";
const connection = await conn.getConnection();


export async function POST(request) {
   const {id}= await request.json();
   const sql = "select ws_webid as websocketid from websocketid where id_wsid = ?;";
   const [result]= await connection.query(sql,[id]);
   const websocketid = result[0];
   connection.release();
    return NextResponse.json(websocketid);

   
 
    
    

    
}

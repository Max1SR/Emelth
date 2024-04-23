import { NextResponse } from "next/server";
import { websocket } from "@/lib/generate";
import { conn } from "@/lib/mysql";


export async function POST(request) {
   const {id}= await request.json();
   const sql = "select ws_webid as websokectid from websocketid where id_wsid = ?;";
   const result= await conn.query(sql,[id]);
    const websocketid=result[0].websocketid;
    console.log (websocketid)

    return NextResponse.json(result);

   
 
    
    

    
}

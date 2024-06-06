
import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";
const sql = `SELECT * from especialidad`;
const connection = await conn.getConnection();

export async function GET(){
    const sql = `SELECT * from especialidad`;
    const [result]= await connection.query(sql)
    connection.release();
    return NextResponse.json({
        Status:"Success",
        data:result});
}

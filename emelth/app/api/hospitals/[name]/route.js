import { NextResponse } from "next/server";
import { conn } from "@/lib/mysql";

export async function GET(request, { params }) {
    try {
        const hospitalData = {
            especialidades: [],
            informacionHospital: {}
        };
        const newName = decodeURIComponent(params.name);
        const result = await conn.query(`SELECT DISTINCT especialidad, Telefono, Calle, Colonia, CodigoPostal
                                        FROM vwhospital
                                        WHERE Nombre = ?`, newName);

        result.forEach(row => {
            if (Object.keys(hospitalData.informacionHospital).length === 0) {
                hospitalData.informacionHospital = {
                    Telefono: row.Telefono,
                    Calle: row.Calle,
                    Colonia: row.Colonia,
                    CodigoPostal: row.CodigoPostal
                };
            }
            hospitalData.especialidades.push(row.Especialidad);
        });

        return NextResponse.json({
            Status: "Success",
            data: hospitalData
        });
    } catch (error) {
        console.error("Error al obtener datos del hospital:", error);
        return NextResponse.error(error);
    }
}

export async function PUT(request, { params }) {
    try {
        const requestData = await request.json();
        const newData = requestData.data;
        const name = decodeURIComponent(params.name);

        const updateResult = await conn.query(`UPDATE hospital SET ? WHERE hos_nombre = ?`, [
            newData,
            params.name
        ]);

        if (updateResult.affectedRows === 0) {
            return NextResponse.json({
                message: "Hospital no encontrado"
            }, { status: 404 });
        } else {
            const updatedHospital = await conn.query(`SELECT DISTINCT especialidad, Telefono, Calle, Colonia, CodigoPostal
                                                      FROM vwhospital
                                                      WHERE Nombre = ?`, params.name);
            console.log(updatedHospital);
            return NextResponse.json("Actualizado");
        }
    } catch (error) {
        console.error("Error al actualizar datos del hospital:", error);
        return NextResponse.error(error);
    }
}

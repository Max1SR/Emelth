import express from 'express';
import mysql from 'mysql2';


import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Heatens123-',
    database: 'emelth',
});



app.post('/getEsp', (req, res) => {
    
    const sql = `SELECT * from especialidad 
    `

        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error getting hospitals:', err);
                return res.status(500).json({ error: 'Query failed' });
            }
           
            console.log('realizo')
            return res.json({
                Status:"Success",
                data:result
            
            });
        });

});
app.post('/getHospital',(req,res)=>{
   
    let hospital=req.body.hospitalName;
    console.log(hospital);
 const sql=   `SELECT DISTINCT especialidad, Telefono,Calle,Colonia,CodigoPostal
FROM vwhospital
WHERE Nombre = '${hospital}'`
db.query(sql, (err, result) => {
    const hospitalData = {
        especialidades: [],
        informacionHospital: {}
    };
    if (err) {
        console.error('Error getting hospitals:', err);
        return res.status(500).json({ error: 'Query failed' });
    }
   
    console.log('realizo')
 

    result.forEach(row => {
        // Si no hemos almacenado la información del hospital todavía, la almacenamos
        if (Object.keys(hospitalData.informacionHospital).length === 0) {
            hospitalData.informacionHospital = {
                Telefono: row.Telefono,
                Calle: row.Calle,
                Colonia: row.Colonia,
                CodigoPostal: row.CodigoPostal
            };
        }
        // Almacenamos las especialidades
        hospitalData.especialidades.push(row.Especialidad);
    });
    console.log(hospitalData)
    // Devolver la respuesta con los datos empaquetados
    return res.json({
        Status: "Success",
        data: hospitalData
    });
});


    
})
app.post('/updateHos',(req,res)=>{
   
    let newData=req.body;
    if(newData){
        console.log(newData);
    }
   
//  const sql=   `SELECT DISTINCT especialidad, Telefono,Calle,Colonia,CodigoPostal
// FROM vwhospital
// WHERE Nombre = '${hospital}'`
// db.query(sql, (err, result) => {
//     const hospitalData = {
//         especialidades: [],
//         informacionHospital: {}
//     };
//     if (err) {
//         console.error('Error getting hospitals:', err);
//         return res.status(500).json({ error: 'Query failed' });
//     }
   
//     console.log('realizo')
 

//     result.forEach(row => {
//         // Si no hemos almacenado la información del hospital todavía, la almacenamos
//         if (Object.keys(hospitalData.informacionHospital).length === 0) {
//             hospitalData.informacionHospital = {
//                 Telefono: row.Telefono,
//                 Calle: row.Calle,
//                 Colonia: row.Colonia,
//                 CodigoPostal: row.CodigoPostal
//             };
//         }
//         // Almacenamos las especialidades
//         hospitalData.especialidades.push(row.Especialidad);
//     });
//     console.log(hospitalData)
//     // Devolver la respuesta con los datos empaquetados
//     return res.json({
//         Status: "Success",
//         data: hospitalData
//     });
// });


    
})
app.post('/addHospital',(req,res)=>{
   
    let newData=req.body;
    if(newData){
        console.log(newData);
    }
   
//  const sql=   `SELECT DISTINCT especialidad, Telefono,Calle,Colonia,CodigoPostal
// FROM vwhospital
// WHERE Nombre = '${hospital}'`
// db.query(sql, (err, result) => {
//     const hospitalData = {
//         especialidades: [],
//         informacionHospital: {}
//     };
//     if (err) {
//         console.error('Error getting hospitals:', err);
//         return res.status(500).json({ error: 'Query failed' });
//     }
   
//     console.log('realizo')
 

//     result.forEach(row => {
//         // Si no hemos almacenado la información del hospital todavía, la almacenamos
//         if (Object.keys(hospitalData.informacionHospital).length === 0) {
//             hospitalData.informacionHospital = {
//                 Telefono: row.Telefono,
//                 Calle: row.Calle,
//                 Colonia: row.Colonia,
//                 CodigoPostal: row.CodigoPostal
//             };
//         }
//         // Almacenamos las especialidades
//         hospitalData.especialidades.push(row.Especialidad);
//     });
//     console.log(hospitalData)
//     // Devolver la respuesta con los datos empaquetados
//     return res.json({
//         Status: "Success",
//         data: hospitalData
//     });
// });


    
})


const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

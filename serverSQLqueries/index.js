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


app.post('/getHospitals', (req, res) => {
    
    const sql = `SELECT DISTINCT Nombre, Telefono,Calle, Colonia, CodigoPostal 
    FROM vwhospital;
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


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

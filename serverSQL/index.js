import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';


const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Heatens123-',
    database: 'emelth',
});

const saltRounds = 10; 

app.post('/register', (req, res) => {
    const WebSocketId= '1'
    const idper="1"
    
    // Primero, verifica si el correo electrónico ya está registrado
    const checkEmailSql = 'SELECT * FROM usuario WHERE usu_correo = ?';
    db.query(checkEmailSql, req.body.username, (err, result) => {
        if (err) {
            console.error('Error checking email:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        // Si el correo electrónico ya está registrado, devuelve un error
        if (result.length > 0) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Si el correo electrónico no está registrado, continúa con el registro
        const sql = 'INSERT INTO usuario (id_per,usu_correo,usu_pass,id_rol,id_wsid) VALUES (?)';
        console.log("new register")

        bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
            if (err) {
                console.error('Error hashing password:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            const values = [idper,req.body.username, hash,req.body.rol, WebSocketId];

            db.query(sql, [values], (err, result) => {
                if (err) {
                    console.error('Error inserting user:', err);
                    return res.status(500).json({ error: 'User registration failed' });
                }

                return res.json({ Status: 'User registered successfully' });
            });
        });
    });
});

app.post('/login', (req, res) => {
    console.log('here');
 
    const sql = "SELECT * FROM usuario where usu_correo = (?)";
    db.query(sql,[req.body.username],(err,result)=>{

        if (err) return res.json({Error:"Error"});
        else{
            if(result.length>0){
                bcrypt.compare(req.body.password.toString(),result[0].usu_pass,(err,response)=>
                {
                    if(err) return res.json({Err:"Error"});
                    if(response){
                        return res.json({
                            Status:"Success",
                            user:{id:`${result[0].id_usu}`,rol:`${result[0].id_rol}`,WebSocketId:`${result[0].id_wsid}`}
                        
                        });
                              
                    }
                    if(response) return console.log(response);
                    else return res.json({Err:"wrong password"})
                })

            }else{
                return res.json({Error:"Email not existing"})
            }
        }
    })
  

  
       
       
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

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
    database: 'users',
});

const saltRounds = 10; 

app.post('/register', (req, res) => {
    const sql = 'INSERT INTO credentials (user,password) VALUES (?)';
   

    bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

       
        const values = [req.body.username, hash];

        db.query(sql, [values], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ error: 'User registration failed' });
            }

            return res.json({ message: 'User registered successfully' });
        });
    });
});
app.post('/login', (req, res) => {
    console.log('here');
    let username=req.body.username;
 
    const sql = "SELECT * FROM credentials where user = (?)";
    db.query(sql,[req.body.username],(err,result)=>{

        if (err) return res.json({Error:"Error"});
        else{
            if(result.length>0){
                bcrypt.compare(req.body.password.toString(),result[0].password,(err,response)=>
                {
                    if(err) return res.json({Err:"Error"});
                    if(response){
                        res.json({
                            Status:"Success",
                            user:{id:"1",rol:"3",WebSocketId:"2"}
                        
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

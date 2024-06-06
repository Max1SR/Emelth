import mysql from 'mysql2/promise';

export const conn = mysql.createPool({
    host: '191.101.232.160',
    user: 'strats1',
    password: '4[%[T_I?7wk997%1oqnD0,Ss(',
    port: 3306,
    database: 'emelth',
});

import mysql from 'mysql2';

const q=mysql.createConnection({
    host:"localhost",
    database:"frontback1",
    user:"root",
    password:''

})

export default q;




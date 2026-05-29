const {Pool , Client} = require('pg');
require('dotenv').config();

const pool = new Pool({
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  host:process.env.DB_HOST,
  port:process.env.DB_PORT,
  database:process.env.DB
})


pool.connect()
  .then(() => {
    console.log('PostgreSQL Connected');
  })
  .catch((err) => {
    console.log(err);
  });


  /*

const client = new Client({
  user:"",
  password:"",
  host:"",
  port: 8080,
  database:""
})


client.connect().then()

You want to connect with the client . 

*/



module.exports = pool;



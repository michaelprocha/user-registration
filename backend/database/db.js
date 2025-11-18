import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });

console.log("ENV USER:", process.env.DB_USER);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});


db.connect((err) => {
  if (err) {
    console.error("Database connection error: " + err.message);
    return;
  }
  console.log("Database connected");
});

export default db;
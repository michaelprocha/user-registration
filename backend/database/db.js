import mysql from 'mysql2';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "newfase2025",
  database: "user_registration",
  port: 3306
});

db.connect((e) => {
    if (e) {
        console.error(`Erro ao conectar ao bd: ${e.message}`);
        return;
    }

    console.log('Conectado ao bd');
});

export default db;
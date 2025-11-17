import db from "../database/db.js";

export default function getUsers(res) {
	db.query("SELECT * FROM users", (e, result) => {
		if (e) {
			console.error(`Erro na busca: ${e.message}`);
			res.statusCode = 500;
			res.setHeader("Content-type", "text/plain; charset=utf-8");
			res.statusMessage = "Erro no banco de dados";
			res.end(`${e.message}`);
			return;
		}
		res.statusCode = 200;
		res.statusMessage = "Conteudo disponivel!";
		res.setHeader("Content-type", "application/json; charset=utf-8");
		res.end(JSON.stringify(result));
	});
}

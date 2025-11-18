import db from "../database/db.js";
export default function postUser(res, req) {
	let body = "";
	req.on("data", (chunk) => {
		body += chunk.toString();
	});

	req.on("end", () => {
		const data = JSON.parse(body);
		const { first_name, last_name, date_birth } = data;
		const query = "INSERT INTO users (first_name, last_name, date_birth) VALUES (?, ?, ?)";
		db.query(query, [first_name, last_name, date_birth], (e, result) => {
			if (e) {
				console.error(`Erro ao postar: ${e.message}`);
                res.statusCode = 500;
                res.setHeader("Content-type", "text/plain; charset=utf-8");
                res.statusMessage = "Erro no banco de dados";
				res.end(`${e.message}`);
				return;
			}
			res.statusCode = 201;
			res.statusMessage = "Conteudo postado!";
			res.setHeader("Content-type", "application/json; charset=utf-8");
			res.end(JSON.stringify(result));
		});
	});
}

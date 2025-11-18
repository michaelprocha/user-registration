import { json } from "stream/consumers";
import db from "../database/db.js";

export default function updateUser(res, req, id, update) {
	if (update === "first_name") {
		let body = "";
		req.on("data", (chunk) => (body += chunk.toString()));
		req.on("end", () => {
			const data = JSON.parse(body);
			const { first_name } = data;
			const query = "UPDATE users SET first_name = ? WHERE id = ?";
			db.query(query, [first_name, id], (e, result) => {
				if (e) {
					res.statusCode = 500;
					res.statusMessage = "Erro no banco de dados";
					res.setHeader("Content-type", "text/plain; charset=utf-8");
					res.end(`${e.message}`);
					return;
				}
				res.statusCode = 200;
				res.statusMessage = "Atualizado com sucesso";
				res.setHeader("Content-type", "application/json; charset=utf-8");
				res.end(JSON.stringify(result));
			});
		});
	} else if (update === "last_name") {
		let body = "";
		req.on("data", (chunk) => (body += chunk.toString()));
		req.on("end", () => {
			const data = JSON.parse(body);
			const { last_name } = data;
			const query = "UPDATE users SET last_name = ? WHERE id = ?";
			db.query(query, [last_name, id], (e, result) => {
				if (e) {
					res.statusCode = 500;
					res.statusMessage = "Erro no banco de dados";
					res.setHeader("Content-type", "text/plain; charset=utf-8");
					res.end(`${e.message}`);
					return;
				}
				res.statusCode = 200;
				res.statusMessage = "Atualizado com sucesso";
				res.setHeader("Content-type", "application/json; charset=utf-8");
				res.end(JSON.stringify(result));
			});
		});
	} else if (update === "date_birth") {
		let body = "";
		req.on("data", (chunk) => body += chunk.toString());
		req.on("end", () => {
            const data = JSON.parse(body);
			const { date_birth } = data;
            const query = "UPDATE users SET date_birth = ? WHERE id = ?";
			db.query(query, [date_birth, id], (e, result) => {
				if (e) {
					res.statusCode = 500;
					res.statusMessage = "Erro no banco de dados";
					res.setHeader("Content-type", "text/plain; charset=utf-8");
					res.end(`${e.message}`);
					return;
				}
				res.statusCode = 200;
				res.statusMessage = "Atualizado com sucesso";
				res.setHeader("Content-type", "application/json; charset=utf-8");
				res.end(JSON.stringify(result));
			});
		});
	} else {
        res.statusCode = 200;
        res.statusMessage = "Atualizado invalida";
        res.setHeader("Content-type", "text/plain; charset=utf-8");
        res.end('Invalido');
	}
}

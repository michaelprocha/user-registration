import db from "../database/db.js";

export default function deleteUser(res, id) {
	const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, id, (e) => {
        if (e) {
            console.error(`Erro ao deletar ${e.message}`);
            res.statusCode = 500;
            res.setHeader("Content-type", "text/plain; charset=utf-8");
            res.statusMessage = 'Erro no banco de dados';
            res.end(`${e.message}`);
            return;
        }
        res.statusCode = 204;
        res.setHeader("Content-type", "application/json; charset=utf-8");
        res.statusMessage = 'Deletado com sucesso!';
        res.end();
    });
}

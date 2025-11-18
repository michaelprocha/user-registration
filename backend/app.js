import http from 'http';
import { URL } from "url";
import getUsers from './methods/get.js';
import postUser from './methods/post.js';
import deleteUser from "./methods/delete.js";
import updateUser from './methods/patch.js';

const port = 3000;

const server = http.createServer((req, res) => {
    const newUrl = new URL(req.url, 'http://localhost:3000');
    if (newUrl.pathname === '/users' && req.method === 'GET') {
        getUsers(res);
    } else if(newUrl.pathname === '/users' && req.method === 'POST'){
        postUser(res, req)
    } else if(req.method === 'DELETE'){
        const users = newUrl.pathname.substring(0,6);
        if (users === '/users') {
            const id = newUrl.pathname.substring(7);
            deleteUser(res, id);
        }
    } else if (req.method === 'PATCH'){
        const users = newUrl.pathname.substring(0,6);
        if (users === '/users') {
            const id = newUrl.pathname.substring(7,8);
            const update = newUrl.pathname.substring(9);
            updateUser(res, req, id, update);
        }
    }else{
        res.statusCode = 405;
        res.statusMessage = 'metodos permitidos: "DELETE", "PATCH", "GET" e "POST"';
        res.setHeader('Content-type', 'text/plain; charset=utf-8');
        res.end('Metodo invalido');
    }
});

server.listen(port, () => {
    console.log(`Servidor ligado! Porta: ${port}`)
});
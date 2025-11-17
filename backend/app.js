import http from 'http';
// import path from "path";
import { URL } from "url";
import getUsers from './methods/get.js';
import postUser from './methods/post.js';

const port = 3000;
// const initialPath = path.normalize(`${process.cwd()}/backend`);



const server = http.createServer((req, res) => {
    const newUrl = new URL(req.url, 'http://localhost:3000');
    if (newUrl.pathname === '/users' && req.method === 'GET') {
        getUsers(res);
    } else if(newUrl.pathname === '/users' && req.method === 'POST'){
        postUser(res, req)
    }

});

server.listen(port, () => {
    console.log(`Servidor ligado! Porta: ${port}`)
});
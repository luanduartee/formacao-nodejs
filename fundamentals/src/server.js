import http from 'http';
import { json } from './middlewares/json.js';

const users = [];

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res)

    if (method === 'GET' && url === '/users') {
        return res.setHeader('Content-Type', 'application/json').end(JSON.stringify(users));
    }

    if (method === 'POST' && url === '/users') {
        const { name, age, email } = req.body
        users.push({
            id: 1,
            name,
            age,
            email,
        })

        return res.writeHead(201).end();
    }
})

server.listen(3333);
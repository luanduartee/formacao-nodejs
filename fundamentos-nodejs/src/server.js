import http from 'http';

const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/users') {
        return res.setHeader('Content-Type', 'application/json').end(JSON.stringify(users));
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: "Josh Beauchamp",
            age: 25,
            profession: "Dancer"
        })

        return res.writeHead(201).end();
    }
})

server.listen(3333);
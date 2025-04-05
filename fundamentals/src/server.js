import http from 'http';

const users = [];

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
        req.body = null
    }

    console.log(req.body)

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
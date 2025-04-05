// Arquivo buffer que possibilita a criação de uma pequena memória para facilitar o processo de envio e recebimento de requisições

export async function json(req, res) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader('Content-type', 'application/json')
}

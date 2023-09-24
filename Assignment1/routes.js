const fs = require('fs');
const users = [];

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Usuarios do Sistema</title></head>');
        res.write('<body>');
        res.write('<h3>Coloque seu nome para entrar na lista de usuarios:</h3>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="name"><button type="submit">Enviar</button></form>');
        res.write('<p>Ir para a lista de todos os usuarios <a href="/users">aqui</a>.</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Usuarios do Sistema</title></head>');
        res.write('<body>');
        res.write('<h3>Lista de Usuarios do Servidor</h3><ul>');
        for(let i=0 ; i<users.length ; i++){
            res.write(`<li>${users[i]}</li>`);
        }
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            users.push(message);
            // console.log(users)
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
};

exports.handler = requestHandler;
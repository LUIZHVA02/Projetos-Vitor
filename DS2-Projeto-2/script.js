const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('DS2-Projeto-2/db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 7080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running in http://localhost:${port}/contatos`);
});
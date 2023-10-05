import {fastify} from "fastify";


const server = fastify()

const host = 'localhost' //127.0.0.1
const port = '5001'

server.get('/', async (req, res) => {
    res.send('servidor no ar')
})

server.get('/produtos', async (req, res) => {
    res.send('produtos')
})


server.listen({
    port,
    host
})
.then(() => console.log(`Servidor rodando em http://${host}:${port}`))
.catch(err => console.log(`Erro ao subir o servidor: ${err}`))
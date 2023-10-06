import {fastify} from "fastify";
import './db/db.js'

const server = fastify()



const host = 'localhost' //127.0.0.1
const port = '5000'

server.get('/', async (req, res) => {
    res.send('servidor no ar')
})

server.get('/produtos', async (req, res) => {
    res.send('mostrar produtos')
})

server.get('/produto/:id', async(req, res) =>{
    res.send('mostrar produto por id')
})

server.post('/produto', async (req,res) => {
    res.send('criando produto')
})

server.put('/produto/:id', async(req, res) =>{
    res.send('alterando um produto por id')
})

server.delete('/produto/:id', async(req, res) => {
    res.send('Deletando um produto por id')
})

server.listen({
    port,
    host
})
.then(() => console.log(`Servidor rodando em http://${host}:${port}`))
.catch(err => console.log(`Erro ao subir o servidor: ${err}`))
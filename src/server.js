import express from 'express'
import veiculoRouter  from './routes/veiculo.routes.js'

const server = express()

server.use(express.json())

server.get('/health', (req, res) => {
    res.json({
        status: 'Tá fucionando meu parceiro'
    })
})

server.use('/veiculos', veiculoRouter)

server.listen(3000, () => {
    console.log('ta rodando pae, lá no http://localhost:3000')
})
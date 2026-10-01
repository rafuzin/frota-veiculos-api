import pool from '../config/db.js'

class veiculoServices {

    async getTudo() {
        const res = await pool.query('SELECT * FROM veiculos')
        return res.rows
    }

    async create(dados) {
        const { modelo, marca, ano, placa } = dados

        const res = await pool.query(
    'INSERT INTO produtos (modelo, marca, ano, preco, placa) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [modelo, marca, ano, preco, placa]
)
        return res.rows[0]
    }
}

export default veiculoServices
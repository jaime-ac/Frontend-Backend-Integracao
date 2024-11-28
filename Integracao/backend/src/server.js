// Importando express, cors e pg
const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()

// Configurando pool para acesso ao banco de dados
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL / PGAdmin
    host: 'localhost',
    database: 'usuarios', // Nome da sua database no PostgreSQL / PGAdmin
    password: 'senai', // Substitua pela sua senha do PostgreSQL / PGAdmin
    port: 5432, // Porta padrão do PostgreSQL
})

// // Habilitando CORS para as rotas
// app.use(cors())
// app.use(express.json())

// // Rota para inserção de user no banco de dados
// app.post('/Users', async (req, res) => {
//     const {username} = req.body
//     try {
//         // Query para inserção do user no banco de dados
//         const result = await pool.query(
//             'INSERT INTO users (username) VALUES ($1) RETURNING *',
//             [username]
//         )
//         res.status(201).json(result.rows[0])
//     } catch (err) {
//         console.error(err.message)
//         res.status(500).json({ error: 'Erro ao cadastrar usuário! :(' })
//     }
// })

app.use(cors())
app.use(express.json())

app.post('/Rota', async (req, res) => {
    const {nome, email, senha} = req.body
    try {
        const result = await pool.query(
            'INSERT INTO usuarios VALUES ($1, $2, $3)',
            [nome, email, senha]
        )
        res.status(201).json(result.rows[0])
    } catch (err){
        console.error(err.message)
        res.status(500).json({ error: 'Erro ao cadastrar usuário!' })
    }
})

// Listener para confirmação de servidor rodando
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000! :D')
})
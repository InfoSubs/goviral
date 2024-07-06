const express = require('express');
const router = express.Router();

// Exemplo de middleware para todas as requisições nesta rota
router.use((req, res, next) => {
    console.log('Requisição recebida em API Routes:', new Date());
    next();
});

// Rota para obter dados JSON de exemplo
router.get('/data', (req, res) => {
    const data = {
        message: 'Exemplo de dados JSON da API',
        timestamp: new Date()
    };
    res.json(data);
});

// Rota para processamento de formulário POST
router.post('/submit', (req, res) => {
    const { name, email } = req.body;
    // Lógica para processar os dados do formulário
    res.send(`Dados recebidos: ${name}, ${email}`);
});

// Rota para tratamento de erros
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erro interno no servidor!');
});

module.exports = router;

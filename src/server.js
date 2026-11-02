const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para aceitar JSON nas requisições
app.use(express.json());

// Rota principal de teste
app.get('/', (req, res) => {
  return res.json({ message: 'API de Projetos Sociais ativa e a rodar com Nodemon!' });
});

// Rota de listagem dos projetos sociais
app.get('/projects', (req, res) => {
  const projects = [
    { 
      id: 1, 
      title: 'Projeto Leitura para Todos', 
      category: 'Educação',
      description: 'Incentivo à leitura e doação de livros para comunidades.'
    },
    { 
      id: 2, 
      title: 'Horta Comunitária', 
      category: 'Meio Ambiente',
      description: 'Cultivo sustentável de alimentos em espaços urbanos.'
    }
  ];

  return res.json(projects);
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
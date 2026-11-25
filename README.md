# Jogo Da Forca

Projeto acadêmico de jogo da forca com React + TypeScript no frontend, Node.js + Fastify no backend e SQLite por meio do Prisma ORM. O servidor escolhe a palavra e não a envia enquanto a partida estiver em andamento.

## Requisitos
- Node.js 20 ou superior (recomendado Node 22 LTS)
- npm

## Instalação e execução
Abra dois terminais na pasta do projeto.

### 1. Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm run seed
npm run dev
```
O backend ficará disponível em `http://localhost:3333`. Para verificar: `http://localhost:3333/api/saude`.

### 2. Frontend (outro terminal)
```bash
cd frontend
npm install
npm run dev
```
Abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

## Testes e compilação
No terminal do backend: `npm test` e `npm run build`. No terminal do frontend: `npm run build`.

## Regras principais
- O apelido deve ter de 3 a 20 caracteres.
- Cada partida começa com 6 vidas. Uma letra errada retira uma vida.
- Cada letra pode ser tentada uma única vez.
- A palavra secreta só aparece quando a partida termina.
- Vitória: 10 pontos por vida restante + 5 pontos por letra distinta da palavra. Derrota: zero pontos.
- O ranking mostra as dez melhores vitórias; em empate, vence quem terminou primeiro.

## Estrutura
- `backend/`: API Fastify, Prisma, SQLite, regras e testes.
- `frontend/`: aplicação React, componentes e estilos.
- `docs/`: planejamento, contrato da API, decisões e diário de bordo.

## Observação
O nível de dificuldade é opcional na API; quando não informado, o backend usa `facil`. A interface permite selecionar fácil, médio ou difícil.

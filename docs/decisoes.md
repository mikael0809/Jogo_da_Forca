# Decisões técnicas

## 1. React e TypeScript no frontend
- **Contexto:** a interface precisa ser interativa e ter tipos claros para os dados da partida.
- **Decisão:** utilizar React com TypeScript.
- **Alternativa descartada:** desenvolver toda a interface com HTML e JavaScript sem biblioteca.
- **Consequência:** componentes reutilizáveis e erros de tipos identificáveis durante a compilação.

## 2. Fastify na API
- **Contexto:** o projeto precisa de rotas HTTP para iniciar e atualizar partidas.
- **Decisão:** utilizar Fastify com Node.js.
- **Alternativa descartada:** Express, presente em exemplos de referência.
- **Consequência:** API organizada com plugins e validação dos dados recebidos.

## 3. Prisma e SQLite
- **Contexto:** palavras e partidas precisam continuar salvas após reiniciar o servidor.
- **Decisão:** utilizar Prisma ORM com banco SQLite.
- **Alternativa descartada:** manter os dados somente em arrays na memória.
- **Consequência:** persistência local e consultas tipadas pelo Prisma.

## 4. Validação com Zod
- **Contexto:** apelidos e palpites precisam ser validados antes de processar a jogada.
- **Decisão:** utilizar Zod nas entradas da API e regras próprias no módulo de jogo.
- **Alternativa descartada:** confiar apenas na validação visual do frontend.
- **Consequência:** dados inválidos também são bloqueados quando a API é chamada diretamente.

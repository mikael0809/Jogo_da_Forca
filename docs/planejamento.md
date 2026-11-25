# Planejamento — Jogo Da Forca

## Objetivo
Desenvolver um jogo da forca web com palavras de tecnologia, validação no servidor, persistência em SQLite e ranking das dez melhores vitórias.

## Tecnologias
React, TypeScript, Vite, Node.js, Fastify, Zod, Prisma ORM, SQLite e Vitest.

## Dados armazenados
| Entidade | Campos | Finalidade |
|---|---|---|
| Palavra | id, texto, categoria, dica, dificuldade | Catálogo de palavras sorteadas pelo servidor. |
| Partida | id, jogador, palavraId, dificuldade, letrasTentadas, vidasRestantes, status, pontos, criadaEm, finalizadaEm | Estado e resultado de cada jogo. |

## Tipos principais
`EstadoPartida`: id, jogador, categoria, dica, dificuldade, mascara, letrasTentadas, vidasRestantes, status, pontos e palavra (nula enquanto a partida está em andamento).

`ItemRanking`: posicao, jogador, dificuldade, pontos, palavra e finalizadaEm.

## Rotas
- `POST /api/partidas`: cria partida.
- `GET /api/partidas/:id`: consulta partida.
- `POST /api/partidas/:id/palpites`: registra uma letra.
- `GET /api/ranking`: lista as dez melhores vitórias.
- `GET /api/saude`: verifica se a API está ativa.

## Etapas de desenvolvimento
1. Preparar banco, modelos e palavras iniciais.
2. Implementar regras de negócio e API.
3. Criar interface e componentes React.
4. Integrar interface e API.
5. Testar regras, fluxos e persistência.
6. Revisar documentação e apresentar o projeto.

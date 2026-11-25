# Documentação da API

Base local: `http://localhost:3333`. Respostas de erro usam `{ "erro": "mensagem" }`.

## POST /api/partidas
Cria uma partida. Corpo: `{ "jogador": "ana", "dificuldade": "facil" }`. A dificuldade é opcional e aceita `facil`, `medio` ou `dificil`; se omitida, usa `facil`. Sucesso: HTTP 201 com o estado da partida. Erro: HTTP 400 para apelido inválido.

## GET /api/partidas/:id
Consulta o estado atual. Sucesso: HTTP 200 com `EstadoPartida`. Erros: HTTP 400 para identificador inválido e HTTP 404 quando não existe.

## POST /api/partidas/:id/palpites
Corpo: `{ "letra": "a" }`. O servidor normaliza para maiúscula. Sucesso: HTTP 200 com estado atualizado. Erros: HTTP 400 para entrada inválida; HTTP 404 para partida inexistente; HTTP 409 para letra repetida ou partida encerrada.

## GET /api/ranking
Retorna até dez partidas vencidas, ordenadas por pontos decrescentes e, em caso de empate, data de finalização crescente. Cada item contém posição, jogador, dificuldade, pontos, palavra e data de finalização. Sucesso: HTTP 200.

## GET /api/saude
Retorna `{ "status": "ok", "aplicacao": "Jogo Da Forca" }` quando a API está ativa.

## Estado da partida
A resposta contém `id`, `jogador`, `categoria`, `dica`, `dificuldade`, `mascara`, `letrasTentadas`, `vidasRestantes`, `status`, `pontos` e `palavra`. O campo `palavra` é `null` durante o jogo e é revelado somente após vitória ou derrota.

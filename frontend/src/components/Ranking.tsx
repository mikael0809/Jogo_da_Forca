import type { ItemRanking } from "../types";

type Props = { itens: ItemRanking[] };

/** Exibe as dez melhores partidas concluídas com vitória. */
export function Ranking({ itens }: Props) {
  if (itens.length === 0) return <p className="vazio">Ainda não existem vitórias registradas.</p>;
  return <div className="lista-ranking">
    <div className="cabecalho-ranking"><span>#</span><span>Jogador</span><span>Palavra</span><span>Pontos</span></div>
    {itens.map((item) => <div className="item-ranking" key={`${item.posicao}-${item.jogador}-${item.finalizadaEm}`}>
      <span>{item.posicao}º</span><b>{item.jogador}</b><span>{item.palavra}</span><strong>{item.pontos}</strong>
    </div>)}
  </div>;
}

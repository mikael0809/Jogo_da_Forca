import type {EstadoPartida} from "../types";
export function ResumoPartida({partida}:{partida:EstadoPartida}){
 return <div className="resumo">
  <div><span>Jogador:</span><b>{partida.jogador}</b></div>
  <div><span>Categoria:</span><b>{partida.categoria}</b></div>
  <div><span>Nível:</span><b>{partida.dificuldade}</b></div>
 </div>;
}

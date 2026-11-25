import type {Dificuldade,EstadoPartida} from "./types";
async function requisicao<T>(url:string,opcoes?:RequestInit):Promise<T>{
 const r=await fetch(url,{...opcoes,headers:{"Content-Type":"application/json",...opcoes?.headers}});
 const dados=await r.json();if(!r.ok)throw new Error(dados.erro??"Falha na requisição.");return dados as T;
}
export function criarPartida(jogador:string,dificuldade:Dificuldade){return requisicao<EstadoPartida>("/api/partidas",{method:"POST",body:JSON.stringify({jogador,dificuldade})});}
export function enviarLetra(id:number,letra:string){return requisicao<EstadoPartida>(`/api/partidas/${id}/palpites`,{method:"POST",body:JSON.stringify({letra})});}

export function buscarRanking(){return requisicao<import("./types").ItemRanking[]>("/api/ranking");}

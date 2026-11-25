import {useCallback,useEffect,useState} from "react";
import {buscarRanking,criarPartida,enviarLetra} from "./api";
import {Forca} from "./components/Forca";
import {ResumoPartida} from "./components/ResumoPartida";
import {Teclado} from "./components/Teclado";
import {Ranking} from "./components/Ranking";
import type {Dificuldade,EstadoPartida,ItemRanking} from "./types";
import "./estilos.css";

export default function App(){
 const [jogador,setJogador]=useState("");
 const [dificuldade,setDificuldade]=useState<Dificuldade>("facil");
 const [partida,setPartida]=useState<EstadoPartida|null>(null);
 const [tela,setTela]=useState<"inicio"|"jogo"|"ranking">("inicio");
 const [telaAnterior,setTelaAnterior]=useState<"inicio"|"jogo">("inicio");
 const [ranking,setRanking]=useState<ItemRanking[]>([]);
 const [carregando,setCarregando]=useState(false);
 const [erro,setErro]=useState("");
 async function abrirRanking(){
  setErro("");setTelaAnterior(tela==="ranking"?telaAnterior:tela);setCarregando(true);
  try{setRanking(await buscarRanking());setTela("ranking");}
  catch(e){setErro(e instanceof Error?e.message:"Não foi possível carregar o ranking.");}
  finally{setCarregando(false);}
 }
 async function iniciar(){
  setErro("");
  if(jogador.trim().length<3||jogador.trim().length>20){setErro("Use um nome de 3 a 20 caracteres.");return;}
  setCarregando(true);
  try{setPartida(await criarPartida(jogador.trim(),dificuldade));setTela("jogo");}
  catch(e){setErro(e instanceof Error?e.message:"Erro ao iniciar a partida.");}
  finally{setCarregando(false);}
 }
 const palpitar=useCallback(async(letra:string)=>{
  if(!partida||partida.status!=="em_andamento"||carregando)return;
  setErro("");setCarregando(true);
  try{setPartida(await enviarLetra(partida.id,letra));}
  catch(e){setErro(e instanceof Error?e.message:"Erro ao enviar letra.");}
  finally{setCarregando(false);}
 },[partida,carregando]);
 useEffect(()=>{
  const tecla=(e:KeyboardEvent)=>{if(/^[a-z]$/i.test(e.key)&&tela==="jogo"&&partida?.status==="em_andamento")void palpitar(e.key.toUpperCase());};
  window.addEventListener("keydown",tecla);return()=>window.removeEventListener("keydown",tecla);
 },[partida,palpitar,tela]);
 function voltarInicio(){setTela("inicio");setPartida(null);setErro("");}
 function voltarRanking(){setTela(telaAnterior);setErro("");}
 const terminou=!!partida&&partida.status!=="em_andamento";
 return <main className="pagina">
  <header><div><h1>Jogo Da Forca</h1><span>Trabalho de programação</span></div><button onClick={()=>void abrirRanking()} disabled={carregando}>Ranking</button></header>
  {erro&&<p className="erro">{erro} <button onClick={()=>setErro("")}>x</button></p>}
  {tela==="ranking"?
   <section className="ranking">
    <div className="linha-titulo"><h2>Ranking</h2><button onClick={voltarRanking}>Voltar</button></div>
    <p className="texto-ranking">As 10 melhores partidas vencidas aparecem aqui.</p>
    <Ranking itens={ranking}/>
   </section>
  :tela==="inicio"?
   <section className="inicio"><h2>Novo jogo</h2>
    <label htmlFor="jogador">Apelido</label><input id="jogador" value={jogador} maxLength={20} onChange={e=>setJogador(e.target.value)} placeholder="Seu nome"/>
    <label htmlFor="nivel">Dificuldade</label><select id="nivel" value={dificuldade} onChange={e=>setDificuldade(e.target.value as Dificuldade)}>
     <option value="facil">Fácil</option><option value="medio">Médio</option><option value="dificil">Difícil</option></select>
    <button className="botao" disabled={carregando||jogador.trim().length<3||jogador.trim().length>20} onClick={()=>void iniciar()}>{carregando?"Aguarde...":"Jogar"}</button>
   </section>
  :<section className="jogo"><div className="linha-titulo"><h2>Partida</h2><button onClick={voltarInicio}>Voltar</button></div>
   {partida&&<><ResumoPartida partida={partida}/><p className="dica"><b>Dica:</b> {partida.dica}</p>
    <div className="jogo-centro"><Forca erros={6-partida.vidasRestantes}/><div><div className="mascara">{partida.mascara}</div><p>Vidas: {partida.vidasRestantes}</p><p>Letras: {partida.letrasTentadas.join(", ")||"nenhuma"}</p></div></div>
    {!terminou?<Teclado letrasTentadas={partida.letrasTentadas} desabilitado={carregando} aoEscolher={l=>void palpitar(l)}/>:
     <div className="resultado"><h2>{partida.status==="vitoria"?"Você venceu!":"Você perdeu."}</h2><p>Palavra: <b>{partida.palavra}</b></p><p>Pontos: {partida.pontos}</p><button className="botao" onClick={voltarInicio}>Jogar de novo</button></div>}
   </>}
  </section>}
  <footer>Jogo Da Forca</footer>
 </main>;
}

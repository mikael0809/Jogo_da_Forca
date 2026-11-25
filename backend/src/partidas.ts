import { prisma } from "./banco";
import { calcularPontos, gerarMascara, normalizar, validarLetra, verificarVitoria, Dificuldade } from "./game/regras";

type RegistroPartida = {
 id:number; jogador:string; dificuldade:string; letrasTentadas:string; vidasRestantes:number;
 status:string; pontos:number; palavra:{texto:string;categoria:string;dica:string}
};
function estado(p: RegistroPartida) {
 const letras:string[] = JSON.parse(p.letrasTentadas);
 const encerrada = p.status !== "em_andamento";
 return {id:p.id,jogador:p.jogador,categoria:p.palavra.categoria,dica:p.palavra.dica,dificuldade:p.dificuldade,
  mascara:gerarMascara(p.palavra.texto,letras),letrasTentadas:letras,vidasRestantes:p.vidasRestantes,
  status:p.status,pontos:p.pontos,palavra:encerrada?p.palavra.texto:null};
}
export async function iniciarPartida(jogador:string,dificuldade:Dificuldade) {
 const total=await prisma.palavra.count({where:{dificuldade}});
 if(!total) throw Object.assign(new Error("Não há palavras cadastradas neste nível."),{statusCode:500});
 const indice=Math.floor(Math.random()*total);
 const [palavra]=await prisma.palavra.findMany({where:{dificuldade},skip:indice,take:1});
 const nova=await prisma.partida.create({data:{jogador:jogador.trim(),palavraId:palavra.id,dificuldade}});
 const p=await prisma.partida.findUniqueOrThrow({where:{id:nova.id},include:{palavra:true}});
 return estado(p as RegistroPartida);
}
export async function obterPartida(id:number) {
 const p=await prisma.partida.findUnique({where:{id},include:{palavra:true}});
 if(!p) throw Object.assign(new Error("Partida não encontrada."),{statusCode:404});
 return estado(p as RegistroPartida);
}
export async function enviarPalpite(id:number,entrada:string) {
 if(!validarLetra(entrada)) throw Object.assign(new Error("Informe uma letra de A a Z."),{statusCode:400});
 const p=await prisma.partida.findUnique({where:{id},include:{palavra:true}});
 if(!p) throw Object.assign(new Error("Partida não encontrada."),{statusCode:404});
 if(p.status!=="em_andamento") throw Object.assign(new Error("A partida já foi encerrada."),{statusCode:409});
 const letra=normalizar(entrada), letras:string[]=JSON.parse(p.letrasTentadas);
 if(letras.includes(letra)) throw Object.assign(new Error("Essa letra já foi utilizada."),{statusCode:409});
 letras.push(letra);
 const vidas=p.vidasRestantes-(normalizar(p.palavra.texto).includes(letra)?0:1);
 let status:"em_andamento"|"vitoria"|"derrota"="em_andamento";
 if(verificarVitoria(p.palavra.texto,letras)) status="vitoria"; else if(vidas===0) status="derrota";
 const pontos=calcularPontos(p.palavra.texto,vidas,status);
 const atualizado=await prisma.partida.update({where:{id},data:{letrasTentadas:JSON.stringify(letras),vidasRestantes:vidas,status,pontos,finalizadaEm:status==="em_andamento"?null:new Date()},include:{palavra:true}});
 return estado(atualizado as RegistroPartida);
}


export async function obterRanking() {
 const vencedores = await prisma.partida.findMany({
  where: { status: "vitoria" },
  orderBy: [{ pontos: "desc" }, { finalizadaEm: "asc" }],
  take: 10,
  include: { palavra: true }
 });
 return vencedores.map((p, indice) => ({
  posicao: indice + 1, jogador: p.jogador, dificuldade: p.dificuldade,
  pontos: p.pontos, palavra: p.palavra.texto, finalizadaEm: p.finalizadaEm
 }));
}

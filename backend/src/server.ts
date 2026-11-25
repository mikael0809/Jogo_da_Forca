import Fastify from "fastify";
import cors from "@fastify/cors";
import { z } from "zod";
import { iniciarPartida, obterPartida, enviarPalpite, obterRanking } from "./partidas";
import { prisma } from "./banco";

const app=Fastify({logger:true});
app.register(cors,{origin:true});
const inicio=z.object({jogador:z.string().trim().min(3).max(20),dificuldade:z.enum(["facil","medio","dificil"]).optional().default("facil")});
const palpite=z.object({letra:z.string().length(1)});
app.setErrorHandler((erro,_req,reply)=>{
 const status=(erro as Error & {statusCode?:number}).statusCode??500;
 reply.code(status).send({erro:erro.message||"Erro interno do servidor."});
});
app.get("/api/saude",async()=>({status:"ok",aplicacao:"Jogo Da Forca"}));
app.get("/api/ranking",async()=>obterRanking());
app.post("/api/partidas",async(req,reply)=>{
 const dados=inicio.safeParse(req.body);
 if(!dados.success)return reply.code(400).send({erro:"Informe um nome de 3 a 20 caracteres."});
 return reply.code(201).send(await iniciarPartida(dados.data.jogador,dados.data.dificuldade));
});
app.get<{Params:{id:string}}>("/api/partidas/:id",async(req)=>{
 const id=Number(req.params.id);
 if(!Number.isInteger(id)||id<1)throw Object.assign(new Error("Identificador inválido."),{statusCode:400});
 return obterPartida(id);
});
app.post<{Params:{id:string}}>("/api/partidas/:id/palpites",async(req,reply)=>{
 const id=Number(req.params.id);
 if(!Number.isInteger(id)||id<1)return reply.code(400).send({erro:"Identificador inválido."});
 const dados=palpite.safeParse(req.body);
 if(!dados.success)return reply.code(400).send({erro:"Envie somente uma letra."});
 return enviarPalpite(id,dados.data.letra);
});
const porta=Number(process.env.PORT??3333);
app.listen({port:porta,host:"0.0.0.0"}).then(()=>console.log(`Servidor ativo na porta ${porta}.`))
 .catch(async e=>{app.log.error(e);await prisma.$disconnect();process.exit(1)});

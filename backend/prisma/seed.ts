import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const palavras = [
  {
    "texto": "ALGORITMO",
    "categoria": "Lógica",
    "dica": "Uma sequência de passos para resolver um problema.",
    "dificuldade": "facil"
  },
  {
    "texto": "CODIGO",
    "categoria": "Programação",
    "dica": "Conjunto de instruções escritas pelo programador.",
    "dificuldade": "facil"
  },
  {
    "texto": "SITE",
    "categoria": "Internet",
    "dica": "Página que pode ser acessada pelo navegador.",
    "dificuldade": "facil"
  },
  {
    "texto": "SENHA",
    "categoria": "Segurança",
    "dica": "Informação usada para proteger uma conta.",
    "dificuldade": "facil"
  },
  {
    "texto": "MOUSE",
    "categoria": "Hardware",
    "dica": "Acessório usado para movimentar o cursor.",
    "dificuldade": "facil"
  },
  {
    "texto": "TELA",
    "categoria": "Hardware",
    "dica": "Parte do computador onde aparecem as imagens.",
    "dificuldade": "facil"
  },
  {
    "texto": "TECLADO",
    "categoria": "Hardware",
    "dica": "Acessório usado para digitar.",
    "dificuldade": "facil"
  },
  {
    "texto": "ARQUIVO",
    "categoria": "Sistema",
    "dica": "Documento salvo no computador.",
    "dificuldade": "facil"
  },
  {
    "texto": "PASTA",
    "categoria": "Sistema",
    "dica": "Local usado para organizar arquivos.",
    "dificuldade": "facil"
  },
  {
    "texto": "REDE",
    "categoria": "Internet",
    "dica": "Conjunto de dispositivos conectados.",
    "dificuldade": "facil"
  },
  {
    "texto": "DADOS",
    "categoria": "Informação",
    "dica": "Informações que podem ser armazenadas e processadas.",
    "dificuldade": "facil"
  },
  {
    "texto": "LOGIN",
    "categoria": "Segurança",
    "dica": "Processo de entrar em uma conta.",
    "dificuldade": "facil"
  },
  {
    "texto": "NAVEGADOR",
    "categoria": "Internet",
    "dica": "Programa usado para acessar páginas da web.",
    "dificuldade": "facil"
  },
  {
    "texto": "BANCO",
    "categoria": "Dados",
    "dica": "Local onde informações são organizadas e guardadas.",
    "dificuldade": "facil"
  },
  {
    "texto": "LINUX",
    "categoria": "Sistema",
    "dica": "Sistema operacional de código aberto.",
    "dificuldade": "facil"
  },
  {
    "texto": "WINDOWS",
    "categoria": "Sistema",
    "dica": "Sistema operacional muito usado em computadores.",
    "dificuldade": "facil"
  },
  {
    "texto": "ROBO",
    "categoria": "Tecnologia",
    "dica": "Máquina que pode executar tarefas automaticamente.",
    "dificuldade": "facil"
  },
  {
    "texto": "PIXEL",
    "categoria": "Imagem",
    "dica": "Menor unidade de uma imagem digital.",
    "dificuldade": "facil"
  },
  {
    "texto": "EMAIL",
    "categoria": "Internet",
    "dica": "Mensagem enviada pela internet.",
    "dificuldade": "facil"
  },
  {
    "texto": "VIDEO",
    "categoria": "Multimídia",
    "dica": "Conteúdo digital formado por imagens em movimento.",
    "dificuldade": "facil"
  },
  {
    "texto": "JAVASCRIPT",
    "categoria": "Programação",
    "dica": "Linguagem bastante usada no desenvolvimento web.",
    "dificuldade": "medio"
  },
  {
    "texto": "PYTHON",
    "categoria": "Programação",
    "dica": "Linguagem conhecida por sua sintaxe simples.",
    "dificuldade": "medio"
  },
  {
    "texto": "INTERFACE",
    "categoria": "Desenvolvimento",
    "dica": "Parte do sistema com a qual o usuário interage.",
    "dificuldade": "medio"
  },
  {
    "texto": "VARIAVEL",
    "categoria": "Programação",
    "dica": "Espaço usado para guardar um valor.",
    "dificuldade": "medio"
  },
  {
    "texto": "FUNCAO",
    "categoria": "Programação",
    "dica": "Bloco de código criado para executar uma tarefa.",
    "dificuldade": "medio"
  },
  {
    "texto": "SERVIDOR",
    "categoria": "Redes",
    "dica": "Computador ou programa que fornece serviços.",
    "dificuldade": "medio"
  },
  {
    "texto": "CLIENTE",
    "categoria": "Redes",
    "dica": "Aplicação que solicita dados ou serviços.",
    "dificuldade": "medio"
  },
  {
    "texto": "FIREWALL",
    "categoria": "Segurança",
    "dica": "Recurso que controla o tráfego de rede.",
    "dificuldade": "medio"
  },
  {
    "texto": "ROTEADOR",
    "categoria": "Redes",
    "dica": "Equipamento que encaminha dados entre redes.",
    "dificuldade": "medio"
  },
  {
    "texto": "MEMORIA",
    "categoria": "Hardware",
    "dica": "Componente usado para guardar dados em uso.",
    "dificuldade": "medio"
  },
  {
    "texto": "PROCESSADOR",
    "categoria": "Hardware",
    "dica": "Componente que executa instruções.",
    "dificuldade": "medio"
  },
  {
    "texto": "PLANILHA",
    "categoria": "Software",
    "dica": "Documento organizado em linhas e colunas.",
    "dificuldade": "medio"
  },
  {
    "texto": "COMPILADOR",
    "categoria": "Programação",
    "dica": "Ferramenta que traduz código-fonte.",
    "dificuldade": "medio"
  },
  {
    "texto": "GITHUB",
    "categoria": "Desenvolvimento",
    "dica": "Plataforma usada para hospedar repositórios Git.",
    "dificuldade": "medio"
  },
  {
    "texto": "FRAMEWORK",
    "categoria": "Desenvolvimento",
    "dica": "Estrutura que ajuda a desenvolver aplicações.",
    "dificuldade": "medio"
  },
  {
    "texto": "COMPONENTE",
    "categoria": "Desenvolvimento",
    "dica": "Parte reutilizável de uma interface.",
    "dificuldade": "medio"
  },
  {
    "texto": "PROTOCOLO",
    "categoria": "Redes",
    "dica": "Conjunto de regras para comunicação.",
    "dificuldade": "medio"
  },
  {
    "texto": "CRIPTOGRAFIA",
    "categoria": "Segurança",
    "dica": "Técnica usada para proteger informações.",
    "dificuldade": "medio"
  },
  {
    "texto": "SISTEMA",
    "categoria": "Computação",
    "dica": "Conjunto de partes que trabalham em conjunto.",
    "dificuldade": "medio"
  },
  {
    "texto": "APLICATIVO",
    "categoria": "Software",
    "dica": "Programa criado para realizar tarefas.",
    "dificuldade": "medio"
  },
  {
    "texto": "RECURSIVIDADE",
    "categoria": "Programação",
    "dica": "Técnica em que uma função chama a si mesma.",
    "dificuldade": "dificil"
  },
  {
    "texto": "POLIMORFISMO",
    "categoria": "Programação",
    "dica": "Conceito de orientação a objetos com diferentes comportamentos.",
    "dificuldade": "dificil"
  },
  {
    "texto": "HERANCA",
    "categoria": "Programação",
    "dica": "Mecanismo para reaproveitar características de uma classe.",
    "dificuldade": "dificil"
  },
  {
    "texto": "ENCAPSULAMENTO",
    "categoria": "Programação",
    "dica": "Princípio que protege os dados internos de um objeto.",
    "dificuldade": "dificil"
  },
  {
    "texto": "ASSINCRONISMO",
    "categoria": "Programação",
    "dica": "Execução que não precisa esperar uma tarefa terminar.",
    "dificuldade": "dificil"
  },
  {
    "texto": "DEPENDENCIA",
    "categoria": "Desenvolvimento",
    "dica": "Biblioteca ou pacote necessário para um projeto.",
    "dificuldade": "dificil"
  },
  {
    "texto": "DEPLOY",
    "categoria": "Desenvolvimento",
    "dica": "Processo de publicar uma aplicação.",
    "dificuldade": "dificil"
  },
  {
    "texto": "MIDDLEWARE",
    "categoria": "Desenvolvimento",
    "dica": "Camada que atua entre a requisição e a resposta.",
    "dificuldade": "dificil"
  },
  {
    "texto": "AUTENTICACAO",
    "categoria": "Segurança",
    "dica": "Processo de confirmar a identidade de alguém.",
    "dificuldade": "dificil"
  },
  {
    "texto": "AUTORIZACAO",
    "categoria": "Segurança",
    "dica": "Verificação do que um usuário pode acessar.",
    "dificuldade": "dificil"
  },
  {
    "texto": "VULNERABILIDADE",
    "categoria": "Segurança",
    "dica": "Falha que pode ser explorada em um sistema.",
    "dificuldade": "dificil"
  },
  {
    "texto": "RANSOMWARE",
    "categoria": "Segurança",
    "dica": "Malware que bloqueia dados e exige resgate.",
    "dificuldade": "dificil"
  },
  {
    "texto": "PHISHING",
    "categoria": "Segurança",
    "dica": "Golpe que tenta roubar informações por mensagens falsas.",
    "dificuldade": "dificil"
  },
  {
    "texto": "VIRTUALIZACAO",
    "categoria": "Infraestrutura",
    "dica": "Técnica que cria ambientes virtuais.",
    "dificuldade": "dificil"
  },
  {
    "texto": "CONTAINER",
    "categoria": "Infraestrutura",
    "dica": "Ambiente isolado para executar uma aplicação.",
    "dificuldade": "dificil"
  },
  {
    "texto": "ARQUITETURA",
    "categoria": "Desenvolvimento",
    "dica": "Organização estrutural de um sistema.",
    "dificuldade": "dificil"
  },
  {
    "texto": "NORMALIZACAO",
    "categoria": "Banco de dados",
    "dica": "Organização de tabelas para reduzir repetição.",
    "dificuldade": "dificil"
  },
  {
    "texto": "INDEXACAO",
    "categoria": "Banco de dados",
    "dica": "Técnica para acelerar consultas em dados.",
    "dificuldade": "dificil"
  },
  {
    "texto": "SERIALIZACAO",
    "categoria": "Programação",
    "dica": "Transformação de dados para um formato de armazenamento ou envio.",
    "dificuldade": "dificil"
  },
  {
    "texto": "OBSERVABILIDADE",
    "categoria": "Infraestrutura",
    "dica": "Prática de entender o estado interno de um sistema.",
    "dificuldade": "dificil"
  }
];

async function principal() {
  for (const palavra of palavras) {
    await prisma.palavra.upsert({
      where: { texto: palavra.texto },
      update: { categoria: palavra.categoria, dica: palavra.dica, dificuldade: palavra.dificuldade },
      create: palavra
    });
  }
  console.log(`${palavras.length} palavras cadastradas.`);
}

principal()
  .catch(erro => { console.error(erro); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });

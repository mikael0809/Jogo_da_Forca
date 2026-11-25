export type Dificuldade="facil"|"medio"|"dificil";
export type EstadoPartida={id:number;jogador:string;categoria:string;dica:string;dificuldade:Dificuldade;mascara:string;letrasTentadas:string[];vidasRestantes:number;status:"em_andamento"|"vitoria"|"derrota";pontos:number;palavra:string|null};

export type ItemRanking={posicao:number;jogador:string;dificuldade:Dificuldade;pontos:number;palavra:string;finalizadaEm:string|null};

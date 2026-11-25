type Props={letrasTentadas:string[];desabilitado:boolean;aoEscolher:(letra:string)=>void};
export function Teclado({letrasTentadas,desabilitado,aoEscolher}:Props){
 return <div className="teclado">{"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letra=><button type="button" key={letra} className={`tecla ${letrasTentadas.includes(letra) ? "tecla-usada" : ""}`} disabled={desabilitado||letrasTentadas.includes(letra)} onClick={()=>aoEscolher(letra)}>{letra}</button>)}</div>;
}

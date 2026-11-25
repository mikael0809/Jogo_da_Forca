import {describe,it,expect} from "vitest";
import {gerarMascara,validarLetra,verificarVitoria,calcularPontos,normalizar} from "../src/game/regras";
describe("Regras da forca",()=>{
 it("esconde letras não descobertas",()=>expect(gerarMascara("MOUSE",["M","S"])).toBe("M _ _ S _"));
 it("mantém espaço entre palavras",()=>expect(gerarMascara("PLACA MAE",[])).toBe("_ _ _ _ _   _ _ _"));
 it("aceita apenas uma letra",()=>{expect(validarLetra("A")).toBe(true);expect(validarLetra("AB")).toBe(false);expect(validarLetra("2")).toBe(false)});
 it("reconhece vitória",()=>expect(verificarVitoria("MOUSE",["M","O","U","S","E"])).toBe(true));
 it("não reconhece vitória incompleta",()=>expect(verificarVitoria("MOUSE",["M","O"])).toBe(false));
 it("calcula pontos na vitória",()=>expect(calcularPontos("MOUSE",4,"vitoria")).toBe(65));
 it("derrota vale zero",()=>expect(calcularPontos("MOUSE",0,"derrota")).toBe(0));
 it("normaliza letras para maiúsculas",()=>expect(normalizar("a")).toBe("A"));
 it("não aceita caracteres acentuados como palpite",()=>expect(validarLetra("ç")).toBe(false));
});

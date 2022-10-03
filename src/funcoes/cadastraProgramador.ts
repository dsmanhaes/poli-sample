import PromptSync = require("prompt-sync");
import { Programador } from "../classes/Programador";

function cadastraProgramador (prompt: PromptSync.Prompt): Programador {
  const nome = prompt('Entre com o nome do programador: ');
  let salario: number;
  do {
    salario = Number(prompt('Entre com o salário do programador: '));
  } while (isNaN(salario));

  return new Programador(nome, salario, []);
}

export { cadastraProgramador };

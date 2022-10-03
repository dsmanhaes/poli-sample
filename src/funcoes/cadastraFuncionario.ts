import PromptSync = require("prompt-sync");
import { Funcionario } from "../classes/Funcionario";

function cadastraFuncionario (prompt: PromptSync.Prompt): Funcionario {
  const nome = prompt('Entre com o nome do funcionário: ');
  let salario: number;
  do {
    salario = Number(prompt('Entre com o salário do funcionário: '));
  } while (isNaN(salario));

  return new Funcionario(nome, salario);
}

export { cadastraFuncionario };

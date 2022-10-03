import PromptSync = require('prompt-sync');
import { Funcionario } from "./classes/Funcionario";
import { cadastraFuncionario } from './funcoes/cadastraFuncionario';
import { cadastraProgramador } from './funcoes/cadastraProgramador';
import { IServidor } from './interfaces/IServidor';

const funcionarios: Funcionario[] = [];
const operadoresServidor: IServidor[] = [];

const prompt = PromptSync();

const programador1 = cadastraProgramador(prompt);
const funcionario1 = cadastraFuncionario(prompt);
const programador2 = cadastraProgramador(prompt);

funcionarios.push(programador1);
funcionarios.push(funcionario1);
funcionarios.push(programador2);

operadoresServidor.push(programador1, programador2);

console.table(funcionarios);
console.table(operadoresServidor);

import { IServidor } from "../interfaces/IServidor";
import { Funcionario } from "./Funcionario";

class Programador extends Funcionario implements IServidor {
  private _linguagens: string[];

  constructor (nome: string, salario: number, linguagens: string[]) {
    super(nome, salario);
    this._linguagens = linguagens;
  }

  public ligarServidor(): void {
    console.log('O servidor está ligado...');
  }

  public conheceLinguagem (linguagem: string): boolean {
    this._linguagens.forEach(item => {
      if (item == linguagem) {
        return true;
      }
    });
    return false;
  }
}

export { Programador };

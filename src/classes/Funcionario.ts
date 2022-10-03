class Funcionario {
  private _nome: string;
  private _salario: number;

  public get nome (): string {
    return this._nome;
  }

  public get salario (): number {
    return this._salario;
  }

  public set nome (nome: string) {
    this._nome = nome;
  }

  constructor (nome: string, salario: number) {
    this._nome = nome;
    this._salario = salario;
  }

  public darAumento (valorAumento: number): void {
    this._salario += valorAumento;
  }
}

export { Funcionario };

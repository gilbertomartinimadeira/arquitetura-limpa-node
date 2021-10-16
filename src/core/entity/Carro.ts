export default class Carro {

	codigo: number;
	placa: string;
	dataEntrada: Date;

	constructor(codigo:number, placa:string, dataEntrada: Date){
		this.codigo = codigo;
		this.placa = placa;
		this.dataEntrada = dataEntrada;
	}
}

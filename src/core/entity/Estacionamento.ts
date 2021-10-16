export default class Estacionamento {
	codigo: string;
	vagas: number;
	horaAbertura: number;
	horaFechamento: number;
	vagasOcupadas: number;

	constructor(codigo: string, vagas: number, horaAbertura : number, horaFechamento: number){
		this.codigo = codigo;
		this.vagas = vagas;
		this.horaAbertura = horaAbertura;
		this.horaFechamento = horaFechamento;
	}
}

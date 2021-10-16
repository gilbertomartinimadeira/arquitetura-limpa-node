import Estacionamento from './../entity/Estacionamento';
import IEstacionamentoRepository from './../repository/IEstacionamentoRepository';


export default class EntrarNoEstacionamento {

	estacionamentoRepository : IEstacionamentoRepository;

	constructor(estacionamentoRepository: IEstacionamentoRepository)
		this.estacionamentoRepository = estacionamentoRepository;	
	}


	execute(codigo: number,placa:string, dataEntrada: Date): Promise<Estacionamento> {
		const estacionamento = this.estacionamentoRepository.obterEstacionamento("shopping");

		estacionamento.adicionar({codigo,placa,dataEntrada});
		return Promise.resolve(estacionamento);
	
	}
}

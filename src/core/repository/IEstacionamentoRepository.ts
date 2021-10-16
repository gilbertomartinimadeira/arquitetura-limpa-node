import  Estacionamento  from "./../entity/Estacionamento";

export default interface IEstacionamentoRepository {

	obterEstacionamento(codigo: string) : Estacionamento;
}

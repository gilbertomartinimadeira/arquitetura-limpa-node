import EntrarNoEstacionamento from "./../src/core/usecase/EntrarNoEstacionamento";
import Carro from "./../src/core/entity/Carro";
import Estacionamento from "./../src/core/entity/Estacionamento";


test("Deve entrar no Estacionamento", function(){
	
	const carro = new Carro(1,"LOK-9954", new Date());
	const entrarNoEstacionameto = new EntrarNoEstacionamento();
	const estacionamento = entrarNoEstacionamento.executar(carro.codigo, carro.placa, carro.dataEntrada);	
	expect(estacionamento.espacosOcupados).toBe(1);

	

});

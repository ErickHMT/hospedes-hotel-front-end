import { Hospede } from './../hospede/hospede';

export class CheckIn {
  id: number;
  hospede: Hospede;
  dataEntrada: string;
  dataSaida: string;
  adicionalVeiculo: boolean;
}

export default interface User {
  _id?: string;
  nome: string;
  idade: number;
  dataNascimento: string;
  endereco: string;
  bairro: string;
  complemento?: string;
  cidade: string;
  estado: string;
  email: string;
  senha: string;
  __v?: string;
}

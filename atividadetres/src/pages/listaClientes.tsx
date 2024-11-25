import React, { Component } from 'react';
import '../styles/detail.css';

interface Pet {
  nome: string;
}

interface Cliente {
  nome: string;
  nomeSocial: string;
  email: string;
  telefone: string;
  cpf: string;
  rg: string;
  pets: Pet[];
}

export default class ListaClientes extends Component {
  state = {
    clientes: [] as Cliente[], // Inicializa o array de clientes
    error: null, // Estado para capturar erros
  };

  componentDidMount() {
    try {
      const storedClients = localStorage.getItem('clientes');
      if (storedClients) {
        const clientes = JSON.parse(storedClients);

        // Valida a estrutura dos clientes para evitar problemas
        if (Array.isArray(clientes)) {
          const validClientes = clientes.map((cliente) => ({
            ...cliente,
            pets: Array.isArray(cliente.pets) ? cliente.pets : [], // Garante que pets seja um array
          }));
          this.setState({ clientes: validClientes });
        } else {
          console.error('Dados no localStorage estão corrompidos.');
          this.setState({ error: 'Erro ao carregar os dados de clientes.' });
        }
      }
    } catch (e) {
      console.error('Erro ao acessar ou parsear localStorage:', e);
      this.setState({ error: 'Erro ao acessar os dados de clientes.' });
    }
  }

  render() {
    const { clientes, error } = this.state;

    // Exibe uma mensagem de erro se algo deu errado
    if (error) {
      return <div className="container text-danger">Erro: {error}</div>;
    }

    return (
      <div className="container">
        <h1 className="pb-4" style={{ color: '#D32F2F' }}>
          <div className="rectangle" style={{ backgroundColor: '#D32F2F' }}></div>
          Cadastro de Clientes
        </h1>
        <table className="table table-hover">
          <thead style={{ backgroundColor: '#D32F2F', color: 'white' }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Nome Social</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">CPF</th>
              <th scope="col">RG</th>
              <th scope="col">Nome do Pet</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center">
                  Nenhum cliente cadastrado.
                </td>
              </tr>
            ) : (
              clientes.map((cliente, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.nomeSocial}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.rg}</td>
                  <td>
                    {cliente.pets.length > 0 ? (
                      cliente.pets.map((pet, petIndex) => (
                        <div key={petIndex}>{pet.nome}</div>
                      ))
                    ) : (
                      'Sem pet cadastrado'
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

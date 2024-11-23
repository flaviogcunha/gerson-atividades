import React, { Component } from "react";
import "../styles/detail.css";

// Definindo o tipo Produto
type Produto = {
    nome: string;
    tipo: string;  // Produto ou Serviço
    preco: string;
};

export default class CadastroProdutos extends Component {
    state = {
        nome: '',
        tipo: '',
        preco: '',
        produtos: [] as Produto[],
    };

    
    componentDidMount() {
        const storedProdutos = JSON.parse(localStorage.getItem('produtos') || '[]');
        this.setState({ produtos: storedProdutos });
    }

  
    handleSubmit = () => {
        const { nome, tipo, preco, produtos } = this.state;
        const newProduto = { nome, tipo, preco };

       
        const updatedProdutos = [...produtos, newProduto];
        this.setState({ produtos: updatedProdutos });

        
        localStorage.setItem('produtos', JSON.stringify(updatedProdutos));

        
        this.setState({ nome: '', tipo: '', preco: '' });

        alert("Produto cadastrado!");
    }

    render() {
        const { nome, tipo, preco, produtos } = this.state;

        return (
            <div className="container">
                <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Cadastro de Produtos e Serviços
                </h1>

                {/* Formulário para cadastrar produtos */}
                <form onSubmit={(e) => { e.preventDefault(); this.handleSubmit(); }}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => this.setState({ nome: e.target.value })}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <select
                            className="form-select"
                            value={tipo}
                            onChange={(e) => this.setState({ tipo: e.target.value })}
                        >
                            <option value="">Selecione o tipo</option>
                            <option value="Produto">Produto</option>
                            <option value="Serviço">Serviço</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Preço"
                            value={preco}
                            onChange={(e) => this.setState({ preco: e.target.value })}
                        />
                    </div>
                    <div className="input-group mb-3 d-flex justify-content-end">
                        <button 
                            className="btn btn-outline-secondary" 
                            type="submit" 
                            style={{ backgroundColor: "#D32F2F", color: "#fff" }}  // Alterado para vermelho
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>

                {/* Tabela para exibir os produtos */}
                <table className="table table-hover">
                    <thead>
                        <tr style={{ backgroundColor: '#4D7A8C', color: "white" }}>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.length > 0 ? (
                            produtos.map((produto, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{produto.nome}</td>
                                    <td>{produto.tipo}</td>
                                    <td>{produto.preco}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center">Nenhum produto cadastrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

import { Component } from "react";
import "../styles/detail.css";

// Definindo o tipo Produto
type Produto = {
    nome: string;
    tipo: string;  // Produto ou Serviço
    preco: string;
};

export default class ListaProdutos extends Component {
    state = {
        produtos: [] as Produto[],
    };

    
    componentDidMount() {
        const storedProdutos = JSON.parse(localStorage.getItem('produtos') || '[]');
        this.setState({ produtos: storedProdutos });
    }

    render() {
        const { produtos } = this.state;

        return (
            <div className="container">
                <h1 className="pb-4" style={{ color: '#D32F2F' }}> {/* Título vermelho */}
                    <div className="rectangle" style={{ backgroundColor: '#D32F2F' }}></div> {/* Retângulo vermelho */}
                    Produtos e Serviços
                </h1>

                {/* Tabela para exibir os produtos */}
                <table className="table table-hover">
                    <thead style={{ backgroundColor: '#D32F2F', color: 'white' }}> {/* Cabeçalho da tabela vermelho */}
                        <tr>
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

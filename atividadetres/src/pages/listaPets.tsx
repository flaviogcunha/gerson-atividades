import { Component } from "react";
import "../styles/detail.css";


type Pet = {
    nome: string;
    raca: string;
    tipo: string;  
    genero: string;  
    dono: string;
};

export default class ListaPets extends Component {
   
    state = {
        pets: [] as Pet[]  
    };

    
    componentDidMount() {
        const storedPets = JSON.parse(localStorage.getItem('pets') || '[]');
        this.setState({ pets: storedPets });
    }

    render() {
        const { pets } = this.state;

        return (
            <div className="container">
                <h1 className="pb-4" style={{ color: '#D32F2F' }}> {/* Título vermelho */}
                    <div className="rectangle" style={{ backgroundColor: '#D32F2F' }}></div> {/* Retângulo vermelho */}
                    Cadastro de Pets
                </h1>
                <table className="table table-hover">
                    <thead style={{ backgroundColor: '#D32F2F', color: 'white' }}> {/* Cabeçalho da tabela vermelho */}
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Raça</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Gênero</th>
                            <th scope="col">Dono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets.length > 0 ? (
                            pets.map((pet, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{pet.nome}</td>
                                    <td>{pet.raca}</td>
                                    <td>{pet.tipo}</td>
                                    <td>{pet.genero}</td>
                                    <td>{pet.dono}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center">Nenhum pet cadastrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

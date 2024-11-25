import React from 'react';
import '../styles/detail.css';

export default function FormularioCadastroPet() {
    const [nome, setNome] = React.useState('');
    const [raca, setRaca] = React.useState('');
    const [genero, setGenero] = React.useState('');
    const [tipo, setTipo] = React.useState('');
    const [dono, setDono] = React.useState('');

    const handleSubmit = () => {
        const newPet = { nome, raca, genero, tipo, dono };

        
        const storedPets = JSON.parse(localStorage.getItem('pets') || '[]');
        storedPets.push(newPet);
        localStorage.setItem('pets', JSON.stringify(storedPets));

        alert("Pet cadastrado!");
        
        setNome('');
        setRaca('');
        setGenero('');
        setTipo('');
        setDono('');
    };

    return (
        <div className="container">
            <h1 className="pb-4" style={{ color: '#D32F2F' }}> {/* Título vermelho */}
                <div className="rectangle" style={{ backgroundColor: '#D32F2F' }}></div> {/* Retângulo vermelho */}
                Cadastro de Pets
            </h1>
            <form>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome do Pet"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Raça"
                        value={raca}
                        onChange={e => setRaca(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <select
                        className="form-select"
                        value={genero}
                        onChange={e => setGenero(e.target.value)}
                    >
                        <option value="">Selecione o gênero</option>
                        <option value="Macho">Macho</option>
                        <option value="Fêmea">Fêmea</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <select
                        className="form-select"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                    >
                        <option value="">Selecione o tipo</option>
                        <option value="Cão">Cão</option>
                        <option value="Gato">Gato</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome do Dono"
                        value={dono}
                        onChange={e => setDono(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3 d-flex justify-content-end">
                    <button
                        className="btn btn-outline-secondary"
                        style={{ backgroundColor: "#D32F2F", color: "#fff" }}
                        type="button"
                        onClick={handleSubmit}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>

            
            <table className="table table-hover">
                <thead style={{ backgroundColor: '#D32F2F', color: '#fff' }}> {/* Cabeçalho da tabela vermelho */}
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Raça</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Dono</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                    <tr>
                        <td>1</td>
                        <td>Rex</td>
                        <td>Pastor Alemão</td>
                        <td>Macho</td>
                        <td>Cão</td>
                        <td>João</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    );
}

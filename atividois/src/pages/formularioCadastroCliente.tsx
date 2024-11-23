import React from 'react';
import '../styles/detail.css';

export default function FormularioCadastroCliente() {
    const [nome, setNome] = React.useState('');
    const [nomeSocial, setNomeSocial] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [rg, setRg] = React.useState('');
    const [nomePet, setNomePet] = React.useState('');
    const [temOutroPet, setTemOutroPet] = React.useState(false);

    const handleSubmit = () => {
        const newClient = {
            nome,
            nomeSocial,
            email,
            telefone,
            cpf,
            rg,
            pets: [{ nome: nomePet }]
        };

        if (temOutroPet) {
            newClient.pets.push({ nome: '' }); // Podemos adicionar mais pets depois se desejar.
        }

        const storedClients = JSON.parse(localStorage.getItem('clientes') || '[]');
        storedClients.push(newClient);
        localStorage.setItem('clientes', JSON.stringify(storedClients));
        alert("Cliente cadastrado!");
    }

    return (
        <div className="container">
            <h1 className="pb-4">
                <div className="rectangle"></div>
                Cadastro de Clientes
            </h1>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" value={nomeSocial} onChange={e => setNomeSocial(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="RG" value={rg} onChange={e => setRg(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Pet" value={nomePet} onChange={e => setNomePet(e.target.value)} />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="temOutroPet" checked={temOutroPet} onChange={e => setTemOutroPet(e.target.checked)} />
                    <label className="form-check-label" htmlFor="temOutroPet">Deseja cadastrar outro pet?</label>
                </div>
                <div className="input-group mb-3 d-flex justify-content-end">
                    <button className="btn btn-outline-secondary" style={{ backgroundColor: "#4D7A8C", color: "#fff" }} type="button" onClick={handleSubmit}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

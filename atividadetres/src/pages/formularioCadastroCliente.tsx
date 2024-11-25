import React, { useState } from 'react';

const FormularioCadastroCliente = () => {
  const [nome, setNome] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [pets, setPets] = useState<any[]>([]); // Lista de pets associados ao cliente

  const handleSubmit = () => {
    const novoCliente = { nome, nomeSocial, email, telefone, cpf, rg, pets };
    
    // Salvando no localStorage (ou poderia ser uma API)
    const clientesAnteriores = JSON.parse(localStorage.getItem('clientes') || '[]');
    clientesAnteriores.push(novoCliente);
    localStorage.setItem('clientes', JSON.stringify(clientesAnteriores));

    alert("Cliente cadastrado com sucesso!");
    // Resetando campos
    setNome('');
    setNomeSocial('');
    setEmail('');
    setTelefone('');
    setCpf('');
    setRg('');
    setPets([]);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Cadastro de Cliente</h3>

      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome</label>
        <input 
          type="text" 
          className="form-control"
          id="nome"
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Nome"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="nomeSocial" className="form-label">Nome Social</label>
        <input 
          type="text" 
          className="form-control"
          id="nomeSocial"
          value={nomeSocial} 
          onChange={(e) => setNomeSocial(e.target.value)} 
          placeholder="Nome Social"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control"
          id="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="telefone" className="form-label">Telefone</label>
        <input 
          type="text" 
          className="form-control"
          id="telefone"
          value={telefone} 
          onChange={(e) => setTelefone(e.target.value)} 
          placeholder="Telefone"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cpf" className="form-label">CPF</label>
        <input 
          type="text" 
          className="form-control"
          id="cpf"
          value={cpf} 
          onChange={(e) => setCpf(e.target.value)} 
          placeholder="CPF"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="rg" className="form-label">RG</label>
        <input 
          type="text" 
          className="form-control"
          id="rg"
          value={rg} 
          onChange={(e) => setRg(e.target.value)} 
          placeholder="RG"
        />
      </div>

      <button className="btn btn-danger w-100" onClick={handleSubmit}>Cadastrar Cliente</button>
    </div>
  );
};

export default FormularioCadastroCliente;

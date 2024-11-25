import React, { useState } from 'react';

const FormularioCadastroPet = () => {
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [genero, setGenero] = useState('');
  const [tipo, setTipo] = useState('');
  const [dono, setDono] = useState('');

  const handleSubmit = () => {
    const novoPet = { nome, raca, genero, tipo, dono };

    // Salvando no localStorage (ou poderia ser uma API)
    const petsAnteriores = JSON.parse(localStorage.getItem('pets') || '[]');
    petsAnteriores.push(novoPet);
    localStorage.setItem('pets', JSON.stringify(petsAnteriores));

    alert("Pet cadastrado com sucesso!");
    // Resetando campos
    setNome('');
    setRaca('');
    setGenero('');
    setTipo('');
    setDono('');
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Cadastro de Pet</h3>

      <div className="mb-3">
        <label htmlFor="nomePet" className="form-label">Nome do Pet</label>
        <input 
          type="text" 
          className="form-control"
          id="nomePet"
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Nome do Pet"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="racaPet" className="form-label">Raça</label>
        <input 
          type="text" 
          className="form-control"
          id="racaPet"
          value={raca} 
          onChange={(e) => setRaca(e.target.value)} 
          placeholder="Raça"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="generoPet" className="form-label">Gênero</label>
        <select 
          className="form-select"
          id="generoPet" 
          value={genero} 
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value="">Selecione o Gênero</option>
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="tipoPet" className="form-label">Tipo</label>
        <select 
          className="form-select"
          id="tipoPet" 
          value={tipo} 
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="">Selecione o Tipo</option>
          <option value="Cão">Cão</option>
          <option value="Gato">Gato</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="donoPet" className="form-label">Nome do Dono</label>
        <input 
          type="text" 
          className="form-control"
          id="donoPet"
          value={dono} 
          onChange={(e) => setDono(e.target.value)} 
          placeholder="Nome do Dono"
        />
      </div>

      <button className="btn btn-danger w-100" onClick={handleSubmit}>Cadastrar Pet</button>
    </div>
  );
};

export default FormularioCadastroPet;

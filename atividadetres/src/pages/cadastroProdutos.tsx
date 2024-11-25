import React, { useState } from 'react';

const FormularioCadastroProduto = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState(0);

  const handleSubmit = () => {
    const novoProduto = { nome, tipo, preco };
    
    // Salvando no localStorage (ou poderia ser uma API)
    const produtosAnteriores = JSON.parse(localStorage.getItem('produtos') || '[]');
    produtosAnteriores.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtosAnteriores));

    alert("Produto cadastrado com sucesso!");
    // Resetando campos
    setNome('');
    setTipo('');
    setPreco(0);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Cadastro de Produto</h3>

      <div className="mb-3">
        <label htmlFor="nomeProduto" className="form-label">Nome do Produto</label>
        <input 
          type="text" 
          className="form-control"
          id="nomeProduto"
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Nome do Produto"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tipoProduto" className="form-label">Tipo</label>
        <input 
          type="text" 
          className="form-control"
          id="tipoProduto"
          value={tipo} 
          onChange={(e) => setTipo(e.target.value)} 
          placeholder="Tipo do Produto"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="precoProduto" className="form-label">Preço</label>
        <input 
          type="number" 
          className="form-control"
          id="precoProduto"
          value={preco} 
          onChange={(e) => setPreco(parseFloat(e.target.value))} 
          placeholder="Preço"
        />
      </div>

      <button className="btn btn-danger w-100" onClick={handleSubmit}>Cadastrar Produto</button>
    </div>
  );
};

export default FormularioCadastroProduto;

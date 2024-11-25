import React, { useState } from 'react';
import '../styles/detail.css';

const CadastroCompras = () => {
  // Estado para armazenar os produtos comprados e o valor total
  const [produtosComprados, setProdutosComprados] = useState<any[]>([]);
  const [produtoNome, setProdutoNome] = useState('');
  const [produtoPreco, setProdutoPreco] = useState(0);
  const [clienteId, setClienteId] = useState('');

  // Função para adicionar um produto à lista de compras
  const handleAddProduct = () => {
    if (produtoNome && produtoPreco > 0) {
      const novoProduto = { nome: produtoNome, preco: produtoPreco };
      setProdutosComprados([...produtosComprados, novoProduto]);

      // Limpar os campos de entrada após adicionar o produto
      setProdutoNome('');
      setProdutoPreco(0);
    } else {
      alert('Por favor, preencha os campos corretamente.');
    }
  };

  // Função para calcular o valor total das compras
  const valorTotal = produtosComprados.reduce((acc, produto) => acc + produto.preco, 0);

  // Função para salvar a compra (exemplo de como você pode salvar no localStorage ou API)
  const handleSaveCompra = () => {
    if (clienteId && produtosComprados.length > 0) {
      const compra = {
        clienteId,
        produtos: produtosComprados,
        total: valorTotal,
        data: new Date().toLocaleString(),
      };

      // Salvar a compra (aqui estamos usando o localStorage como exemplo)
      const comprasAnteriores = JSON.parse(localStorage.getItem('compras') || '[]');
      comprasAnteriores.push(compra);
      localStorage.setItem('compras', JSON.stringify(comprasAnteriores));

      alert('Compra registrada com sucesso!');
      setProdutosComprados([]); // Limpar os produtos comprados após salvar
    } else {
      alert('Por favor, adicione produtos e informe o cliente.');
    }
  };

  return (
    <div>
      <h3>Cadastro de Compras</h3>

      <div className="mb-3">
        <label htmlFor="clienteId" className="form-label">ID do Cliente</label>
        <input
          type="text"
          className="form-control"
          id="clienteId"
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="produtoNome" className="form-label">Nome do Produto</label>
        <input
          type="text"
          className="form-control"
          id="produtoNome"
          value={produtoNome}
          onChange={(e) => setProdutoNome(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="produtoPreco" className="form-label">Preço do Produto</label>
        <input
          type="number"
          className="form-control"
          id="produtoPreco"
          value={produtoPreco}
          onChange={(e) => setProdutoPreco(parseFloat(e.target.value))}
        />
      </div>

      <button className="btn btn-primary mb-3" onClick={handleAddProduct}>
        Adicionar Produto
      </button>

      <h4>Produtos Comprados</h4>
      <ul className="list-group">
        {produtosComprados.map((produto, index) => (
          <li key={index} className="list-group-item">
            {produto.nome} - R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>

      <h4 className="mt-3">Valor Total: R$ {valorTotal.toFixed(2)}</h4>

      <button className="btn btn-success mt-3" onClick={handleSaveCompra}>
        Registrar Compra
      </button>
    </div>
  );
};

export default CadastroCompras;

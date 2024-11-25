import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ListaClientes from './pages/listaClientes';
import ListaPets from './pages/listaPets';
import ListaProdutos from './pages/listaProdutos';
import FormularioCadastroCliente from './pages/formularioCadastroCliente';
import FormularioCadastroPet from './pages/cadastroPet';  // Importação do cadastro de pets
import FormularioCadastroProduto from './pages/cadastroProdutos';  // Importação do cadastro de produtos
import CadastroCompras from './pages/CadastroCompras';  // Importando o Cadastro de Compras (se for o caso)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ListaClientes />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/pets" element={<ListaPets />} />
          <Route path="/cadastro" element={<FormularioCadastroCliente />} />
          <Route path="/cadastro-pet" element={<FormularioCadastroPet />} /> {/* Rota para cadastro de pets */}
          <Route path="/cadastro-produto" element={<FormularioCadastroProduto />} /> {/* Rota para cadastro de produtos */}
          <Route path="/cadastro-compra" element={<CadastroCompras />} /> {/* Rota para Cadastro de Compras */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

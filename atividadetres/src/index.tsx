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
import FormularioCadastroPet from './pages/cadastroPet';  
import FormularioCadastroProduto from './pages/cadastroProdutos';  
import CadastroCompras from './pages/CadastroCompras';  

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
          <Route path="/cadastro-pet" element={<FormularioCadastroPet />} /> {}
          <Route path="/cadastro-produto" element={<FormularioCadastroProduto />} /> {}
          <Route path="/cadastro-compra" element={<CadastroCompras />} /> {}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

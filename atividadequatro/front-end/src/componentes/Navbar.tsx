import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/detail.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar custom-bg-color sticky-top mb-5" style={{ backgroundColor: "#FF0000" }}>
                <div className="container-fluid">
                    {/* Contêiner flex para centralizar o nome "PetLovers" sem afetar o menu hamburguer */}
                    <div className="d-flex justify-content-between w-100">
                        <button
                            className="navbar-toggler custom-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                        >
                            <span className="navbar-toggler-icon custom-toggler-span text-white"></span>
                        </button>

                        <Link
                            to={'/'}
                            className="navbar-brand list-group-item"
                            style={{
                                color: '#FFF8E1',
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '32px',
                                fontWeight: 700,
                                textAlign: 'center',
                                flex: 1,  // Preenche o espaço restante e centraliza o texto
                            }}
                        >
                            PetLovers
                        </Link>
                    </div>

                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <div className="fw-bold my-2" style={{ fontSize: '22px', color: '#FFEB3B' }}>
                                <span style={{ marginRight: '5px' }}>🐾</span>Cadastros
                            </div>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="list-group list-group-flush">
                                <Link to={'/'} className="list-group-item bg-dark text-white py-2 border-dark" style={{ fontSize: '18px' }}>Clientes</Link>
                                <Link to={'/pets'} className="list-group-item bg-dark text-white py-2 border-dark" style={{ fontSize: '18px' }}>Pets</Link>
                                <Link to={'/produtos'} className="list-group-item bg-dark text-white py-2 border-dark" style={{ fontSize: '18px' }}>Produtos e Serviços</Link>
                                <Link to={'/cadastro'} className="list-group-item bg-dark text-white py-2 border-dark" style={{ fontSize: '18px' }}>Cadastro de Cliente</Link>
                                <Link to={'/cadastro-produto'} className="list-group-item bg-dark text-white py-2 border-dark" style={{ fontSize: '18px' }}>Cadastro de Produto</Link>
                                <Link to={'/cadastro-pet'} className="list-group-item bg-dark text-white py-2 border-dark" style={{ fontSize: '18px' }}>Cadastro de Pet</Link>
                                <Link to={'/cadastro-compra'} className="list-group-item bg-dark text-white py-2 border-dark" style={{ fontSize: '18px' }}>Cadastro de Compra</Link> {/* Link para o Cadastro de Compra */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

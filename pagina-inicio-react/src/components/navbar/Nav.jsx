import './navbar-styles/Nav.scss';
import InputSearch from './sub-components/InputSearch';

const Nav = () => {
    return (    
        <>      
            <nav className="navbar">

                <ul className="navbar__list">

                    <li className="navbar__item--explorar"><a href="#">Explorar</a></li>

                    <li className="navbar__search">

                        <InputSearch /> {/* Componente InputSearch --> Implementado con React Bootstrap*/}    

                        {/* Botón Modo Claro | Modo Oscuro */}
                        <div className="navbar__item--icons">                            
                            <a href="#" className="navbar__icon">
                                <i className="fa-solid fa-sun"></i>
                            </a>                            
                        </div>                        

                    </li>

                    <li className="navbar__item--registro">
                        <i className="fa-solid fa-user"></i>
                        <a href="#">Inicio</a> | <a href="#">Registro</a>
                    </li>

                </ul>

            </nav> 
        </>
    );
}

export default Nav;
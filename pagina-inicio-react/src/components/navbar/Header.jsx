import './navbar-styles/Header.scss';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="header">

            <div className="header__container">
                <img className="header__logo" src="/src/assets/renca.png" alt="Logo de Renca"/>    
                <img className="header__favicon" src="/src/assets/favicon.png" alt="Favicon de Renca"/>            
            </div>

            <Nav />  

        </header>
    );
}

export default Header;  
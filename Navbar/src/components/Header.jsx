import '../styles/Header.scss';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="header">

            <div className="header__container">
                <img className="header__logo" src="/src/assets/logo-renca.png" alt="Logo de Renca"/>                
                <i className="fa-solid fa-right-from-bracket header__logout"></i>
            </div>

            <Nav />  

        </header>
    );
}

export default Header;
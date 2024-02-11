import './main-container-styles/MainContainer.scss';
import Footer from '../footer/Footer';
import Header from '../navbar/Header';
import Main from '../Main/Main';


const Container = () => {
    return (
        <div className="grid-container">
            <Header />
            <Main>
                
            </Main>
            <Footer />
        </div>
    );
}

export default Container;
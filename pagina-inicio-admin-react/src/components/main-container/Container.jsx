import './main-container-styles/Container.scss';
import Header from '../navbar/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

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
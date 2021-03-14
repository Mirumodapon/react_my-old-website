import Navbar from './Navbar';
import '../../assets/scss/header.scss';

function Header() {
    return (
        <header id="header">
            <div className="header__logo">
                <span className="header__logo--text">Mirumo</span>
            </div>
            <Navbar></Navbar>
        </header>
    )
}

export default Header;
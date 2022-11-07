import { Container, Row, Col } from 'react-bootstrap';
import './navbar.scss'
import fire from "../../resources/icons/navbarIcons/fireNav.svg";

const Navbar = () => {
    return (
        <Container>
            <nav className='navbar'>
                <Row>
                    <div className='navbar__top'>
                        <button className='menu'>
                            <div className="menu_icon"></div>Меню</button>
                        <ul className='cities'>
                            <li><a href="#">Київ</a></li>
                            <li><a href="#">Одеса</a></li>
                            <li><a href="#">Харків</a></li>
                        </ul>
                        <div className='nav_block'>
                            <input type="text" class="placeicon" placeholder='&#xf002;    пошук новин' />
                            <div className='social_logo'>
                                <a href="#"><i class="fa-brands fa-telegram"></i></a>
                                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            </div>
                            <div className='languages'>
                                <a href="#">RU</a>
                                <a className="languages_active" href="#">UA</a>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className='navbar__bottom'>
                        <ul className="navbar__bottom__list">
                            <li><img src={fire} alt="active" /><a href="#">ВІЙНА</a></li>
                            <li><a href="#">НОВИНИ</a></li>
                            <li><a href="#">ПОЛІТИКА</a></li>
                            <li><a href="#">ЕКОНОМІКА</a></li>
                            <li><a href="#">СУСПІЛЬСТВО</a></li>
                            <li><a href="#">ПОГЛЯДИ</a></li>
                            <li><a href="#">СВІТ</a></li>
                        </ul>
                        <div className='circle'></div>
                        <a className="live" href="#">LIVE</a>
                    </div>
                </Row>
            </nav>
        </Container>
    )
}

export default Navbar;
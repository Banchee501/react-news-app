import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.scss'
import fire from "../../resources/icons/navbarIcons/fireNav.svg";

const Navbar = () => {
    return (
        <Container>
            <Row>
                <div className='navbar__top'>
                    <button className='menu'>
                        <div className="menu_icon"></div>Меню</button>
                    <ul className='cities'>
                        <li><Link to="/kiev">Київ</Link></li>
                        <li><Link to="/odesa">Одеса</Link></li>
                        <li><Link to="/kharkiv">Харків</Link></li>
                    </ul>
                    <div className='nav_block'>
                        <input type="text" class="placeicon" placeholder='&#xf002;    пошук новин' />
                        <div className='social_logo'>
                            <a href="https://web.telegram.org/" target="_blank" rel="noreferrer"><i class="fa-brands fa-telegram"></i></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                        <div className='languages'>
                            <a href="/ru">RU</a>
                            <a className="languages_active" href="/ua">UA</a>
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className='navbar__bottom'>
                    <ul className="navbar__bottom__list">
                        <li><img src={fire} alt="active" /><a href="/war">ВІЙНА</a></li>
                        <li><a href="/news">НОВИНИ</a></li>
                        <li><a href="/politic">ПОЛІТИКА</a></li>
                        <li><a href="/economic">ЕКОНОМІКА</a></li>
                        <li><a href="/society">СУСПІЛЬСТВО</a></li>
                        <li><a href="/views">ПОГЛЯДИ</a></li>
                        <li><a href="/world">СВІТ</a></li>
                    </ul>
                    <div className='circle'></div>
                    <a className="live" href="/live">LIVE</a>
                </div>
            </Row>
        </Container>
    )
}

export default Navbar;
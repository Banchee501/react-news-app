import { Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './navbar.scss'
import fire from "../../resources/icons/navbarIcons/fireNav.svg";

const Navbar = () => {
    return (
        <Container>
            <navigation>
                <div className='nav'>
                    <button className='nav__hamburger'>
                        <div className="nav__hamburger-icon"></div>Меню</button>
                    <ul className='fz14 nav__cities'>
                        <li><Link to="/kiev">Київ</Link></li>
                        <li><Link to="/odesa">Одеса</Link></li>
                        <li><Link to="/kharkiv">Харків</Link></li>
                    </ul>
                    <div className='nav__panel'>
                        <input type="text" class="placeicon" placeholder='&#xf002;    пошук новин' />
                        <div className='nav__panel-logo'>
                            <a href="https://web.telegram.org/" target="_blank" rel="noreferrer"><i class="fa-brands fa-telegram"></i></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                        <div className='fz14 nav__panel-languages'>
                            <a href="/ua">UA</a>
                            <a href="/ru">RU</a>
                        </div>
                    </div>
                    <div className='nav__search active'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                UA
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/ua">UA</Dropdown.Item>
                                <Dropdown.Item href="/ru">RU</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className='fz14 nav__bottom'>
                    <ul className="nav__bottom-list">
                        <div className='active_link'><img src={fire} alt="active" /></div>
                        <li className="nav__bottom-link"><a href="/war">ВІЙНА</a></li>
                        <li className="nav__bottom-link"><a href="/news">НОВИНИ</a></li>
                        <li className="nav__bottom-link"><a href="/politic">ПОЛІТИКА</a></li>
                        <li className="nav__bottom-link"><a href="/economic">ЕКОНОМІКА</a></li>
                        <li className="nav__bottom-link"><a href="/society">СУСПІЛЬСТВО</a></li>
                        <li className="nav__bottom-link"><a href="/views">ПОГЛЯДИ</a></li>
                        <li className="nav__bottom-link"><a href="/world">СВІТ</a></li>
                    </ul>
                    <div className='circle'></div>
                    <a className="nav__bottom-list-live" href="/live">LIVE</a>
                </div>
            </navigation>
        </Container>
    )
}

export default Navbar;
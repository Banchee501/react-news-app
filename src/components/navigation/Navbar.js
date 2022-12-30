import { Link } from 'react-router-dom';

import './navbar.scss'
import fire from "../../resources/icons/navbarIcons/fireNav.svg";

const Navbar = () => {
    return (
            <nav className='container'>
                <div className='nav'>
                    <button className='fz16 nav__hamburger'>
                        <div className="nav__hamburger-icon"></div>Меню</button>
                    <ul className='fz14 nav__cities'>
                        <li><Link to="/kiev">Київ</Link></li>
                        <li><Link to="/odesa">Одеса</Link></li>
                        <li><Link to="/kharkiv">Харків</Link></li>
                    </ul>
                    <div className='nav__panel'>
                        <input type="text" className="placeicon" placeholder='&#xf002;    пошук новин' />
                        <div className='nav__panel-logo'>
                            <a href="https://web.telegram.org/" target="_blank" rel="noreferrer"><i className="fa-brands fa-telegram"></i></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                        <div className='fz14 nav__panel-languages'>
                            <a href="/ua">UA</a>
                            <a href="/ru">RU</a>
                        </div>
                    </div>
                    <div className='nav__panel-languages-media'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <div className="dropdown">
                            <button className='dropbtn'>UA
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.27602 0H8.72402C8.85586 2.81496e-05 8.98472 0.0391426 9.09433 0.112399C9.20393 0.185655 9.28936 0.289764 9.33981 0.411564C9.39025 0.533364 9.40346 0.667386 9.37774 0.796687C9.35203 0.925989 9.28856 1.04477 9.19535 1.138L5.47135 4.862C5.34634 4.98698 5.1768 5.05719 5.00002 5.05719C4.82325 5.05719 4.65371 4.98698 4.52869 4.862L0.804688 1.138C0.711482 1.04477 0.648011 0.925989 0.622299 0.796687C0.596588 0.667386 0.60979 0.533364 0.660237 0.411564C0.710683 0.289764 0.79611 0.185655 0.905716 0.112399C1.01532 0.0391426 1.14419 2.81496e-05 1.27602 0Z" fill="#2D2D2D" />
                                </svg>
                            </button>
                            <div className='dropdown-content'>
                                <a href="/ua">UA</a>
                                <a href="/ru">RU</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fz14 nav__bottom'>
                    <ul className="nav__bottom-list">
                        <div className='exclusive'><img src={fire} alt="exclusive" /></div>
                        <li className="nav__bottom-link"><a href="/war">ВІЙНА</a></li>
                        <li className="nav__bottom-link"><a href="/news">НОВИНИ</a></li>
                        <li className="nav__bottom-link"><a href="/politic">ПОЛІТИКА</a></li>
                        <li className="nav__bottom-link"><a href="/economic">ЕКОНОМІКА</a></li>
                        <li className="nav__bottom-link"><a href="/society">СУСПІЛЬСТВО</a></li>
                        <li className="nav__bottom-link"><a href="/views">ПОГЛЯДИ</a></li>
                        <li className="nav__bottom-link"><a href="/world">СВІТ</a></li>
                    </ul>
                    <div className='live'>
                        <div className='circle'></div>
                        <a className="nav__bottom-list-live" href="/live">LIVE</a>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;
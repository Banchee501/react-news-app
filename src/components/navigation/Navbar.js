import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './navbar.scss'

const Navbar = () => {
    return (
        <Container>
            <nav className='navbar'>
                <Row>
                    <div className='navbar__top'>
                        <button>Меню</button>
                        <ul>
                            <li><a href="#"></a>Київ</li>
                            <li><a href="#"></a>Одеса</li>
                            <li><a href="#"></a>Харків</li>
                        </ul>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='пошук новин' />
                        <i class="fa-brands fa-telegram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <a href="#">RU</a>
                        <a href="#">UA</a>
                    </div>
                </Row>
                <Row>
                    <div className='navbar__bottom'>
                        <ul>
                            <li><a href="#">ВІЙНА</a></li>
                            <li><a href="#">НОВИНИ</a></li>
                            <li><a href="#">ПОЛІТИКА</a></li>
                            <li><a href="#">ЕКОНОМІКА</a></li>
                            <li><a href="#">СУСПІЛЬСТВО</a></li>
                            <li><a href="#">ПОГЛЯДИ</a></li>
                            <li><a href="#">СВІТ</a></li>
                            <li><a href="#">LIVE</a></li>
                        </ul>
                    </div>
                </Row>
            </nav>
        </Container>
    )
}

export default Navbar;
import './navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__top'>
                <ul>
                    <li><a href="#">Київ</a></li>
                    /
                    <li><a href="#">Одеса</a></li>
                    /
                    <li><a href="#">Харків</a></li>
                </ul>
            </div>
            <div className='navbar__bottom'></div>
        </nav>
    )
}

export default Navbar;
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './editorialChoice.scss'

const NewsFeed = () => {
    return (
        <Container>
            <div className='all_news col-xl-3 col-4'>
                <div>Всі новини</div>
                <Link to="/">Архів</Link>
                <ul>
                    <li>Всі</li>
                    <li>Новини</li>
                    <li>Статті</li>
                </ul>
            </div>
            <div className='editorial_choice col-xl-9 col-4'>
                <div>Вибір редакції</div>
                <div></div>
            </div>
        </Container>
    )
}

export default NewsFeed;
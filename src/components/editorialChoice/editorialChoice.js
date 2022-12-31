import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NewsServices from "../services/newsServices";
import AllNews from './allNewsColumn/AllNewsColumn';
import RegionsNews from './regionNews/RegionNews';
import { getDate } from '../../util';

import './editorialChoice.scss';

import newsImage from "../../resources/img/image.jpg";

const NewsFeed = () => {

const [editorialChoice, setEditorialChoice] = useState([])

    const newsServices = new NewsServices();

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line
    }, [])

    const onRequest = () => {
        newsServices.getEditorialChoice()
            .then(onEditorialChoice)
    }

    const onEditorialChoice = (editorialChoice) => {
        setEditorialChoice(editorialChoice)
    }

    function renderEditorialChoice(arr) {
        const items = arr.map((item) => {
            return (
                <div key={item.id} className="news__choice-item">
                    <img src={newsImage} alt="news" />
                    <div className='fz12 date'>{getDate(item.date).toUpperCase()}</div>
                    <div className="fz16 content">
                        {item.text}
                    </div>
                </div>
            )
        })

        return (
            <div className='news__choice-items'>
                {items}
            </div>
        )
    }

        const itemEditorialChoice = renderEditorialChoice(editorialChoice);

        return (
            <div className="container" >
                <div className='news'>
                    <AllNews />
                    <div className="news__block">
                        <div className='news__choice'>
                            <div className='title title_fz32'>Вибір редакції</div>
                            {itemEditorialChoice}
                        </div>
                        <div className="news__regions">
                            <div className="news__regions-head">
                                <div className="title title_fz32">Регіони</div>
                                <Link to="/" className='fz14'>Всі новини розділу</Link>
                            </div>
                            <ul className='fz16 sort'>
                                <li className='active'>Київ</li>
                                <li>Одеса</li>
                                <li>Харків</li>
                            </ul>
                            <div className="news__cities">
                                <RegionsNews />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default NewsFeed;
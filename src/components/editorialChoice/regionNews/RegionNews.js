import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { getTime, getDay } from '../../../util';
import useNewsServices from "../../services/newsServices";

const RegionsNews = () => {
    const [regionsNews, setRegionsNews] = useState([])
    const [activeKyiv, setActiveKyiv] = useState(true);
    const [activeKharkiv, setActiveKharkiv] = useState(false);
    const [activeOdesa, setActiveOdesa] = useState(false);

    const scollToRefKyiv = useRef(),
        scollToRefKharkiv = useRef(),
        scollToRefOdesa = useRef();

    const {getRegionsNews} = useNewsServices();

    useEffect(() => {
        getRegionsNews()
            .then(onRegionsNewsLoaded)
            // eslint-disable-next-line
    }, [])

    const onRegionsNewsLoaded = (regionsNews) => {
        setRegionsNews(regionsNews)
    }

    const renderNews = (arr, reg) => {
        
        const dateArr = arr.reduce((desired, item) => {
            if (!desired.find(verifiable => verifiable.date === item.date) && item.type === reg) {
                desired.push({
                    ...item
                });
            }
            return desired;
        }, []);

        const items = dateArr.map(item => {
           let dates = arr.filter((date, key) => {
                if(new Date(date?.date).getDay() === new Date(item?.date)?.getDay() && new Date(date?.date)?.getMonth() === new Date(item?.date)?.getMonth() && arr[key].type === reg) {
                    return date;
                }
           })
            return {
                ...item,
                news: dates,
            }
        })

        const date = items.map((item) => {
            let news = (
                <>
                    {item?.news.map(description => {
                        let sliced = description.text.slice(0, 81)
                        if (sliced.length < item.text.length) {
                                sliced += '...';
                            }
                        return (
                            <>
                                <div key={item.id} className="fz16 news__city-data-content">
                                    <span>{getTime(item.date)}</span> {sliced}
                                    <hr />
                                </div>
                            </>
                        )
                    })}
                </>
            )

            return (
                <>
                    <div key={item.date} className='fz12 data'>
                        {getDay(item.date).toUpperCase()}
                    </div>
                    {news}
                </>
            )
        })

        return (
            <div className="news__city-data">
                {date}
            </div>
        )
    }

    const toggleKyiv = () => {
        setActiveKyiv(true);
        setActiveKharkiv(false);
        setActiveOdesa(false);
    }
    const toggleKharkiv = () => {
        setActiveKyiv(false);
        setActiveKharkiv(true);
        setActiveOdesa(false);
    }
    const toggleOdesa = () => {
        setActiveKyiv(false);
        setActiveKharkiv(false);
        setActiveOdesa(true);
    }

    const KyivNews = renderNews(regionsNews, "Kyiv");
    const OdesaNews = renderNews(regionsNews, "Odesa");
    const KharkivNews = renderNews(regionsNews, "Kharkiv");

    return (
        <>
            <div className="news__regions-head">
                <div className="title title_fz32">Регіони</div>
                <Link to="/regions" className='fz14'>Всі новини розділу</Link>
            </div>
            <ul className='fz16 sort'>
                <li className={activeKyiv ? 'active': ''}
                onClick={() => {scollToRefKyiv.current.scrollIntoView(); toggleKyiv()}}>Київ</li>
                <li className={activeOdesa ? 'active': ''}
                onClick={() => {scollToRefOdesa.current.scrollIntoView(); toggleOdesa()}}>Одеса</li>
                <li className={activeKharkiv ? 'active': ''}
                onClick={() => {scollToRefKharkiv.current.scrollIntoView(); toggleKharkiv()}}>Харків</li>
            </ul>
            <div className="news__cities">
                <div className="news__city">
                    <div className="news__city_col">
                        <div ref={scollToRefKyiv} className="title title_fz24 news__city-name">Київ</div>
                            {KyivNews}
                    </div>
                    <button className="fz16 more_news">Більше новин
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.0833 15.9999C10.0833 15.7698 10.2699 15.5833 10.5 15.5833H21.5C21.7301 15.5833 21.9167 15.7698 21.9167 15.9999C21.9167 16.23 21.7301 16.4166 21.5 16.4166H10.5C10.2699 16.4166 10.0833 16.23 10.0833 15.9999Z" fill="#182840" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.7054 11.2053C16.8681 11.0426 17.1319 11.0426 17.2946 11.2053L21.7946 15.7053C21.9573 15.868 21.9573 16.1318 21.7946 16.2945L17.2946 20.7945C17.1319 20.9573 16.8681 20.9573 16.7054 20.7945C16.5426 20.6318 16.5426 20.368 16.7054 20.2053L20.9107 15.9999L16.7054 11.7945C16.5426 11.6318 16.5426 11.368 16.7054 11.2053Z" fill="#182840" />
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#979EA9" />
                        </svg>
                    </button>
                </div>
                <div className="news__city">
                    <div className="news__city_col">
                        <div ref={scollToRefOdesa} className="title title_fz24 news__city-name">Одеса</div>
                            <div className="news__city-data">
                                {OdesaNews}
                            </div>
                        </div>
                        <button className="fz16 more_news">Більше новин
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.0833 15.9999C10.0833 15.7698 10.2699 15.5833 10.5 15.5833H21.5C21.7301 15.5833 21.9167 15.7698 21.9167 15.9999C21.9167 16.23 21.7301 16.4166 21.5 16.4166H10.5C10.2699 16.4166 10.0833 16.23 10.0833 15.9999Z" fill="#182840" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.7054 11.2053C16.8681 11.0426 17.1319 11.0426 17.2946 11.2053L21.7946 15.7053C21.9573 15.868 21.9573 16.1318 21.7946 16.2945L17.2946 20.7945C17.1319 20.9573 16.8681 20.9573 16.7054 20.7945C16.5426 20.6318 16.5426 20.368 16.7054 20.2053L20.9107 15.9999L16.7054 11.7945C16.5426 11.6318 16.5426 11.368 16.7054 11.2053Z" fill="#182840" />
                                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#979EA9" />
                            </svg>
                        </button>
                    </div>
                <div className="news__city">
                    <div className="news__city_col">
                        <div ref={scollToRefKharkiv} className="title title_fz24 news__city-name">Харків</div>
                        <div className="news__city-data">
                            {KharkivNews}
                        </div>
                    </div>
                    <button className="fz16 more_news">Більше новин
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.0833 15.9999C10.0833 15.7698 10.2699 15.5833 10.5 15.5833H21.5C21.7301 15.5833 21.9167 15.7698 21.9167 15.9999C21.9167 16.23 21.7301 16.4166 21.5 16.4166H10.5C10.2699 16.4166 10.0833 16.23 10.0833 15.9999Z" fill="#182840" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.7054 11.2053C16.8681 11.0426 17.1319 11.0426 17.2946 11.2053L21.7946 15.7053C21.9573 15.868 21.9573 16.1318 21.7946 16.2945L17.2946 20.7945C17.1319 20.9573 16.8681 20.9573 16.7054 20.7945C16.5426 20.6318 16.5426 20.368 16.7054 20.2053L20.9107 15.9999L16.7054 11.7945C16.5426 11.6318 16.5426 11.368 16.7054 11.2053Z" fill="#182840" />
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#979EA9" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default RegionsNews;
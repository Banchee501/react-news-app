import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import newsTag from "../../../util/TegItem";
import useNewsServices from "../../services/newsServices";
import { getTime } from '../../../util';

const AllNews = () => {

    const [news, setNews] = useState([]);
    const [activeAll, setActiveAll] = useState(true);
    const [activeNews, setActiveNews] = useState(false);
    const [activeArticles, setActiveArticles] = useState(false);

    const {getNewsAll} = useNewsServices();

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line
    }, [])

    
    const onRequest = () => {
        getNewsAll()
        .then(onNewsLoaded)
    }

    const onNewsLoaded = (news) => {
        setNews( news )
    }

    function renderAllNews(arr) {
        const items = arr.map((item) => {
            let style = {
                className: "fz16 news__all-item"
            };
            if (item.className !== { className: "" }) {
                style = { className: item.className + " fz16 news__all-item" }
            }

            return (
                <div key={item.id} className={style.className}>
                    {newsTag(item.className)}
                    <span>{getTime(item.date)}</span> <Link to={item.id}>{item.text}</Link>
                    <hr />
                </div>
            )
        });

        return (
            <div className="news__all-items">
                {items}
            </div>
        )
    }

    const toggleAllClass = () => {
        setActiveAll(true);
        setActiveNews(false);
        setActiveArticles(false);
    };

    const toggleNewsClass = () => {
        setActiveAll(false);
        setActiveNews(true);
        setActiveArticles(false);
    };

    const toggleArticleClass = () => {
        setActiveAll(false);
        setActiveNews(false);
        setActiveArticles(true);
    };


    const itemAllNews = renderAllNews(news);

    return (
        <div className='news__all'>
            <div className="news__all-list">
                <div className="news__all-head">
                    <div className='title title_fz24'>Всі новини</div>
                    <Link to="/" className='fz14'>Архів</Link>
                </div>
                <ul className='fz16 sort'>
                    <li className={activeAll ? 'active': ''} onClick={toggleAllClass}>Всі</li>
                    <li className={activeNews ? 'active': ''} onClick={toggleNewsClass}>Новини</li>
                    <li className={activeArticles ? 'active': ''} onClick={toggleArticleClass}>Статті</li>
                </ul>
                {itemAllNews}
            </div>
            <div className="button">
                <button className='fz16 load__more'>
                    <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5734_287)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 3.229C18.2876 3.229 18.5208 3.46219 18.5208 3.74984V7.9165C18.5208 8.20415 18.2876 8.43734 18 8.43734H13.8333C13.5457 8.43734 13.3125 8.20415 13.3125 7.9165C13.3125 7.62886 13.5457 7.39567 13.8333 7.39567H17.4792V3.74984C17.4792 3.46219 17.7124 3.229 18 3.229Z" fill="#182840" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.4633 3.56413C10.1733 3.31002 8.83617 3.43996 7.62121 3.93724C6.40631 4.43451 5.36882 5.27647 4.6393 6.3557C3.90984 7.43487 3.52085 8.70308 3.52085 9.99992C3.52085 11.2968 3.90984 12.565 4.6393 13.6441C5.36882 14.7234 6.40631 15.5653 7.62121 16.0626C8.83617 16.5599 10.1733 16.6898 11.4633 16.4357C12.7533 16.1816 13.9372 15.5551 14.8657 14.6363C15.0702 14.434 15.3999 14.4357 15.6023 14.6402C15.8046 14.8447 15.8029 15.1744 15.5984 15.3768C14.5235 16.4404 13.1544 17.1643 11.6646 17.4577C10.1749 17.7512 8.63051 17.6013 7.22663 17.0266C5.82269 16.452 4.62172 15.4782 3.7763 14.2275C2.93084 12.9767 2.47919 11.5055 2.47919 9.99992C2.47919 8.49437 2.93084 7.02313 3.7763 5.77236C4.62172 4.52165 5.82269 3.54784 7.22663 2.9732C8.63051 2.39859 10.1749 2.24865 11.6646 2.5421C13.1543 2.83553 14.5232 3.55928 15.598 4.62271C15.5981 4.62283 15.5979 4.62259 15.598 4.62271L18.3657 7.35108C18.5705 7.55302 18.5729 7.88278 18.3709 8.08763C18.169 8.29247 17.8392 8.29483 17.6344 8.09289L14.8657 5.36351C13.9372 4.44474 12.7533 3.81823 11.4633 3.56413Z" fill="#182840" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5734_287">
                                <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                Завантажити ще</button>
            </div>
        </div>
    )
}

export default AllNews;
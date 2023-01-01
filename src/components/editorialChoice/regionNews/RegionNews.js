import { useState, useEffect } from 'react';

import { getTime } from '../../../util';
import useNewsServices from "../../services/newsServices";

const RegionsNews = () => {

    const [regionsNews, setRegionsNews] = useState([])

    const {getRegionsNews} = useNewsServices();

    useEffect(() => {
        getRegionsNews()
            .then(onRegionsNewsLoaded)
            // eslint-disable-next-line
    }, [])

    const onRegionsNewsLoaded = (regionsNews) => {
        setRegionsNews(regionsNews)
    }

    function renderRegionsNews(arr, reg) {
        const items = arr.map((item, key) => {
            if (arr[key].type === reg) {
                return (
                    <div key={item.id} className="fz16 news__city-data-content">
                        <span>{getTime(item.date)}</span> {item.text}
                        <hr />
                    </div>
                )
            }
        });

        return (
            <>
                <div className="news__city-grid">
                    {items}
                </div>
            </>

        )
    }

        const itemKyivNews = renderRegionsNews(regionsNews, "Kyiv");
        const itemOdesaNews = renderRegionsNews(regionsNews, "Odesa");
        const itemKharkivNews = renderRegionsNews(regionsNews, "Kharkiv");

        return (
            <>
                <div className="news__city">
                    <div className="news__city_col">
                        <div className="title title_fz24 news__city-name">Київ</div>
                        <div className="news__city-data">
                            <div className="fz12 data">05 СЕРПНЯ</div>
                            {itemKyivNews}
                        </div>
                        <div className="news__city-data">
                            <div className="fz12 data">04 СЕРПНЯ</div>
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
                    <div className="title title_fz24 news__city-name">Одеса</div>
                        <div className="news__city-data">
                            <div className="fz12 data">05 СЕРПНЯ</div>
                            {itemOdesaNews}
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
                    <div className="title title_fz24 news__city-name">Харків</div>
                    <div className="news__city-data">
                        <div className="fz12 data">05 СЕРПНЯ</div>
                        {itemKharkivNews}
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
        </>
    )
}

export default RegionsNews;


// export const parseTime = (time, vrit) => {
//     switch(vrit) {
//         case ('time') :
//             return `${new Date(time).getHours}:  ` // minute

//         // time month 
//         // month[{new Date(time).getMonth()]
//     }
// }

// time, timeMonth, month, 
// const res = (dte, month)
//const filtered =  arr.filter(item => {
// return new Date(item.dte).getMonth() === month
//})
// return res
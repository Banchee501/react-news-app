import { Link } from 'react-router-dom';
import { Component } from 'react';

import { getTime, getDate } from '../../../util';
import NewsServices from "../../services/newsServices";

import imageNews from "../../../resources/img/image.jpg";

class Lifestyle extends Component {

    state = {
        lifestyleNews: []
    }

    newsServices = new NewsServices();

    componentDidMount() {
        this.newsServices.getLifestyleNews()
            .then(this.onLifestyleNews)
    }

    onLifestyleNews = (lifestyleNews) => {
        this.setState({ lifestyleNews })
    }

    updateLifestyleNews = () => {
        this.newsServices
            .getLifestyleNews()
            .then(this.onLifestyleNews)
    }

    renderLifestyleNews(arr) {
        const items = arr.map((item) => {
                return (
                    <div key={item.id} className="news__lifestyle-block">
                        <img src={imageNews} alt="news" />
                        <div className="date">{getDate(item.date).toUpperCase()}</div>
                        <div className="news__lifestyle-text">{item.text}</div>
                        </div>
                )
        })

        return (
            <>
                <div className="news__lifestyle-block-main">
                    {items[0]}
                </div>
                <div className="news__lifestyle-block-else">
                    {items.slice(1, 3)}
                </div>
            </>
        )
    }

    renderLifestyleNewsCol(arr) {
        const items = arr.slice(3).map((item) => {
                return (
                    <div key={item.id}>
                        <div className="fz16 news__lifestyle-item label"> <span>{getTime(item.date)} </span>{item.text}
                        </div>
                        <hr />
                    </div>
                )
        })

        return (
            <>
                {items}
            </>
        )
    }

    render() {
        const { lifestyleNews } = this.state
        const itemLifestyleNews = this.renderLifestyleNews(lifestyleNews);
        const itemLifestyleNewsCol = this.renderLifestyleNewsCol(lifestyleNews);

    return (

        <div className="news__lifestyle">
            <div className="news__lifestyle-head">
                <div className="title title_fz32">Лайфстайл</div>
                <Link to="/" className='fz14'>Всі новини розділу</Link>
            </div>
            <ul className='fz16 sort'>
                <li className='active'>Новини</li>
                <li>Статті</li>
            </ul>
            <div className="news__lifestyle-body">
                <div className="news__lifestyle-blocks">
                        {itemLifestyleNews}
                </div>
                <div className="news__lifestyle-items">
                    <div className="news__lifestyle-items-col">
                        <div className="fz16 title">НОВИНИ РОЗДІЛУ</div>
                        {itemLifestyleNewsCol}
                    </div>
                    <button className="fz16 more_news">Більше
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.0833 15.9999C10.0833 15.7698 10.2699 15.5833 10.5 15.5833H21.5C21.7301 15.5833 21.9167 15.7698 21.9167 15.9999C21.9167 16.23 21.7301 16.4166 21.5 16.4166H10.5C10.2699 16.4166 10.0833 16.23 10.0833 15.9999Z" fill="#182840" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.7054 11.2053C16.8681 11.0426 17.1319 11.0426 17.2946 11.2053L21.7946 15.7053C21.9573 15.868 21.9573 16.1318 21.7946 16.2945L17.2946 20.7945C17.1319 20.9573 16.8681 20.9573 16.7054 20.7945C16.5426 20.6318 16.5426 20.368 16.7054 20.2053L20.9107 15.9999L16.7054 11.7945C16.5426 11.6318 16.5426 11.368 16.7054 11.2053Z" fill="#182840" />
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#979EA9" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
    }
}

export default Lifestyle;
import { Link } from 'react-router-dom';
import { Component } from 'react';

import NewsServices from "../../services/newsServices";

import imageNews from "../../../resources/img/image.jpg";

class Economics extends Component {

    state = {
        economicsNews: []
    }

    newsServices = new NewsServices();

    componentDidMount() {
        this.newsServices.getEconomicsNews()
            .then(this.onEconomicsNews)
    }

    onEconomicsNews = (economicsNews) => {
        this.setState({ economicsNews })
    }

    updateEconomicsNews = () => {
        this.newsServices
            .getEconomicsNews()
            .then(this.onEconomicsNews)
    }

    renderEconomicsNews(arr) {
        const items = arr.map((item) => {
                return (
                    <div className="news__economics-block">
                        <img src={imageNews} alt="news" />
                        <div className="date">{item.date.toUpperCase()}</div>
                        <div className="news__economics-text">{item.text}</div>
                        </div>
                )
        })

        return (
            <>
                <div className="news__economics-block-main">
                    {items[0]}
                </div>
                <div className="news__economics-block-else">
                    {items.slice(1, 3)}
                </div>
            </>
        )
    }

    renderEconomicsNewsCol(arr) {
        const items = arr.slice(3).map((item) => {
                return (
                    <>
                        <div id={item.id} className="fz16 news__economics-item label"> <span>{item.date.slice(-5)} </span>{item.text}
                        </div>
                        <hr />
                    </>
                )
        })

        return (
            <>
                {items}
            </>
        )
    }

    render() {
        const { economicsNews } = this.state
        const itemEconomicsNews = this.renderEconomicsNews(economicsNews);
        const itemEconomicsNewsCol = this.renderEconomicsNewsCol(economicsNews);

    return (
        <div className="news__economics">
        <div className="news__economics-head">
            <div className="title title_fz32">Економіка</div>
            <Link to="/" className='fz14'>Всі новини розділу</Link>
        </div>
        <ul className='fz16 sort'>
            <li className='active'>Новини</li>
            <li>Статті</li>
        </ul>
        <div className="news__economics-body">
            <div className="news__economics-blocks">
                {itemEconomicsNews}
            </div>
            <div className="news__economics-items">
                <div className="news__economics-items-col">
                    <div className="fz16 title">НОВИНИ РОЗДІЛУ</div>
                    {itemEconomicsNewsCol}
                </div>
                <button className="fz16 more_news">Більше
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0833 15.9999C10.0833 15.7698 10.2699 15.5833 10.5 15.5833H21.5C21.7301 15.5833 21.9167 15.7698 21.9167 15.9999C21.9167 16.23 21.7301 16.4166 21.5 16.4166H10.5C10.2699 16.4166 10.0833 16.23 10.0833 15.9999Z" fill="#182840" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7054 11.2053C16.8681 11.0426 17.1319 11.0426 17.2946 11.2053L21.7946 15.7053C21.9573 15.868 21.9573 16.1318 21.7946 16.2945L17.2946 20.7945C17.1319 20.9573 16.8681 20.9573 16.7054 20.7945C16.5426 20.6318 16.5426 20.368 16.7054 20.2053L20.9107 15.9999L16.7054 11.7945C16.5426 11.6318 16.5426 11.368 16.7054 11.2053Z" fill="#182840" />
                        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#979EA9" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    )
    }
}

export default Economics;
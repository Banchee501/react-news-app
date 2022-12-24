import { Component } from 'react';
import NewsServices from "../services/newsServices";

import './videoNews.scss';

import video from "../../resources/img/videomain.jpg"


class VideoNews extends Component {

    state = {
        videoNews: []
    }

    newsServices = new NewsServices();

    componentDidMount() {
        this.newsServices.getVideoNews()
            .then(this.onVideoNews)
    }

    onVideoNews = (videoNews) => {
        this.setState({ videoNews })
    }

    updateVideoNews = () => {
        this.newsServices
            .getVideoNews()
            .then(this.onVideoNews)
    }

    renderVideoNews(arr) {
        const items = arr.map((item) => {
                return (
                        <div className="video__news-item">
                            <button className='video__play'>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM20.0899 13.1039L26.1934 17.4765V17.4796C26.5984 17.77 26.9277 18.1494 27.1547 18.5872C27.3817 19.0251 27.5 19.5089 27.5 19.9997C27.5 20.4905 27.3817 20.9744 27.1547 21.4122C26.9277 21.8501 26.5984 22.2295 26.1934 22.5199L20.0899 26.8925C19.6135 27.235 19.0492 27.4416 18.4598 27.4893C17.8704 27.5371 17.279 27.4241 16.7514 27.1629C16.2238 26.9018 15.7807 26.5027 15.4715 26.0101C15.1623 25.5175 14.9991 24.9508 15 24.3729V15.6234C15.0005 15.0461 15.1646 14.4803 15.4741 13.9885C15.7836 13.4968 16.2264 13.0984 16.7535 12.8375C17.2806 12.5766 17.8713 12.4634 18.4602 12.5104C19.0491 12.5574 19.6132 12.7628 20.0899 13.1039Z" fill="white" />
                                </svg>
                            </button>
                            <img src={video} alt="video" />
                            <div className="fz12 video__news-data">{item.date}</div>
                            <div className="title_fz32 video__news-content">{item.text}</div>
                        </div>
                )
        })

        return (
            <>
                <div className="video__news-main">
                    {items[0]}
                </div>
                <div className="video__news-items">
                    {items.slice(1)}
                </div>
            </>
        )
    }

    render() {
        const { videoNews } = this.state
        const itemVideoNews = this.renderVideoNews(videoNews);

    return (
        <div className='container'>
            <div className="video">
                <div className="title title_fz32">Відео
                    <button className="fz16 more_news">Більше новин
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0833 15.9999C10.0833 15.7698 10.2699 15.5833 10.5 15.5833H21.5C21.7301 15.5833 21.9167 15.7698 21.9167 15.9999C21.9167 16.23 21.7301 16.4166 21.5 16.4166H10.5C10.2699 16.4166 10.0833 16.23 10.0833 15.9999Z" fill="#fff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7054 11.2053C16.8681 11.0426 17.1319 11.0426 17.2946 11.2053L21.7946 15.7053C21.9573 15.868 21.9573 16.1318 21.7946 16.2945L17.2946 20.7945C17.1319 20.9573 16.8681 20.9573 16.7054 20.7945C16.5426 20.6318 16.5426 20.368 16.7054 20.2053L20.9107 15.9999L16.7054 11.7945C16.5426 11.6318 16.5426 11.368 16.7054 11.2053Z" fill="#fff" />
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#fff" />
                        </svg>
                    </button>
                </div>
                <div className="video__news">
                        {itemVideoNews}
                </div>
            </div>
        </div>
    )
}
}

export default VideoNews;
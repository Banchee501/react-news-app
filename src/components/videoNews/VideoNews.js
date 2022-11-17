import './videoNews.scss';

const VideoNews = () => {
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
                    <div className="video__news-main">
                        <div className="fz12 video__news-data">05 серпня 11:00</div>
                        <div className="title title_fz32 video__news-main-content">"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником</div>
                    </div>
                    <div className="video__news-item">
                        <div className="video__news-data"></div>
                        <div className="video__news-content"></div>
                    </div>
                    <div className="video__news-item">
                        <div className="video__news-data"></div>
                        <div className="video__news-content"></div>
                    </div>
                    <div className="video__news-item">
                        <div className="video__news-data"></div>
                        <div className="video__news-content"></div>
                    </div>
                    <div className="video__news-item">
                        <div className="video__news-data"></div>
                        <div className="video__news-content"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoNews;
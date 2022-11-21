import { Link } from 'react-router-dom';

import './otherNews.scss';

const Politics = () => {
    return (
        <div className="container">
            <div className="news">
                <div className="news__col">
                    <div className="news__col-list">
                        <div className="news__col-head">
                            <div className='title title_fz24'>Колонки</div>
                            <Link to="/" className='fz14'>Всі колонки</Link>
                        </div>
                        <div className="news__col-items">
                            <div className="news__col-item">
                                <img src="" alt="" />
                                <div className="news__col-name"></div>
                                <div className="news__col-employment"></div>
                                <div className="news__col-title"></div>
                                <div className="date"></div>
                            </div>
                            <div className="news__col-item">
                                <img src="" alt="" />
                                <div className="news__col-name"></div>
                                <div className="news__col-employment"></div>
                                <div className="news__col-title"></div>
                                <div className="date"></div>
                            </div>
                            <div className="news__col-item">
                                <img src="" alt="" />
                                <div className="news__col-name"></div>
                                <div className="news__col-employment"></div>
                                <div className="news__col-title"></div>
                                <div className="date"></div>
                            </div>
                            <div className="news__col-item">
                                <img src="" alt="" />
                                <div className="news__col-name"></div>
                                <div className="news__col-employment"></div>
                                <div className="news__col-title"></div>
                                <div className="date"></div>
                            </div>
                        </div>
                    </div>
                    <button className='fz16 load__more'>
                        Всі колонки
                    </button>
                </div>
                <div className="news__politics">
                    <div className="news__politics-head">
                        <div className="title title_fz32">Політика</div>
                        <Link to="/" className='fz14'>Всі новини розділу</Link>
                    </div>
                    <div className="news__politics-block">
                        <img src="" alt="" />
                        <div className="date"></div>
                        <div className="news__politics-text"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Politics;
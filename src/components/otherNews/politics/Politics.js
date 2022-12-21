import { Link } from 'react-router-dom';

import imageNews from "../../../resources/img/image.jpg";

const Politics = () => {
    return (
        <div className="news__politics">
            <div className="news__politics-head">
                <div className="title title_fz32">Політика</div>
                <Link to="/" className='fz14'>Всі новини розділу</Link>
            </div>
            <ul className='fz16 sort'>
                <li className='active'>Новини</li>
                <li>Статті</li>
            </ul>
            <div className="news__politics-body">
                <div className="news__politics-blocks">
                    <div className="news__politics-block-main">
                        <img src={imageNews} alt="news" />
                        <div className="date">05 СЕРПНЯ 11:00</div>
                        <div className="news__politics-text fz24">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
                    </div>
                    <div className="news__politics-block-else">
                        <div className="news__politics-block">
                            <img src={imageNews} alt="news" />
                            <div className="date">05 СЕРПНЯ 11:00</div>
                            <div className="fz16 news__politics-text">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
                        </div>
                        <div className="news__politics-block">
                            <img src={imageNews} alt="news" />
                            <div className="date">05 СЕРПНЯ 11:00</div>
                            <div className="fz16 news__politics-text">ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                        </div>
                    </div>
                </div>
                <div className="news__politics-items">
                    <div className="news__politics-items-col">
                        <div className="fz16 title">НОВИНИ РОЗДІЛУ</div>
                        <div className="fz16 news__politics-item label"> <span>14:59 </span>До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини
                        </div>
                        <hr />
                        <div className="fz16 news__politics-item label"> <span>14:59 </span>Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф
                        </div>
                        <hr />
                        <div className="fz16 news__politics-item label"> <span>14:59 </span>До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини
                        </div>
                        <hr />
                        <div className="fz16 news__politics-item label"> <span>14:59 </span>"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано
                        </div>
                        <hr />
                        <div className="fz16 news__politics-item label"> <span>14:59 </span>"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців
                        </div>
                        <hr />
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
                
export default Politics;
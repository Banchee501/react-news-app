import { Link } from 'react-router-dom';

import imageNews from "../../../resources/img/image.jpg";

const Economics = () => {
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
                <div className="news__economics-block-main">
                    <img src={imageNews} alt="news" />
                    <div className="date">05 СЕРПНЯ 11:00</div>
                    <div className="fz24 news__economics-text">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
                </div>
                <div className="news__economics-block-else">
                    <div className="news__economics-block">
                        <img src={imageNews} alt="news" />
                        <div className="date">05 СЕРПНЯ 11:00</div>
                        <div className="fz16 news__economics-text">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
                    </div>
                    <div className="news__economics-block">
                        <img src={imageNews} alt="news" />
                        <div className="date">05 СЕРПНЯ 11:00</div>
                        <div className="fz16 news__economics-text">ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                    </div>
                </div>
            </div>
            <div className="news__economics-items">
                <div className="news__economics-items-col">
                    <div className="fz16 title">НОВИНИ РОЗДІЛУ</div>
                    <div className="fz16 news__economics-item label"> <span>14:59 </span>McDonald’s відновлює роботу ресторанів в Україні: де відкриються перші
                    </div>
                    <hr />
                    <div className="fz16 news__economics-item label"> <span>14:59 </span>Рада готує новий податковий сюрприз для обмінників: Гетманцев дав роз'яснення
                    </div>
                    <hr />
                    <div className="fz16 news__economics-item label"> <span>14:59 </span>Росія хоче перемкнути Запорізьку АЕС на Крим: експерт пояснив шанси і ризики
                    </div>
                    <hr />
                    <div className="fz16 news__economics-item label"> <span>14:59 </span>Як Ощадбанк під час війни безперебійно підтримує аграріїв
                    </div>
                    <hr />
                    <div className="fz16 news__economics-item label"> <span>14:59 </span>Переселенці зможуть отримувати виплати навіть у разі втрати паспорта: що відомо
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
};

export default Economics;
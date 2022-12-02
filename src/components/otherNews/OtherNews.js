import { Link } from 'react-router-dom';

import profilePhotoFirst from '../../resources/img/Avatar.png';
import profilePhotoSecond from '../../resources/img/Avatar-1.png';
import profilePhotoThird from '../../resources/img/Avatar-2.png';
import profilePhotoFourth from '../../resources/img/Avatar-3.png';
import imageNews from "../../resources/img/image.jpg";
import promoImg from '../../resources/img/imageph.jpg';
import imageLifestyle from "../../resources/img/imagenews.jpg";

import './otherNews.scss';

const Politics = () => {
    return (
        <div className="container">
            <div id="other" className="news">
                <div className="news__col">
                    <div className="news__col-head">
                        <div className='title title_fz24'>Колонки</div>
                        <Link to="/" className='fz14'>Всі колонки</Link>
                    </div>
                    <div className="news__col-items">
                        <div className="news__col-item">
                            <div className="news__col-item-info">
                                <img src={profilePhotoFirst} alt="avatar" />
                                <div className="news__col-item-profile">
                                    <div className="fz16 name">Юлія Стахівська</div>
                                    <div className="fz12 employment">ПИСЬМЕННИЦЯ</div>
                                </div>
                            </div>
                            <div className="news__col-item-body">
                                <div className="title">Жінок в часи небезпеки приваблюють сильні чоловіки</div>
                                <div className="date">04 СЕРПНЯ 15:15</div>
                            </div>
                        </div>
                        <hr />
                        <div className="news__col-item">
                            <div className="news__col-item-info">
                                <img src={profilePhotoSecond} alt="avatar" />
                                <div className="news__col-item-profile">
                                    <div className="fz16 name">Юрій Андрухович</div>
                                    <div className="fz12 employment">ПИСЬМЕННИК</div>
                                </div>
                            </div>
                            <div className="news__col-item-body">
                                <div className="title">Штайнмаєр - людина-формула</div>
                                <div className="date">04 СЕРПНЯ 15:15</div>
                            </div>
                        </div>
                        <hr />
                        <div className="news__col-item">
                            <div className="news__col-item-info">
                                <img src={profilePhotoThird} alt="avatar" />
                                <div className="news__col-item-profile">
                                    <div className="fz16 name">Анна Прокопенко</div>
                                    <div className="fz12 employment">ЖУРНАЛІСТКА</div>
                                </div>
                            </div>
                            <div className="news__col-item-body">
                                <div className="title">Щоденник війни. П'ятий тиждень довгого лютого</div>
                                <div className="date">04 СЕРПНЯ 15:15</div>
                            </div>
                        </div>
                        <hr />
                        <div className="news__col-item">
                            <div className="news__col-item-info">
                                <img src={profilePhotoFourth} alt="avatar" />
                                <div className="news__col-item-profile">
                                    <div className="fz16 name">Ірена Карпа</div>
                                    <div className="fz12 employment">ЖУРНАЛІСТКА</div>
                                </div>
                            </div>
                            <div className="news__col-item-body">
                                <div className="title">Не пощастило з географією. Небезпечний сусід</div>
                                <div className="date">04 СЕРПНЯ 15:15</div>
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
                <div className="news__promo">
                    <div className="news__promo-head">
                        <div className="title title_fz32">Промо</div>
                        <Link to="/" className='fz14'>Всі матеріали</Link>
                    </div>
                    <div className="news__promo-body">
                        <div className="img">
                            <img src={promoImg} alt="promo" />
                        </div>
                        <div className="body">
                            <div className="date label">05 СЕРПНЯ 11:00</div>
                            <div className="fz32 news__promo-text">Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів</div>
                        </div>
                    </div>
                    <div className="news__promo-list">
                        <div className="news__promo-block">
                            <div className="date">05 СЕРПНЯ 11:00</div>
                            <div className="news__politics-text">Замовте нові флагмани Samsung Galaxy Fold4|Flip4 і отримуйте подарунки</div>
                        </div>
                        <div className="news__promo-block">
                            <div className="date">05 СЕРПНЯ 11:00</div>
                            <div className="news__politics-text">Зустрічай нову серію смартфонів та навушників від Samsung</div>
                        </div>
                        <div className="news__promo-block">
                            <div className="date">05 СЕРПНЯ 11:00</div>
                            <div className="news__politics-text">Мобільний телефон Xiaomi Redmi 9C 3/64GB</div>
                        </div>
                        <div className="gradient"></div>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_1_3551)">
                                <rect x="8" y="2" width="48" height="48" rx="24" fill="white" fill-opacity="0.16" shape-rendering="crispEdges" />
                                <g clip-path="url(#clip0_1_3551)">
                                    <path d="M29.6666 34C29.5789 34.0005 29.4919 33.9837 29.4107 33.9506C29.3295 33.9174 29.2556 33.8685 29.1933 33.8067C29.1308 33.7447 29.0812 33.671 29.0474 33.5898C29.0135 33.5085 28.9961 33.4214 28.9961 33.3334C28.9961 33.2454 29.0135 33.1582 29.0474 33.077C29.0812 32.9958 29.1308 32.922 29.1933 32.86L34.64 27.4134C35.0145 27.0384 35.2249 26.53 35.2249 26C35.2249 25.47 35.0145 24.9617 34.64 24.5867L29.1933 19.14C29.0678 19.0145 28.9972 18.8442 28.9972 18.6667C28.9972 18.4892 29.0678 18.3189 29.1933 18.1934C29.3188 18.0678 29.4891 17.9973 29.6666 17.9973C29.8442 17.9973 30.0144 18.0678 30.14 18.1934L35.5866 23.64C35.897 23.9497 36.1433 24.3175 36.3114 24.7225C36.4794 25.1275 36.5659 25.5616 36.5659 26C36.5659 26.4385 36.4794 26.8726 36.3114 27.2776C36.1433 27.6826 35.897 28.0504 35.5866 28.36L30.14 33.8067C30.0777 33.8685 30.0038 33.9174 29.9226 33.9506C29.8413 33.9837 29.7544 34.0005 29.6666 34Z" fill="#2D2D2D" />
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_1_3551" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="6" />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3551" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3551" result="shape" />
                                </filter>
                                <clipPath id="clip0_1_3551">
                                    <rect width="16" height="16" fill="white" transform="translate(25 18)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
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
                            <div className="news__lifestyle-block-main">
                                <img src={imageLifestyle} alt="news" />
                                <div className="date">05 СЕРПНЯ 11:00</div>
                                <div className="fz24 news__lifestyle-text">Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі</div>
                            </div>
                            <div className="news__lifestyle-block-else">
                                <div className="news__lifestyle-block">
                                    <img src={imageNews} alt="news" />
                                    <div className="date">05 СЕРПНЯ 11:00</div>
                                    <div className="fz16 news__lifestyle-text">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
                                </div>
                                <div className="news__lifestyle-block">
                                    <img src={imageNews} alt="news" />
                                    <div className="date">05 СЕРПНЯ 11:00</div>
                                    <div className="fz16 news__lifestyle-text">ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                                </div>
                            </div>
                        </div>
                        <div className="news__lifestyle-items">
                            <div className="news__lifestyle-items-col">
                                <div className="fz16 title">НОВИНИ РОЗДІЛУ</div>
                                <div className="fz16 news__lifestyle-item label"> <span>14:59 </span>Що подивитися ввечері: топ-5 українських фільмів
                                </div>
                                <hr />
                                <div className="fz16 news__lifestyle-item label"> <span>14:59 </span>Яке свято відзначають 9 серпня: прикмети, традиції та заборони цього дня
                                </div>
                                <hr />
                                <div className="fz16 news__lifestyle-item label"> <span>14:59 </span>Вакарчук виклав неймовірне відео виконання гімну України в Іспанії
                                </div>
                                <hr />
                                <div className="fz16 news__lifestyle-item label"> <span>14:59 </span>Топ-7 повсякденних речей, які не мінялися протягом століть
                                </div>
                                <hr />
                                <div className="fz16 news__lifestyle-item label"> <span>14:59 </span>Арестович розповів про шалений заробіток, трьох дружин і дітей. Відео
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
            </div>
        </div>
    )
}

export default Politics;
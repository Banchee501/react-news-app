import { Link } from 'react-router-dom';

import './editorialChoice.scss'

import newsImage from "../../resources/img/image.jpg";

const NewsFeed = () => {
    return (
        <div className="container">
            <div className='news'>
                <div className='news__all'>
                    <div className="news__all-list">
                        <div className="news__all-head">
                            <div className='title title_fz24'>Всі новини</div>
                            <Link to="/" className='fz14'>Архів</Link>
                        </div>
                        <ul className='fz16 news__all-sort'>
                            <li className='active'>Всі</li>
                            <li>Новини</li>
                            <li>Статті</li>
                        </ul>
                        <div className="news__all-items">
                            <div className="fz16 news__all-item label"> <span>14:59 </span>"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано
                            </div>
                            <div className="fz16 news__all-item label label__photo"><span>14:59 </span>До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                            <div className="fz16 news__all-item label"><span>14:59 </span>Прем'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене</div>
                            <div className="fz16 news__all-item label label__quickly"><span>14:59 </span>До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                            <div className="fz16 news__all-item label"><span>14:59 </span>Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф
                                14:59</div>
                            <div className="fz16 news__all-item label"><span>14:59 </span>До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                            <div className="fz16 news__all-item label"><span>14:59 </span>"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано</div>
                            <div className="fz16 news__all-item label"><span>14:59 </span>Дружина Зеленського чесно зізналася, чи боїться смерті</div>
                            <div className="fz16 news__all-item label"><span>14:59 </span>"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців</div>
                        </div>
                    </div>
                    <button className='fz16 load__more'>
                        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_5734_287)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3.229C18.2876 3.229 18.5208 3.46219 18.5208 3.74984V7.9165C18.5208 8.20415 18.2876 8.43734 18 8.43734H13.8333C13.5457 8.43734 13.3125 8.20415 13.3125 7.9165C13.3125 7.62886 13.5457 7.39567 13.8333 7.39567H17.4792V3.74984C17.4792 3.46219 17.7124 3.229 18 3.229Z" fill="#182840" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4633 3.56413C10.1733 3.31002 8.83617 3.43996 7.62121 3.93724C6.40631 4.43451 5.36882 5.27647 4.6393 6.3557C3.90984 7.43487 3.52085 8.70308 3.52085 9.99992C3.52085 11.2968 3.90984 12.565 4.6393 13.6441C5.36882 14.7234 6.40631 15.5653 7.62121 16.0626C8.83617 16.5599 10.1733 16.6898 11.4633 16.4357C12.7533 16.1816 13.9372 15.5551 14.8657 14.6363C15.0702 14.434 15.3999 14.4357 15.6023 14.6402C15.8046 14.8447 15.8029 15.1744 15.5984 15.3768C14.5235 16.4404 13.1544 17.1643 11.6646 17.4577C10.1749 17.7512 8.63051 17.6013 7.22663 17.0266C5.82269 16.452 4.62172 15.4782 3.7763 14.2275C2.93084 12.9767 2.47919 11.5055 2.47919 9.99992C2.47919 8.49437 2.93084 7.02313 3.7763 5.77236C4.62172 4.52165 5.82269 3.54784 7.22663 2.9732C8.63051 2.39859 10.1749 2.24865 11.6646 2.5421C13.1543 2.83553 14.5232 3.55928 15.598 4.62271C15.5981 4.62283 15.5979 4.62259 15.598 4.62271L18.3657 7.35108C18.5705 7.55302 18.5729 7.88278 18.3709 8.08763C18.169 8.29247 17.8392 8.29483 17.6344 8.09289L14.8657 5.36351C13.9372 4.44474 12.7533 3.81823 11.4633 3.56413Z" fill="#182840" />
                            </g>
                            <defs>
                                <clipPath id="clip0_5734_287">
                                    <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        Завантажити ще</button>
                </div>
                <div className="news__block">
                    <div className='news__choice'>
                        <div className='title title_fz32'>Вибір редакції</div>
                        <div className='news__choice-items'>
                            <div className="news__choice-item">
                                <img src={newsImage} alt="news" />
                                <div className='fz12 date'>05 серпня 11:00</div>
                                <div className="fz16 content">
                                    Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.
                                </div>
                            </div>
                            <div className="news__choice-item">
                                <img src={newsImage} alt="news" />
                                <div className='fz12 date'>05 серпня 11:00</div>
                                <div className="fz16 content">
                                    Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.
                                </div>
                            </div>
                            <div className="news__choice-item">
                                <img src={newsImage} alt="news" />
                                <div className='fz12 date'>05 серпня 11:00</div>
                                <div className="fz16 content">
                                    Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.
                                </div>
                            </div>
                            <div className="news__choice-item">
                                <img src={newsImage} alt="news" />
                                <div className='fz12 date'>05 серпня 11:00</div>
                                <div className="fz16 content">
                                    У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.
                                </div>
                            </div>
                            <div className="news__choice-item">
                                <img src={newsImage} alt="news" />
                                <div className='fz12 date'>05 серпня 11:00</div>
                                <div className="fz16 content">
                                    ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи.
                                </div>
                            </div>
                            <div className="news__choice-item">
                                <img src={newsImage} alt="news" />
                                <div className='fz12 date'>05 серпня 11:00</div>
                                <div className="fz16 content">
                                    Білорусь несподівано вирішила провести військові навчання з Казахстаном: що відомо.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news__regions">
                        <div className="news__regions-head">
                            <div className="title title_fz32">Регіони</div>
                            <Link to="/" className='fz14'>Всі новини розділу</Link>
                        </div>
                        <div className="news__cities">
                            <div className="news__city">
                                <div className="news__city_col">
                                    <div className="title title_fz24 news__city-name">Київ</div>
                                    <div className="news__city-data">
                                        <div className="fz12 data">05 серпня</div>
                                        <div className="news__city-grid">
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети</div>
                                        </div>
                                    </div>
                                    <div className="news__city-data">
                                        <div className="fz12 data">04 серпня</div>
                                        <div className="news__city-grid">
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>КМДА контролюватиме якість підготовки до опалювального сезону</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>Дружина Зеленського чесно зізналася, чи боїться смерті</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="fz16 more_news">Більше новин
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0833 15.9999C10.0833 15.7698 10.2699 15.5833 10.5 15.5833H21.5C21.7301 15.5833 21.9167 15.7698 21.9167 15.9999C21.9167 16.23 21.7301 16.4166 21.5 16.4166H10.5C10.2699 16.4166 10.0833 16.23 10.0833 15.9999Z" fill="#182840" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7054 11.2053C16.8681 11.0426 17.1319 11.0426 17.2946 11.2053L21.7946 15.7053C21.9573 15.868 21.9573 16.1318 21.7946 16.2945L17.2946 20.7945C17.1319 20.9573 16.8681 20.9573 16.7054 20.7945C16.5426 20.6318 16.5426 20.368 16.7054 20.2053L20.9107 15.9999L16.7054 11.7945C16.5426 11.6318 16.5426 11.368 16.7054 11.2053Z" fill="#182840" />
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#979EA9" />
                                    </svg>
                                </button>
                            </div>
                            <div className="news__city">
                                <div className="news__city_col">
                                    <div className="title title_fz24 news__city-name">Одеса</div>
                                    <div className="news__city-data">
                                        <div className="fz12 data">05 серпня</div>
                                        <div className="news__city-grid">
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40 млн гривень</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>На Одещині рибалки незаконно наловили раків на 8 млн гривень</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>Екіпаж турецького судна вперше з початку війни повернувся з Одеси додому</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>Дружина Зеленського чесно зізналася, чи боїться смерті</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40 млн гривень</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="fz16 more_news">Більше новин
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0833 15.9999C10.0833 15.7698 10.2699 15.5833 10.5 15.5833H21.5C21.7301 15.5833 21.9167 15.7698 21.9167 15.9999C21.9167 16.23 21.7301 16.4166 21.5 16.4166H10.5C10.2699 16.4166 10.0833 16.23 10.0833 15.9999Z" fill="#182840" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7054 11.2053C16.8681 11.0426 17.1319 11.0426 17.2946 11.2053L21.7946 15.7053C21.9573 15.868 21.9573 16.1318 21.7946 16.2945L17.2946 20.7945C17.1319 20.9573 16.8681 20.9573 16.7054 20.7945C16.5426 20.6318 16.5426 20.368 16.7054 20.2053L20.9107 15.9999L16.7054 11.7945C16.5426 11.6318 16.5426 11.368 16.7054 11.2053Z" fill="#182840" />
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#979EA9" />
                                    </svg>
                                </button>
                            </div>
                            <div className="news__city">
                                <div className="news__city_col">
                                    <div className="title title_fz24 news__city-name">Харків</div>
                                    <div className="news__city-data">
                                        <div className="fz12 data">05 серпня</div>
                                        <div className="news__city-grid">
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>Обстріл Павлова Поля у Харкові: уламки прилетіли до квартир, троє людей поранено</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>Дружина Зеленського чесно зізналася, чи боїться смерті</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>Обстріл Павлова Поля у Харкові: уламки прилетіли до квартир, троє людей поранено</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>ЗСУ пересунули лінію фронту на Харківщині: окупанти тікали, кидаючи техніку</div>
                                            <div className="fz16 news__city-data-content"> <span>14:59 </span>На Харківщині, попри щоденні обстріли, тривають жнива: скільки врожаю зібрали</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="fz16 more_news">Більше новин
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
        </div>
    )
}

export default NewsFeed;
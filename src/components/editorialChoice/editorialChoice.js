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
                            <div className='fz24'>Всі новини</div>
                            <Link to="/" className='fz14'>Архів</Link>
                        </div>
                        <ul className='fz16 news__all-sort'>
                            <li>Всі</li>
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
                    <button className='fz16 load__more'><i class="fa-thin fa-arrow-rotate-right"></i>Завантажити ще</button>
                </div>
                <div className="news__block">
                    <div className='news__choice'>
                        <div className='fz32'>Вибір редакції</div>
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
                                    Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.
                                </div>
                            </div>
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
                                    Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.
                                </div>
                            </div>
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
                                    Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news__regions">
                        <div className="news__regions-head">
                            <div className="fz32">Регіони</div>
                            <Link to="/" className='fz14'>Всі новини розділу</Link>
                        </div>
                        <div className="news__cities">
                            <div className="news__city">
                                <div className="news__city_col">
                                    <div className="fz24 news__city-name">Київ</div>
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
                                <button className="fz16 more_news">
                                    Більше новин <i class="fa-thin fa-circle-arrow-right"></i></button>
                            </div>
                            <div className="news__city">
                                <div className="fz24 news__city-name">Одеса</div>
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
                                <button className="fz16 more_news">Більше новин <i class="fa-thin fa-circle-arrow-right"></i></button>
                            </div>
                            <div className="news__city">
                                <div className="fz24 news__city-name">Харків</div>
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
                                <button className="fz16 more_news">Більше новин <i class="fa-thin fa-circle-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed;
import { Link } from 'react-router-dom';

import './footer.scss';
import arrow from '../../resources/icons/footer/dropdownArrow.svg';

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="footer__main">
                    <div className="footer__news">
                        <div className="footer__news-col">
                            <div className="footer__news-group">
                                <div className="footer__news-group-title">
                                    <Link to="/allnews">Всі новини</Link>
                                </div>
                            </div>
                            <hr />
                            <div className="footer__news-group">
                                <div className="footer__news-group-title">
                                    <Link to="/covid">
                                        COVID-19
                                    </Link>
                                </div>
                            </div>
                            <hr />
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Війна
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">

                                </div>
                            </div>
                            <hr />
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Політика
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">
                                    <ul className="footer__news-sub">
                                        <li className="footer__news-sub-item">
                                            <Link to="/ukraine">Україна</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/world">Світ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="footer__news-col">
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Здоров'я
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">
                                    <ul className="footer__news-sub">
                                        <li className="footer__news-sub-item">
                                            <Link to="/diet">Дієта</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/beauty">Краса</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/sex">Секс</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/psychology">Психологія</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/medicine">Медицина</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Події
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">
                                    <ul className="footer__news-sub">
                                        <li className="footer__news-sub-item">
                                            <Link to="/dtp">ДТП</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/catastrophe">Катастрофи</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/crime">Кримінал</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="footer__news-col">
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Лайфстайл
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">
                                    <ul className="footer__news-sub">
                                        <li className="footer__news-sub-item">
                                            <Link to="/lifehitory">Історії з життя</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/travels">Подорожі</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/kitchen">Кухня</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/showbusiness">Шоубізнес</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/fashion">Мода та стиль</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/horoscope">Зірковий гороскоп</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Суспільство
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">
                                    <ul className="footer__news-sub">
                                        <li className="footer__news-sub-item">
                                            <Link to="/healthcare">Охорона здоров'я</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/security">Безпека</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/ecology">Екологія</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/religion">Релігія</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="footer__news-col">
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Регіони
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">
                                    <ul className="footer__news-sub">
                                        <li className="footer__news-sub-item">
                                            <Link to="/kyiv">Київ</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/odesa">Одеса</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/kharkiv">Харків</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/lviv">Львів</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Техно
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">
                                    <ul className="footer__news-sub">
                                        <li className="footer__news-sub-item">
                                            <Link to="/science">Наука</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/gadgets">Гаджети</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/it">ІТ</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/space">Космос</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="footer__news-col">
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Економіка
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">
                                    <ul className="footer__news-sub">
                                        <li className="footer__news-sub-item">
                                            <Link to="/finances">Фінанси</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/communal">Комунальні послуги</Link>
                                        </li>
                                        <li className="footer__news-sub-item">
                                            <Link to="/business">Бізнес</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="footer__news-group">
                                <div className="footer__news-group-title dropdown">
                                    Спорт
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className="dropdown-content">

                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="footer__news-col about">
                            <div className="footer__news-group">
                                <div className="footer__news-group-title">
                                    <Link to="/about">ПРО НАС</Link>
                                </div>
                            </div>
                            <div className="footer__news-group">
                                <div className="footer__news-group-title">
                                    <Link to="/contacts">КОНТАКТИ</Link>
                                </div>
                            </div>
                            <div className="footer__news-group">
                                <div className="footer__news-group-title">
                                    <Link to="/structure">СТРУКТУРА ВЛАСНОСТІ</Link>
                                </div>
                            </div>
                            <div className="footer__news-group">
                                <div className="footer__news-group-title">
                                    <Link to="/team">КОМАНДА</Link>
                                </div>
                            </div>
                            <div className="footer__news-group">
                                <div className="footer__news-group-title">
                                    <Link to="/media">МЕДІАКІТ</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer__social">
                    <div className="footer__social-title">Новини у зручному форматі</div>
                    <div className="footer__social-wrapper">
                        <div className="footer__social-col">
                            <div className="footer__social-col-first">
                                <Link to="https://www.youtube.com/">
                                    <div className="footer__social-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.6305 15.84C20.4293 16.8666 19.5745 17.649 18.5185 17.7957C16.8589 18.04 14.0929 18.3333 10.9748 18.3333C7.90719 18.3333 5.14115 18.04 3.4311 17.7957C2.3751 17.649 1.51985 16.8666 1.3191 15.84C1.1179 14.7157 0.916687 13.0533 0.916687 11C0.916687 8.94663 1.1179 7.28425 1.3191 6.15996C1.52031 5.13329 2.3751 4.35092 3.4311 4.20425C5.09073 3.95996 7.85677 3.66663 10.9748 3.66663C14.0929 3.66663 16.8085 3.95996 18.5185 4.20425C19.5745 4.35092 20.4298 5.13329 20.6305 6.15996C20.8317 7.28425 21.0834 8.94663 21.0834 11C21.0329 13.0533 20.8317 14.7157 20.6305 15.84Z" fill="url(#paint0_linear_1_3680)" />
                                            <path opacity="0.05" d="M14.828 10.2849L9.5865 6.79061C9.32204 6.61416 8.98425 6.59766 8.70421 6.74799C8.42417 6.89786 8.25 7.18799 8.25 7.50561V14.4943C8.25 14.8119 8.42417 15.1025 8.70421 15.2524C8.83162 15.3207 8.9705 15.3541 9.10937 15.3541C9.27621 15.3541 9.44213 15.3055 9.58604 15.2097L14.8275 11.7154C15.0673 11.5554 15.2102 11.2882 15.2102 11.0004C15.2107 10.7121 15.0673 10.4449 14.828 10.2849Z" fill="black" />
                                            <path opacity="0.07" d="M9.47881 6.98366L14.4242 10.2809C14.74 10.5078 14.9527 10.7108 14.9527 10.9744C14.9527 11.2379 14.85 11.4217 14.625 11.5858C14.4549 11.7095 9.56269 14.9609 9.56269 14.9609C9.14973 15.2378 8.47919 15.1791 8.47919 14.2739V7.67436C8.47919 6.75541 9.20519 6.80124 9.47881 6.98366Z" fill="black" />
                                            <path d="M8.70831 14.4686V7.53174C8.70831 7.1912 9.08781 6.9877 9.37152 7.17699L14.5745 10.6457C14.828 10.8143 14.828 11.1865 14.5745 11.3556L9.37152 14.8243C9.08781 15.0127 8.70831 14.8096 8.70831 14.4686Z" fill="white" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1_3680" x1="4.49902" y1="4.52417" x2="18.9044" y2="18.9296" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#F44F5A" />
                                                    <stop offset="0.443" stopColor="#EE3D4A" />
                                                    <stop offset="1" stopColor="#E52030" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    YouTube
                                </Link>
                                <Link to="https://web.telegram.org/k/">
                                    <div className="footer__social-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 1.83337C8.56883 1.83337 6.23725 2.79914 4.51817 4.51823C2.79908 6.23731 1.83331 8.56889 1.83331 11C1.83331 13.4312 2.79908 15.7628 4.51817 17.4819C6.23725 19.2009 8.56883 20.1667 11 20.1667C13.4311 20.1667 15.7627 19.2009 17.4818 17.4819C19.2009 15.7628 20.1666 13.4312 20.1666 11C20.1666 8.56889 19.2009 6.23731 17.4818 4.51823C15.7627 2.79914 13.4311 1.83337 11 1.83337Z" fill="#29B6F6" />
                                            <path d="M15.5604 6.87496L13.8435 15.641C13.8435 15.641 13.7697 16.0416 13.2729 16.0416C13.0089 16.0416 12.8727 15.916 12.8727 15.916L9.15381 12.8301L7.33423 11.913L4.99902 11.2919C4.99902 11.2919 4.58331 11.1718 4.58331 10.8281C4.58331 10.5416 5.01094 10.405 5.01094 10.405L14.7808 6.52388C14.7803 6.52342 15.0791 6.41617 15.2969 6.41663C15.4307 6.41663 15.5833 6.47392 15.5833 6.64579C15.5833 6.76038 15.5604 6.87496 15.5604 6.87496Z" fill="white" />
                                            <path d="M10.5417 13.9815L8.97142 15.5279C8.97142 15.5279 8.90313 15.5806 8.81192 15.5829C8.7803 15.5838 8.74638 15.5788 8.71155 15.5632L9.15338 12.8292L10.5417 13.9815Z" fill="#B0BEC5" />
                                            <path d="M13.7028 8.33978C13.6253 8.23895 13.4823 8.22062 13.3815 8.29716L7.33331 11.9166C7.33331 11.9166 8.29856 14.6171 8.44569 15.0846C8.59327 15.5526 8.71152 15.5636 8.71152 15.5636L9.15335 12.8296L13.6597 8.66062C13.7605 8.58408 13.7793 8.44062 13.7028 8.33978Z" fill="#CFD8DC" />
                                        </svg>
                                    </div>
                                    Telegram
                                </Link>
                                <Link to="https://www.instagram.com/">
                                    <div className="footer__social-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5911 19.2454L6.42447 19.2541C4.4078 19.2559 2.75642 17.6077 2.75413 15.5911L2.74542 6.4244C2.74359 4.40774 4.39176 2.75636 6.40842 2.75407L15.5751 2.74536C17.5918 2.74353 19.2431 4.3917 19.2454 6.40836L19.2541 15.575C19.2564 17.5922 17.6078 19.2435 15.5911 19.2454Z" fill="url(#paint0_radial_1_3694)" />
                                            <path d="M15.5911 19.2454L6.42447 19.2541C4.4078 19.2559 2.75642 17.6077 2.75413 15.5911L2.74542 6.4244C2.74359 4.40774 4.39176 2.75636 6.40842 2.75407L15.5751 2.74536C17.5918 2.74353 19.2431 4.3917 19.2454 6.40836L19.2541 15.575C19.2564 17.5922 17.6078 19.2435 15.5911 19.2454Z" fill="url(#paint1_radial_1_3694)" />
                                            <path d="M11 14.2083C9.23128 14.2083 7.79166 12.7691 7.79166 11C7.79166 9.23079 9.23128 7.79163 11 7.79163C12.7687 7.79163 14.2083 9.23079 14.2083 11C14.2083 12.7691 12.7687 14.2083 11 14.2083ZM11 8.70829C9.73636 8.70829 8.70832 9.73633 8.70832 11C8.70832 12.2636 9.73636 13.2916 11 13.2916C12.2636 13.2916 13.2917 12.2636 13.2917 11C13.2917 9.73633 12.2636 8.70829 11 8.70829Z" fill="white" />
                                            <path d="M14.4375 8.25C14.8172 8.25 15.125 7.9422 15.125 7.5625C15.125 7.1828 14.8172 6.875 14.4375 6.875C14.0578 6.875 13.75 7.1828 13.75 7.5625C13.75 7.9422 14.0578 8.25 14.4375 8.25Z" fill="white" />
                                            <path d="M13.75 16.9583H8.24999C6.48128 16.9583 5.04166 15.5191 5.04166 13.75V8.24996C5.04166 6.48079 6.48128 5.04163 8.24999 5.04163H13.75C15.5187 5.04163 16.9583 6.48079 16.9583 8.24996V13.75C16.9583 15.5191 15.5187 16.9583 13.75 16.9583ZM8.24999 5.95829C6.98636 5.95829 5.95832 6.98633 5.95832 8.24996V13.75C5.95832 15.0136 6.98636 16.0416 8.24999 16.0416H13.75C15.0136 16.0416 16.0417 15.0136 16.0417 13.75V8.24996C16.0417 6.98633 15.0136 5.95829 13.75 5.95829H8.24999Z" fill="white" />
                                            <defs>
                                                <radialGradient id="paint0_radial_1_3694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.88251 19.266) scale(20.5787)">
                                                    <stop stopColor="#FFDD55" />
                                                    <stop offset="0.328" stopColor="#FF543F" />
                                                    <stop offset="0.348" stopColor="#FC5245" />
                                                    <stop offset="0.504" stopColor="#E64771" />
                                                    <stop offset="0.643" stopColor="#D53E91" />
                                                    <stop offset="0.761" stopColor="#CC39A4" />
                                                    <stop offset="0.841" stopColor="#C837AB" />
                                                </radialGradient>
                                                <radialGradient id="paint1_radial_1_3694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.40192 2.53925) scale(13.6643 9.10452)">
                                                    <stop stopColor="#4168C9" />
                                                    <stop offset="0.999" stopColor="#4168C9" stopOpacity="0" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    Instagram
                                </Link>
                            </div>
                            <div className="footer__social-col-second">
                                <Link to="https://uk-ua.facebook.com/">
                                    <div className="footer__social-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 1.83337C5.93726 1.83337 1.83334 5.93729 1.83334 11C1.83334 16.0628 5.93726 20.1667 11 20.1667C16.0628 20.1667 20.1667 16.0628 20.1667 11C20.1667 5.93729 16.0628 1.83337 11 1.83337Z" fill="url(#paint0_linear_1_3702)" />
                                            <path d="M12.2407 13.4296H14.613L14.9857 11.0197H12.2407V9.70246C12.2407 8.70146 12.568 7.81367 13.5043 7.81367H15.009V5.71083C14.7446 5.67508 14.1854 5.59717 13.129 5.59717C10.9225 5.59717 9.62913 6.76225 9.62913 9.41692V11.0202H7.36084V13.4301H9.62867V20.0539C10.0778 20.1208 10.533 20.1667 11 20.1667C11.4221 20.1667 11.8342 20.1282 12.2407 20.0732V13.4296Z" fill="white" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1_3702" x1="4.58013" y1="4.58017" x2="18.6152" y2="18.6152" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#2AA4F4" />
                                                    <stop offset="1" stopColor="#007AD9" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    Facebook
                                </Link>
                                <Link to="https://www.tiktok.com/uk-UA/">
                                    <div className="footer__social-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.3352 19.2358L3.68088 19.25C3.17717 19.2505 2.76467 18.8389 2.76421 18.3352L2.75 3.68088C2.74954 3.17717 3.16113 2.76467 3.66483 2.76421L18.3191 2.75C18.8228 2.74954 19.2353 3.16113 19.2358 3.66483L19.25 18.3191C19.2505 18.8228 18.8389 19.2353 18.3352 19.2358Z" fill="url(#paint0_linear_1_3707)" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.387 9.44492C14.1093 9.96101 14.9944 10.2644 15.95 10.2644V8.42605C15.769 8.42605 15.5888 8.40726 15.4119 8.36967V9.81663C14.4563 9.81663 13.5717 9.51276 12.8489 8.99713V12.7481C12.8489 14.6245 11.3268 16.1458 9.44946 16.1458C8.74913 16.1458 8.09784 15.934 7.55701 15.571C8.17438 16.2017 9.03513 16.5931 9.98755 16.5931C11.8649 16.5931 13.387 15.0719 13.387 13.1955V9.44492ZM14.0511 7.59051C13.6822 7.18763 13.4397 6.66651 13.387 6.09038V5.85388H12.8769C13.0052 6.58584 13.4434 7.21147 14.0511 7.59051ZM8.74455 14.1314C8.5383 13.861 8.42692 13.5305 8.42738 13.1904C8.42738 12.332 9.12359 11.6362 9.98251 11.6362C10.1425 11.6362 10.3015 11.6605 10.4541 11.7091V9.82992C10.2758 9.80563 10.0962 9.79509 9.91605 9.79876V11.2613C9.76342 11.2127 9.60438 11.1884 9.44396 11.1884C8.58505 11.1884 7.88884 11.8842 7.88884 12.7426C7.8893 13.3499 8.23717 13.8756 8.74455 14.1314Z" fill="#EC407A" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.8489 8.99713C13.5713 9.51321 14.4563 9.81663 15.4119 9.81663V8.36967C14.8784 8.25601 14.4063 7.97734 14.0511 7.59005C13.4434 7.21101 13.0057 6.58584 12.8773 5.85388H11.5376V13.1955C11.5344 14.0512 10.8396 14.7442 9.9825 14.7442C9.47742 14.7442 9.02871 14.5035 8.74455 14.1309C8.23717 13.8752 7.8893 13.3495 7.8893 12.7426C7.8893 11.8842 8.5855 11.1884 9.44442 11.1884C9.60896 11.1884 9.76755 11.2141 9.9165 11.2613V9.79921C8.07217 9.83726 6.589 11.3433 6.589 13.1959C6.589 14.1208 6.95842 14.9591 7.55792 15.5715C8.09875 15.9345 8.75005 16.1462 9.45038 16.1462C11.3277 16.1462 12.8498 14.625 12.8498 12.7486L12.8489 8.99713Z" fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.4119 8.37005V7.97863C14.9307 7.97955 14.4595 7.8448 14.0511 7.58996C14.4123 7.98551 14.888 8.25821 15.4119 8.37005ZM12.8769 5.8538C12.8645 5.78367 12.8553 5.71355 12.8489 5.64251V5.40601H10.9991V12.748C10.9963 13.6038 10.301 14.2968 9.44396 14.2968C9.19234 14.2968 8.95492 14.2372 8.74454 14.1308C9.02871 14.5035 9.47742 14.7441 9.9825 14.7441C10.8396 14.7441 11.5344 14.0511 11.5376 13.1954V5.8538H12.8769ZM9.91604 9.79913V9.38251C9.76159 9.36142 9.60575 9.35088 9.44946 9.35088C7.57167 9.35088 6.05 10.8721 6.05 12.7485C6.05 13.925 6.64813 14.9618 7.557 15.5714C6.9575 14.959 6.58809 14.1208 6.58809 13.1958C6.58809 11.3433 8.07171 9.83717 9.91604 9.79913Z" fill="#81D4FA" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1_3707" x1="10.9895" y1="2.82288" x2="10.9895" y2="19.2711" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#4C4C4C" />
                                                    <stop offset="1" stopColor="#343434" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    TikTok
                                </Link>
                                <Link to="https://news.google.com/home?hl=ru&gl=UA&ceid=UA:ru">
                                    <div className="footer__social-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.9347 13.9819C16.9347 14.2664 16.6999 14.4994 16.4128 14.4994H5.36673C5.0797 14.4994 4.84483 14.2664 4.84483 13.9819V3.15755C4.84483 2.87305 5.0797 2.64001 5.36673 2.64001H16.4132C16.7002 2.64001 16.9351 2.87305 16.9351 3.15755V13.9819H16.9347Z" fill="#0C9D58" />
                                            <path opacity="0.2" d="M16.9347 5.4227L12.7948 4.8905L16.9347 5.99982V5.4227Z" fill="#004D40" />
                                            <path opacity="0.2" d="M11.0895 3.20432L4.82015 6.0004L11.7492 3.48134V3.47448C11.6273 3.21368 11.3306 3.09202 11.0895 3.20432Z" fill="#004D40" />
                                            <path opacity="0.2" d="M16.4132 2.64001H5.36673C5.0797 2.64001 4.84483 2.87305 4.84483 3.15755V3.2736C4.84483 2.9891 5.0797 2.75606 5.36673 2.75606H16.4132C16.7002 2.75606 16.9351 2.9891 16.9351 3.2736V3.15755C16.9347 2.87305 16.7002 2.64001 16.4132 2.64001Z" fill="white" />
                                            <path d="M7.52556 13.6493C7.45091 13.9272 7.59989 14.2108 7.85663 14.2794L18.0879 17.0278C18.3446 17.0964 18.6157 16.9251 18.69 16.6472L21.1003 7.66281C21.1749 7.38485 21.0259 7.10128 20.7692 7.03265L10.538 4.28431C10.2812 4.21568 10.0101 4.38694 9.9358 4.66489L7.52556 13.6493Z" fill="#EA4335" />
                                            <path opacity="0.2" d="M18.795 10.8698L19.3331 14.135L18.795 16.1418V10.8698Z" fill="#3E2723" />
                                            <path opacity="0.2" d="M12.8433 5.02368L13.3255 5.15314L13.6247 7.16839L12.8433 5.02368Z" fill="#3E2723" />
                                            <path opacity="0.2" d="M20.7695 7.03265L10.5383 4.28431C10.2815 4.21568 10.0104 4.38694 9.9361 4.66489L7.52586 13.6493C7.5218 13.6643 7.52086 13.6795 7.51805 13.6945L9.91017 4.77814C9.98482 4.50018 10.2559 4.32892 10.5123 4.39755L20.7436 7.14589C20.9863 7.21078 21.1303 7.46815 21.0825 7.73113L21.1009 7.66281C21.1752 7.38485 21.0262 7.10128 20.7695 7.03265Z" fill="white" />
                                            <path d="M15.5833 12.5428C15.6817 12.8132 15.558 13.1087 15.3084 13.1994L4.5122 17.1242C4.26233 17.215 3.97749 17.068 3.87911 16.7976L0.693984 8.05712C0.5956 7.78665 0.719282 7.49123 0.968833 7.40045L11.7651 3.47571C12.0149 3.38493 12.2998 3.53186 12.3982 3.80233L15.5833 12.5428Z" fill="#FFC107" />
                                            <path opacity="0.2" d="M0.734906 8.16731C0.636523 7.89684 0.760205 7.60142 1.00976 7.51064L11.806 3.58559C12.0531 3.49574 12.3338 3.63893 12.4353 3.90378L12.3982 3.80208C12.2995 3.53162 12.0146 3.38468 11.7651 3.47546L0.96884 7.40052C0.718977 7.4913 0.595295 7.78672 0.693991 8.05719L3.87911 16.7976C3.88005 16.8004 3.88193 16.8029 3.88317 16.806L0.734906 8.16731Z" fill="white" />
                                            <path d="M18.795 18.8374C18.795 19.1247 18.5595 19.36 18.2718 19.36H3.50808C3.22043 19.36 2.98493 19.1247 2.98493 18.8374V7.69086C2.98493 7.40355 3.22043 7.16833 3.50808 7.16833H18.2718C18.5595 7.16833 18.795 7.40355 18.795 7.69086V18.8374Z" fill="#4285F4" />
                                            <path d="M15.9759 11.5807H11.5583V10.4196H15.9759C16.1043 10.4196 16.2083 10.5234 16.2083 10.6517V11.3483C16.2083 11.4765 16.1043 11.5807 15.9759 11.5807ZM15.9759 15.9927H11.5583V14.8316H15.9759C16.1043 14.8316 16.2083 14.9355 16.2083 15.0637V15.7603C16.2083 15.8888 16.1043 15.9927 15.9759 15.9927ZM16.6733 13.7865H11.5583V12.6254H16.6733C16.8017 12.6254 16.9057 12.7293 16.9057 12.8575V13.5541C16.9057 13.6826 16.8017 13.7865 16.6733 13.7865Z" fill="white" />
                                            <path opacity="0.2" d="M18.2718 19.244H3.50808C3.22043 19.244 2.98493 19.0087 2.98493 18.7214V18.8375C2.98493 19.1248 3.22043 19.36 3.50808 19.36H18.2718C18.5595 19.36 18.795 19.1248 18.795 18.8375V18.7214C18.795 19.0087 18.5595 19.244 18.2718 19.244Z" fill="#1A237E" />
                                            <path opacity="0.2" d="M3.50808 7.28438H18.2718C18.5595 7.28438 18.795 7.5196 18.795 7.80691V7.69086C18.795 7.40355 18.5595 7.16833 18.2718 7.16833H3.50808C3.22043 7.16833 2.98493 7.40355 2.98493 7.69086V7.80691C2.98493 7.5196 3.22043 7.28438 3.50808 7.28438Z" fill="white" />
                                            <path d="M7.60582 12.7418V13.789H9.11031C8.986 14.427 8.42444 14.8896 7.60582 14.8896C6.69258 14.8896 5.95205 14.1181 5.95205 13.206C5.95205 12.2938 6.69258 11.5223 7.60582 11.5223C8.01716 11.5223 8.3854 11.6636 8.67617 11.9403V11.941L9.4723 11.1458C8.98881 10.6956 8.35822 10.4196 7.60551 10.4196C6.0648 10.4196 4.81548 11.6671 4.81548 13.2063C4.81548 14.7455 6.06448 15.993 7.60551 15.993C9.21681 15.993 10.2769 14.8615 10.2769 13.2696C10.2769 13.0871 10.26 12.9112 10.2328 12.7418H7.60582Z" fill="white" />
                                            <g opacity="0.2">
                                                <path d="M7.63486 13.7891V13.9051H9.11124C9.12217 13.8671 9.13154 13.8284 9.13935 13.7891H7.63486Z" fill="#1A237E" />
                                                <path d="M7.63486 15.9927C6.11351 15.9927 4.87732 14.7764 4.8464 13.264C4.84608 13.2834 4.84483 13.3027 4.84483 13.322C4.84483 14.8612 6.09383 16.1088 7.63486 16.1088C9.24616 16.1088 10.3062 14.9773 10.3062 13.3854C10.3062 13.3726 10.3046 13.3607 10.3046 13.3479C10.27 14.8984 9.21962 15.9927 7.63486 15.9927ZM8.70521 11.9404C8.41443 11.664 8.04589 11.5224 7.63486 11.5224C6.72161 11.5224 5.98108 12.2938 5.98108 13.206C5.98108 13.2257 5.98327 13.2447 5.98389 13.264C6.01481 12.3774 6.74098 11.6384 7.63486 11.6384C8.0462 11.6384 8.41443 11.7797 8.70521 12.0564V12.0571L9.55943 11.2039C9.53944 11.1851 9.51726 11.1686 9.49665 11.1505L8.70552 11.941L8.70521 11.9404Z" fill="#1A237E" />
                                            </g>
                                            <path opacity="0.2" d="M16.2083 11.4643V11.3483C16.2083 11.4765 16.1043 11.5804 15.9759 11.5804H11.5583V11.6964H15.9759C16.1043 11.6967 16.2083 11.5928 16.2083 11.4643ZM15.9759 15.9927H11.5583V16.1087H15.9759C16.1043 16.1087 16.2083 16.0049 16.2083 15.8766V15.7606C16.2083 15.8888 16.1043 15.9927 15.9759 15.9927ZM16.6733 13.7865H11.5583V13.9026H16.6733C16.8017 13.9026 16.9057 13.7987 16.9057 13.6705V13.5544C16.9057 13.6826 16.8017 13.7865 16.6733 13.7865Z" fill="#1A237E" />
                                            <path d="M20.7696 7.03269L16.9351 6.00261V3.15755C16.9351 2.87305 16.7002 2.64001 16.4132 2.64001H5.36679C5.07976 2.64001 4.84489 2.87305 4.84489 3.15755V5.99138L0.968893 7.40049C0.719031 7.49127 0.595349 7.78669 0.694045 8.05716L2.98497 14.3444V18.8375C2.98497 19.1248 3.22047 19.36 3.50812 19.36H18.2719C18.5595 19.36 18.795 19.1248 18.795 18.8375V16.2579L21.1009 7.66285C21.1753 7.38489 21.0263 7.10132 20.7696 7.03269Z" fill="url(#paint0_radial_1_3714)" />
                                            <line x1="12.5534" y1="9.40857" x2="16.6511" y2="9.40857" stroke="#DBDBDB" />
                                            <defs>
                                                <radialGradient id="paint0_radial_1_3714" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.27123 3.99465) scale(19.8971 19.8735)">
                                                    <stop stopColor="white" stopOpacity="0.1" />
                                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    Google News
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__policy">
                    <div className="footer__policy-title">
                        © 2020-2022, ТОВ «МЕДІА МЕРЕЖІ»
                    </div>
                    <div className="footer__policy-wrapper">
                        <Link to="/userpolicy">
                            Політика користувача
                        </Link>
                        <Link to="/privacypolicy">
                            Політика конфіденційності
                        </Link>
                        <Link to="/cookiepolicy">
                            Політика Cookie-файлів
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
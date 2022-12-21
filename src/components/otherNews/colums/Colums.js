import { Component } from 'react';
import NewsServices from "../../services/newsServices";
import { Link } from 'react-router-dom';

import profilePhotoFirst from '../../../resources/img/Avatar.png';
import profilePhotoSecond from '../../../resources/img/Avatar-1.png';
import profilePhotoThird from '../../../resources/img/Avatar-2.png';
import profilePhotoFourth from '../../../resources/img/Avatar-3.png';

const Colums = () => {
    return (
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
    )
};

export default Colums;
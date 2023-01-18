import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getDate } from '../../../util';
import useNewsServices from "../../services/newsServices";

import profilePhotoSecond from '../../../resources/img/Avatar-1.png';

const Colums = () => {

    const [colums, setColums] = useState([])

    const {getColums} = useNewsServices();

    useEffect (() => {
        getColums()
        .then(onColumsLoaded)
        // eslint-disable-next-line
    }, [])

    const onColumsLoaded = (colums) => {
        setColums(colums)
    }

    function renderColums(arr) {
        const items = arr.map((item) => {
            return (
                <Link to={item.id} key={item.id} className="news__col-item">
                    <div className="news__col-item-info">
                        <img src={profilePhotoSecond} alt="avatar" />
                        <div className="news__col-item-profile">
                            <div className="fz16 name">{item.name}</div>
                            <div className="fz12 employment">{item.profession.toUpperCase()}</div>
                        </div>
                    </div>
                    <div className="news__col-item-body">
                        <div className="title">{item.text}</div>
                        <div className="date">{getDate(item.date).toUpperCase()}</div>
                    </div>
                    <hr/>
                </Link>
            )
        });

        return (
            <div className="news__col-items">
                {items}
            </div>
        )
    }

    const itemColums = renderColums(colums);

    return (
    <div className="news__col">
        <div>
            <div className="news__col-head">
                <div className='title title_fz24'>Колонки</div>
                <Link to="/" className='fz14'>Всі колонки</Link>
            </div>
            {itemColums}
        </div>
        <button className='fz16 load__more'>
            Всі колонки
        </button>
    </div>
    )
};

export default Colums;
import Colums from './colums/Colums';
import Economics from './economics/Economics';
import Lifestyle from './lifestyle/Lifestyle';
import Politics from './politics/Politics';
import Promo from './promo/Promo';

import './otherNews.scss';

const otherNews = () => {
    return (
        <div className="container">
            <div className="news">
                <Colums/>
                <Politics/>
                <Promo/>
                <Economics/>
                <Lifestyle/>
            </div>
        </div>
    )
}

export default otherNews;
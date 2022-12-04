import Marquee from "react-fast-marquee";

import soldierIcon from "../../resources/icons/navbarIcons/soldier.png";
import tanksIcon from "../../resources/icons/navbarIcons/tanks.png";
import artileryIcon from "../../resources/icons/navbarIcons/artilery.png";
import aircraftIcon from "../../resources/icons/navbarIcons/aircraft.png";
import mlrsIcon from "../../resources/icons/navbarIcons/mlrs.png";
import helicopterIcon from "../../resources/icons/navbarIcons/helicopter.png";
import afvIcon from "../../resources/icons/navbarIcons/afv.png";

import './statistics.scss';

const Statistics = () => {

    const day = 0,
        soldier = 0,
        tanks = 0,
        artilery = 0,
        aircraft = 0,
        mlrs = 0,
        helicopter = 0,
        afv = 0;

    return (
        <div className="container">
            <div className='statistics'>
                <div className='fz14 statistics__day'>
                    {day} день війни:</div>
                <div className="container__fluid">
                    <Marquee gradient={false}>
                        <ul className='fz14 statistics__list'>
                            <li><img src={soldierIcon} alt="soldier" />особовий склад <span>~{soldier}</span></li>
                            <li><img src={tanksIcon} alt="tanks" />танки <span>{tanks}</span></li>
                            <li><img src={artileryIcon} alt="artilery" />артсистеми <span>{artilery}</span></li>
                            <li><img src={aircraftIcon} alt="aircraft" />літаки <span>{aircraft}</span></li>
                            <li><img src={mlrsIcon} alt="mlrs" />РСЗВ <span>{mlrs}</span></li>
                            <li><img src={helicopterIcon} alt="helicopter" />гелікоптери <span>{helicopter}</span></li>
                            <li><img src={afvIcon} alt="afv" />ББМ <span>{afv}</span></li>
                        </ul>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Statistics;
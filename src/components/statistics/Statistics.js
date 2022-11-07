import { Container } from 'react-bootstrap';

import soldierIcon from "../../resources/icons/navbarIcons/soldier.png";
import tanksIcon from "../../resources/icons/navbarIcons/tanks.png";
import artileryIcon from "../../resources/icons/navbarIcons/artilery.png";
import aircraftIcon from "../../resources/icons/navbarIcons/aircraft.png";
import mlrsIcon from "../../resources/icons/navbarIcons/mlrs.png";
import helicopterIcon from "../../resources/icons/navbarIcons/helicopter.png";
import afvIcon from "../../resources/icons/navbarIcons/afv.png";

import './statistics.scss';

const Statistics = () => {
    const day = 0;
    const soldier = 0;
    const tanks = 0;
    const artilery = 0;
    const aircraft = 0;
    const mlrs = 0;
    const helicopter = 0;
    const afv = 0;

    return (
        <Container>
            <div className='statistics'>
                <div className='statistics_day'>
                    {day} день війни:</div>
                <ul className='statistics_list'>
                    <li><img src={soldierIcon} alt="soldier" />особовий склад <span>~{soldier}</span></li>
                    <li><img src={tanksIcon} alt="tanks" />танки <span>{tanks}</span></li>
                    <li><img src={artileryIcon} alt="artilery" />артсистеми <span>{artilery}</span></li>
                    <li><img src={aircraftIcon} alt="aircraft" />літаки <span>{aircraft}</span></li>
                    <li><img src={mlrsIcon} alt="mlrs" />РСЗВ <span>{mlrs}</span></li>
                    <li><img src={helicopterIcon} alt="helicopter" />гелікоптери <span>{helicopter}</span></li>
                    <li><img src={afvIcon} alt="afv" />ББМ <span>{afv}</span></li>
                </ul>
            </div>
        </Container>
    )
}

export default Statistics;
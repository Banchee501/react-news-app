import Marquee from "react-fast-marquee";
import NewsServices from "../services/newsServices";


import soldierIcon from "../../resources/icons/navbarIcons/soldier.png";
import tanksIcon from "../../resources/icons/navbarIcons/tanks.png";
import artileryIcon from "../../resources/icons/navbarIcons/artilery.png";
import aircraftIcon from "../../resources/icons/navbarIcons/aircraft.png";
import mlrsIcon from "../../resources/icons/navbarIcons/mlrs.png";
import helicopterIcon from "../../resources/icons/navbarIcons/helicopter.png";
import afvIcon from "../../resources/icons/navbarIcons/afv.png";

import './statistics.scss';
import { Component } from "react";

class Statistics extends Component {
    state = {
        stat: {},
    }

    newsServices = new NewsServices();

    componentDidMount() {
        this.updateStatistic()
    }

    onStatLoaded = (stat) => {
        this.setState({ stat })
    }


    updateStatistic = () => {
        this.newsServices
            .getStatistics()
            .then(this.onStatLoaded)
    }

    render() {
        const { stat: { day, soldier, tanks, artillery, aircraft, mlrs, helicopter, afv } } = this.state
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
                                <li><img src={artileryIcon} alt="artillery" />артсистеми <span>{artillery}</span></li>
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
}

export default Statistics;
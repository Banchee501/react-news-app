import { Link } from 'react-router-dom';
import { Component } from 'react';
import NewsServices from "../services/newsServices";
import AllNews from './allNewsColumn/AllNewsColumn';
import RegionsNews from './regionNews/RegionNews';

import './editorialChoice.scss';

import newsImage from "../../resources/img/image.jpg";

class NewsFeed extends Component {

    state = {
        editorialChoice: []
    }

    newsServices = new NewsServices();

    componentDidMount() {
        this.newsServices.getEditorialChoice()
            .then(this.onEditorialChoice)
    }

    onEditorialChoice = (editorialChoice) => {
        this.setState({ editorialChoice })
    }

    updateEditorialChoice = () => {
        this.newsServices
            .getEditorialChoice()
            .then(this.onEditorialChoice)
    }

    renderEditorialChoice(arr) {
        const items = arr.map((item) => {
            console.log(Date.parse(item.date))
            return (
                <div key={item.id} className="news__choice-item">
                    <img src={newsImage} alt="news" />
                    <div className='fz12 date'>{item.date}</div>
                    <div className="fz16 content">
                        {item.text}
                    </div>
                </div>
            )
        })

        return (
            <div className='news__choice-items'>
                {items}
            </div>
        )
    }

    render() {
        const { editorialChoice } = this.state
        const itemEditorialChoice = this.renderEditorialChoice(editorialChoice);

        return (
            <div className="container" >
                <div className='news'>
                    <AllNews />
                    <div className="news__block">
                        <div className='news__choice'>
                            <div className='title title_fz32'>Вибір редакції</div>
                            {itemEditorialChoice}
                        </div>
                        <div className="news__regions">
                            <div className="news__regions-head">
                                <div className="title title_fz32">Регіони</div>
                                <Link to="/" className='fz14'>Всі новини розділу</Link>
                            </div>
                            <ul className='fz16 sort'>
                                <li className='active'>Київ</li>
                                <li>Одеса</li>
                                <li>Харків</li>
                            </ul>
                            <div className="news__cities">
                                <RegionsNews />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsFeed;
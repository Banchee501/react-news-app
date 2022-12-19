import React from 'react';
import Slider from "react-slick";
import { Component } from 'react';

import './carousel.scss';

import firstSlide from "../../resources/img/firstSlide.jpg";
import secondSlide from "../../resources/img/secondSlide.png";
import thirdSlide from "../../resources/img/thirdSlide.png";
import fourthSlide from "../../resources/img/fourthSlide.png";

export default class AsNavFor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null,
        count: 0,
        countTotal: 0
      };
    }
  
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
  
    render() {
      return (
        <div className='container'>
          <div className='fz16 slide'>
            1 / 4
          </div>
          <Slider
          className='carousel-slide'
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}>
              <div className='carousel-slide-item'>
                  <img src={firstSlide} alt="First slide"/>
                  <p className="fz40">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
              </div>
              <div className='carousel-slide-item'>
                  <img src={secondSlide} alt="Second slide" />
                  <p className="fz40">Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження</p>
              </div>
              <div className='carousel-slide-item'>
                  <img src={thirdSlide} alt="Third slide" />
                  <p className="fz40">Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини</p>
              </div>
              <div className='carousel-slide-item'>
                  <img src={fourthSlide} alt="Fourth slide" />
                  <p className="fz40">Сейм Латвії визнав рф країною-спонсором тероризму</p>
              </div>
          </Slider>
          <Slider
            className='carousel-slick-slide'
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}>
                    <>
                        <img src={firstSlide} alt="First slide" />
                        <p className="fz14">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
                    </>
                    <>
                        <img src={secondSlide} alt="Second slide" />
                        <p className="fz14">Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження</p>
                    </>
                    <>
                        <img src={thirdSlide} alt="Third slide" />
                        <p className="fz14">Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини</p>
                    </>
                    <>
                        <img src={fourthSlide} alt="Fourth slide" />
                        <p className="fz14">Сейм Латвії визнав рф країною-спонсором тероризму</p>
                    </>
          </Slider>
        </div>
      );
    }
  }
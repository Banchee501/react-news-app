import React from 'react';
import Slider from "react-slick";
import { Component } from 'react';

import './carousel.scss';

import firstSlide from "../../resources/img/firstSlide.jpg";
// import secondSlide from "../../resources/img/secondSlide.png";
// import thirdSlide from "../../resources/img/thirdSlide.png";
// import fourthSlide from "../../resources/img/fourthSlide.png";

export default class AsNavFor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
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
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}>
                <div className='carousel-slide'>
                    <img id='1' src={firstSlide} alt="First slide" />
                    <p className="fz40 carousel-slide-caption">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
                </div>
                <div className='carousel-slide'>
                    <img id='1' src={firstSlide} alt="First slide" />
                    <p className="fz40 carousel-slide-caption">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
                </div>
                <div className='carousel-slide'>
                    <img id='1' src={firstSlide} alt="First slide" />
                    <p className="fz40 carousel-slide-caption">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
                </div>
                <div className='carousel-slide'>
                    <img id='1' src={firstSlide} alt="First slide" />
                    <p className="fz40 carousel-slide-caption">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
                </div>
          </Slider>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}>
                <div className='carousel-indicators'>
                    <div className='carousel-indicators data-bs-target'>
                        <img id='1' src={firstSlide} alt="First slide" />
                        <p className="fz40">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
                    </div>
                    <div className='carousel-indicators data-bs-target'>
                        <img id='1' src={firstSlide} alt="First slide" />
                        <p className="fz40">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
                    </div>
                    <div className='carousel-indicators data-bs-target'>
                        <img id='1' src={firstSlide} alt="First slide" />
                        <p className="fz40">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
                    </div>
                    <div className='carousel-indicators data-bs-target'>
                        <img id='1' src={firstSlide} alt="First slide" />
                        <p className="fz40">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
                    </div>
                </div>
          </Slider>
        </div>
      );
    }
  }
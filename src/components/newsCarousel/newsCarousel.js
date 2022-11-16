import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

import './carousel.scss';

import firstSlide from "../../resources/img/firstSlide.jpg";
// import secondSlide from "../../resources/img/secondSlide.png";
// import thirdSlide from "../../resources/img/thirdSlide.png";
// import fourthSlide from "../../resources/img/fourthSlide.png";

const newsCarousel = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        id='1'
                        src={firstSlide}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default newsCarousel;
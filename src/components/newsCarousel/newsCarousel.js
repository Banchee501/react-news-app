import React from 'react';
import Slider from "react-slick";
import { useEffect, useState } from 'react';

import useNewsServices from "../services/newsServices";

import './carousel.scss';

import firstSlide from "../../resources/img/firstSlide.jpg";

const AsNavFor = () => {
  const [nav1, setNav1 ] = useState(null),
  [nav2, setNav2 ] = useState(null),
  [activeSlide, setActiveSlide ] = useState(1),
  [newsCarousel, setNewsCarousel ] = useState([])

  const {getCarousel} = useNewsServices();

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
  }
  
  const SLIDE_QW = 4;

  useEffect(() => {
    getCarousel()
    .then(onCarousel)
    // eslint-disable-next-line
}, [])

const onCarousel = (newsCarousel) => {
  setNewsCarousel(newsCarousel)
}

  function renderCarousel(arr) {
    const items = arr.map((item) => {
      return (
        <div key={item.id} className='carousel-slide-item'>
          <div style={{ background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%, rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%),url(${firstSlide}) no-repeat 50%/cover`, width: '100%',
          height: '654px' }}/>
          <p className="fz40">{item.text}</p>
        </div>
      )
    })
    return items
  }

  function renderCarouselDots(arr){
    const items = arr.map((item) => {
      return (
        <>
          <img src={firstSlide} alt="First slide" />
          <p className="fz14">{item.text.slice(0, 71)+'...'}</p>
        </>
      )
    })

    return items
  }

  const firstSliderSettings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next + 1),
    className: 'carousel-slide',
    arrows: true,
    asNavFor: nav2,
    ref: (slider1) => setNav1(slider1)
  };

  const secondSliderSetings = {
    className: 'carousel-slick-slide',
    asNavFor: nav1,
    ref: (slider2) => setNav2(slider2),
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true
  }

  const itemCarousel = renderCarousel(newsCarousel);
  const itemCarouselDots = renderCarouselDots(newsCarousel);

  return (
    <div className='container'>
      <div className='slick'>
        <div className='fz16 slide'>
          {activeSlide} / {SLIDE_QW}
        </div>
      </div>
      <Slider
      {...firstSliderSettings}
      >
        {itemCarousel}
      </Slider>
      <Slider
        {...secondSliderSetings}
        >
          {itemCarouselDots}
      </Slider>
    </div>
  );
}

export default AsNavFor;
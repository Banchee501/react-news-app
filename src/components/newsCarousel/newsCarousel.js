import React from 'react';
import Slider from "react-slick";
import { useEffect, useState } from 'react';

import useNewsServices from "../services/newsServices";

import './carousel.scss';

import firstSlide from "../../resources/img/firstSlide.jpg";
import secondSlide from "../../resources/img/secondSlide.png";
import thirdSlide from "../../resources/img/thirdSlide.png";
import fourthSlide from "../../resources/img/fourthSlide.png";

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

    return (
      <>
          {items}
      </>
    )
  }

  function renderCarouselDots(arr){
    const items = arr.map((item) => {
      return (
        <div key={item.id}>
          <img src={firstSlide} alt="First slide" />
          <p className="fz14">{item.text}</p>
        </div>
      )
    })

    return (
      <>
          {items}
      </>
    )
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
        <div className='carousel-slide-item'>
            <div style={{ background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%, rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%),url(${firstSlide}) no-repeat 50%/cover`, width: '100%',
          height: '654px' }}/>
            <p className="fz40">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
        </div>
        <div className='carousel-slide-item'>
        <div style={{ background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%, rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%),url(${secondSlide}) no-repeat 50%/cover`, width: '100%',
          height: '654px' }}/>
            <p className="fz40">Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження</p>
        </div>
        <div className='carousel-slide-item'>
        <div style={{ background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%, rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%),url(${thirdSlide}) no-repeat 50%/cover`, width: '100%',
          height: '654px' }}/>
            <p className="fz40">Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини</p>
        </div>
        <div className='carousel-slide-item'>
        <div style={{ background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%, rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%),url(${fourthSlide}) no-repeat 50%/cover`, width: '100%',
          height: '654px' }}/>
            <p className="fz40">Сейм Латвії визнав рф країною-спонсором тероризму</p>
        </div>
      </Slider>
      <Slider
        {...secondSliderSetings}
        >
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

export default AsNavFor;

    // getCarousel = useNewsServices();

    // componentDidMount() {
    //   this.setState({
    //     nav1: this.slider1,
    //     nav2: this.slider2
    //   });
      // this.getCarousel()
      //   .then(this.onCarousel)
    // }

    // onCarousel = (newsCarousel) => {
    //   this.setState({ newsCarousel })
    // }

//   renderCarousel(arr) {
//     const items = arr.map((item) => {
//       return (
//         <div key={item.id} className='carousel-slide-item'>
//           <img  src={firstSlide} alt="First slide"/>
//           <p className="fz40">{item.text}</p>
//         </div>
//       )
//     })

//     return (
//       <>
//           {items}
//       </>
//     )
//   }

//   renderCarouselDots(arr){
//     const items = arr.map((item) => {
//       return (
//         <div key={item.id}>
//           <img src={firstSlide} alt="First slide" />
//           <p className="fz14">{item.text}</p>
//         </div>
//       )
//   })

//   return (
//     <>
//         {items}
//     </>
//   )
// }

//   render() {
//     const settings = {
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />,
//       beforeChange: (current, next) => this.setState({ activeSlide: next + 1 }),
//       className: 'carousel-slide',
//       asNavFor: this.state.nav2,
//       arrows: true,
//       ref: slider => (this.slider1 = slider)
//     };
//     const { newsCarousel } = this.state;
//     const itemCarousel = this.renderCarousel(newsCarousel);
//     const itemCarouselDots = this.renderCarouselDots(newsCarousel);

//     return (
//       <div className='container'>
//         <div className='slick'>
//           <div className='fz16 slide'>
//             {this.state.activeSlide} / {SLIDE_QW}
//           </div>
//         </div>
//         <Slider
//         {...settings}>
//             <div className='carousel-slide-item'>
//                 <div style={{ background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%, rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%),url(${firstSlide}) no-repeat 50%/cover`, width: '100%',
//               height: '654px' }}/>
//                 <p className="fz40">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
//             </div>
//             <div className='carousel-slide-item'>
//             <div style={{ background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%, rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%),url(${secondSlide}) no-repeat 50%/cover`, width: '100%',
//               height: '654px' }}/>
//                 <p className="fz40">Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження</p>
//             </div>
//             <div className='carousel-slide-item'>
//             <div style={{ background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%, rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%),url(${thirdSlide}) no-repeat 50%/cover`, width: '100%',
//               height: '654px' }}/>
//                 <p className="fz40">Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини</p>
//             </div>
//             <div className='carousel-slide-item'>
//             <div style={{ background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%, rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%),url(${fourthSlide}) no-repeat 50%/cover`, width: '100%',
//               height: '654px' }}/>
//                 <p className="fz40">Сейм Латвії визнав рф країною-спонсором тероризму</p>
//             </div>
//         </Slider>
//         <Slider
//           className='carousel-slick-slide'
//           asNavFor={this.state.nav1}
//           ref={slider => (this.slider2 = slider)}
//           slidesToShow={4}
//           swipeToSlide={true}
//           focusOnSelect={true}>
//                   <>
//                       <img src={firstSlide} alt="First slide" />
//                       <p className="fz14">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
//                   </>
//                   <>
//                       <img src={secondSlide} alt="Second slide" />
//                       <p className="fz14">Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження</p>
//                   </>
//                   <>
//                       <img src={thirdSlide} alt="Third slide" />
//                       <p className="fz14">Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини</p>
//                   </>
//                   <>
//                       <img src={fourthSlide} alt="Fourth slide" />
//                       <p className="fz14">Сейм Латвії визнав рф країною-спонсором тероризму</p>
//                   </>
//         </Slider>
//       </div>
//     );
//   }
// }
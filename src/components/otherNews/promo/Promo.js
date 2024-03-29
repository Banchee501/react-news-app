import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import newsTag from '../../../util/TegItem';
import { getDate } from '../../../util';
import useNewsServices from "../../services/newsServices";

import promoImg from '../../../resources/img/imageph.jpg';

const Promo = () => {

    const [promo, setPromo] = useState([])

    const {getPromo} = useNewsServices();

    useEffect(() => {
        getPromo()
        .then(onPromo)
        // eslint-disable-next-line
    }, [])

    const onPromo = (promo) => {
        setPromo(promo)
    }

    function renderPromo(arr) {
        const items = arr.map((item) => {
            let sliced = item.text.slice(0, 60)
            if (sliced.length < item.text.length) {
                sliced += '...';
            }
            return (
                <Link to={item.id} key={item.id} className="news__promo-block">
                    <div className="date">{getDate(item.date).toUpperCase()}</div>
                    <div className="fz16 news__promo-text">{sliced}</div>
                </Link>
            )
        })

        const mainItem = arr.map((item) => {
            return (
                <Link to={item.id} key={item.id} className="news__promo-body">
                    <div className="img">
                        <img src={promoImg} alt="promo" />
                    </div>
                    <div className="body">
                        <div className='news__promo-body-head'>
                            <div className="date">{getDate(item.date).toUpperCase()}</div> {newsTag(item.className)}
                        </div>
                        <div className="fz32 news__promo-text">{item.text}</div>
                    </div>
                </Link>
            )
        })

        return (
            <>
                {mainItem[0]}
                <div className="news__promo-list">
                    {items.slice(1)}
                    <div className="gradient"></div>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1_3551)">
                            <rect x="8" y="2" width="48" height="48" rx="24" fill="white" fillOpacity="1" shapeRendering="crispEdges" />
                            <g clipPath="url(#clip0_1_3551)">
                                <path d="M29.6666 34C29.5789 34.0005 29.4919 33.9837 29.4107 33.9506C29.3295 33.9174 29.2556 33.8685 29.1933 33.8067C29.1308 33.7447 29.0812 33.671 29.0474 33.5898C29.0135 33.5085 28.9961 33.4214 28.9961 33.3334C28.9961 33.2454 29.0135 33.1582 29.0474 33.077C29.0812 32.9958 29.1308 32.922 29.1933 32.86L34.64 27.4134C35.0145 27.0384 35.2249 26.53 35.2249 26C35.2249 25.47 35.0145 24.9617 34.64 24.5867L29.1933 19.14C29.0678 19.0145 28.9972 18.8442 28.9972 18.6667C28.9972 18.4892 29.0678 18.3189 29.1933 18.1934C29.3188 18.0678 29.4891 17.9973 29.6666 17.9973C29.8442 17.9973 30.0144 18.0678 30.14 18.1934L35.5866 23.64C35.897 23.9497 36.1433 24.3175 36.3114 24.7225C36.4794 25.1275 36.5659 25.5616 36.5659 26C36.5659 26.4385 36.4794 26.8726 36.3114 27.2776C36.1433 27.6826 35.897 28.0504 35.5866 28.36L30.14 33.8067C30.0777 33.8685 30.0038 33.9174 29.9226 33.9506C29.8413 33.9837 29.7544 34.0005 29.6666 34Z" fill="#2D2D2D" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_1_3551" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="6" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3551" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3551" result="shape" />
                            </filter>
                            <clipPath id="clip0_1_3551">
                                <rect width="16" height="16" fill="white" transform="translate(25 18)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </>
        )
    }

    const itemPromo = renderPromo(promo);

    return (
    <div className="news__promo">
        <div className="news__promo-head">
            <div className="title title_fz32">Промо</div>
            <Link to="/" className='fz14'>Всі матеріали</Link>
        </div>
            {itemPromo}
    </div>
    )
}
                
export default Promo;
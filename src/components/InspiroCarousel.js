import { useState, useRef } from "react"
import { FaDribbble } from "react-icons/fa";

import Image from '../assets/images/six.png'

function InspiroCarousel() {

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0);
    const [carouselState, setCarouselState] = useState('inspiro-carousel');
    const dragPosition = useRef();

    let distance = 0;
    let position = 0;


    function handleMouseDown(e) {
        setIsDown(true);
        setCarouselState('inspiro-carousel active');
        setStartX(() => e.pageX - dragPosition.current.offsetLeft);
        setScrollLeft(() => dragPosition.current.scrollLeft);

    }

    function handleMouseLeave() {
        setIsDown(false);
        setCarouselState('inspiro-carousel');
    }

    function handleMouseUp() {
        setIsDown(false);
        setCarouselState('inspiro-carousel');
    }

    function handleMouseMove(e) {
        if (!isDown) return;
        distance = e.pageX - dragPosition.current.offsetLeft;
        position = (distance - startX) * 1.5;
        dragPosition.current.scrollLeft = scrollLeft - position;
    }

    return (
        <div className={carouselState} onPointerDown={handleMouseDown} onPointerUp={handleMouseUp} onPointerLeave={handleMouseLeave} onPointerMove={handleMouseMove} ref={dragPosition}>
            <div className="inspiro-item">
                <a href="/#" target="_blank" rel="noopener noreferrer">
                    <img src={Image} alt="" className="inspiro-item-img" />
                    <div className="inspiro-text-box">
                        <FaDribbble></FaDribbble>&nbsp;&nbsp;@zheeey
                    </div>
                </a>
            </div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
            <div className="inspiro-item"></div>
        </div>
    )
}

export default InspiroCarousel

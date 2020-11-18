import React, { useState } from 'react';
import { Carousel} from 'react-bootstrap';


function ControlledCarousel(props) {
    // console.log('Props', props)
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState(props.Images)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

   return (
    <Carousel activeIndex={index} onSelect={handleSelect} 
    className="Carousel">
        {
            images.map((item) => {
                return <Carousel.Item>
                    <img className="CarouselImg"
                        className="d-block w-100"
                        src={item}
                        alt="First slide"
                    />
                </Carousel.Item>
            })
        }
    </Carousel>
);
}

export default ControlledCarousel; 
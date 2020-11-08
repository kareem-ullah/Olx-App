import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
// import bike1 from '../../images/bike/bike-1.jpg';
// import bike2 from '../../images/bike/bike-2.jpg';
// import bike3 from '../../images/bike/bike-3.jpg';
// import bike4 from '../../images/bike/bike-4.jpg';
// import bike5 from '../../images/bike/bike-5.jpg';


function ControlledCarousel(props) {
    console.log('Props', props)
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState(props.Images)
    // const [images, setImages] = useState([bike1, bike2, bike3, bike4, bike5])
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
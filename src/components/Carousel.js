import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './FeatureCard';
import './Carousel.css';
import DummyData from '../API/DummyData.json';



const Featured_Carousel = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const forCarousel = DummyData.slice(0, 12);


    return (
        <div>
            <div className="jumbotron container">
                <div className='feature-top'>
                    <h4 className="">More on Mobile Phones<span><a href='#'>View More</a></span></h4>
                </div>

                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    containerClass="carousel-container"
                >

                    {forCarousel.map((carousel) => (

                        <div key={carousel.id}>
                            <Card data={carousel} />
                        </div>

                    ))}


                </Carousel>
            </div>
        </div>
    )
}

export default Featured_Carousel

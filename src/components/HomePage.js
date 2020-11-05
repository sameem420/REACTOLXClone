import React from 'react';
import Advertisment from './Advertisment';
import Banner from './Banner';
import Featured_Carousel from './Carousel';
import Products from './Products';
import TopFooter from './TopFooter';

const HomePage = () => {
    return (
        <div>

            <Banner />
            <Advertisment />
            <Featured_Carousel />
            <Products />
            <Advertisment />
            <TopFooter />

        </div>
    )
}

export default HomePage



import React from 'react';
import Header from './ui-components/Header';


const Homepage = () => {
    return (
        <div>
            <Header />
            {/* <!--====== App Content ======--> */}
        <div className="app-content">

            {/* <!--====== Primary Slider ======--> */}
            <div className="s-skeleton s-skeleton--h-600 s-skeleton--bg-grey">
                <div className="owl-carousel primary-style-1" id="hero-slider">
                    <div className="hero-slide hero-slide--1">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-content slider-content--animation">

                                        <span className="content-span-1 u-c-secondary">Latest Update Stock</span>

                                        <span className="content-span-2 u-c-secondary">30% Off On Electronics</span>

                                        <span className="content-span-3 u-c-secondary">Find electronics on best prices, Also Discover most selling products of electronics</span>

                                        <span className="content-span-4 u-c-secondary">Starting At

                                            <span className="u-c-brand">$1050.00</span></span>

                                        <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-slide hero-slide--2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-content slider-content--animation">

                                        <span className="content-span-1 u-c-white">Find Top Brands</span>

                                        <span className="content-span-2 u-c-white">10% Off On Electronics</span>

                                        <span className="content-span-3 u-c-white">Find electronics on best prices, Also Discover most selling products of electronics</span>

                                        <span className="content-span-4 u-c-white">Starting At

                                            <span className="u-c-brand">$380.00</span></span>

                                        <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-slide hero-slide--3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-content slider-content--animation">

                                        <span className="content-span-1 u-c-secondary">Find Top Brands</span>

                                        <span className="content-span-2 u-c-secondary">10% Off On Electronics</span>

                                        <span className="content-span-3 u-c-secondary">Find electronics on best prices, Also Discover most selling products of electronics</span>

                                        <span className="content-span-4 u-c-secondary">Starting At

                                            <span className="u-c-brand">$550.00</span></span>

                                        <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--====== End - Primary Slider ======--> */}
            </div>
        </div>
    );
}

export default Homepage;
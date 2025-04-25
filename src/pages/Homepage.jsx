

import React from 'react';
import Header from './ui-components/Header';
import ClothingGrid from './ClothingGrid';

const Homepage = () => {
    return (
        <div>
            <Header />
            {/* <!--====== App Content ======--> */}
            <div className="app-content">
                <ClothingGrid />
            </div>
        </div>
    );
}

export default Homepage;
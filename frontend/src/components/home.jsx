import React from 'react';
import Nav from './nav.jsx';

function Home() {
    return (
        <div>
            <Nav account="False" />
            <div className="container">
                The home page
            </div>
        </div>
    );
}

export default Home;
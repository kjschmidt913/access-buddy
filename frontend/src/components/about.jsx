import React from 'react';
import Nav from './nav.jsx';
import Glenn from './glenn.png';

function About() {
    return (
        <div>
            <Nav account="False" />
            <div className="container">
                This is Dannys job get working Danny
            </div>
            <img src={Glenn} alt="GLENN" width="500" height="600"/>
        </div>
    );
}

export default About;

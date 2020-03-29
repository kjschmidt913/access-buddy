import React from 'react';
import Nav from './nav.jsx';

function SentUser() {
    return (
        <div>
            <Nav account = "False"/>
            <div className="container">
                Success! Data request was fulfilled and sent back to the user.
            </div>
        </div>
    );
}

export default SentUser;
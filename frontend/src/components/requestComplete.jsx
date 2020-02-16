import React from 'react';
import Nav from './nav.jsx';

function RequestComplete() {
    return (
        <div>
            <Nav account = "False"/>
            <div className="container">
                Your request has been submitted.
            </div>
        </div>
    );
}

export default RequestComplete;
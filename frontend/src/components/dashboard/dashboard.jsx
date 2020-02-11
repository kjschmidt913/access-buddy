import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../nav.jsx';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            requests: []
        };
        //this is where we set state for our data request objects before they're loaded
    }


    //this gets the data from our database and sets the state with that data.
    //need to make this functional with correct link- this might be working though?
    componentDidMount() {
        axios.get('http://localhost:3001/api/getData')
            .then(res => {
                this.setState({
                    requests: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }




    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    dash here

                </div>
            </div>
        );
    }
}

export default Dashboard;
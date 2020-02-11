import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            requests: []
        };
        //this is where we set state for our data request objects before they're loaded
    }

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
            <div className="container">
                dash here

            </div>
        );
    }
}

export default Dashboard;
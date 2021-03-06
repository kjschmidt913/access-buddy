import React, { Component } from 'react';
// import axios from 'axios';
import Nav from '../nav.jsx';
import InboxItem from './inboxItem.jsx';


class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            message: null,
            intervalIsSet: false

        };
        //this is where we set state for our data request objects before they're loaded
    }


    //this gets the data from our database and sets the state with that data.
    //Since it's an inbox that updates in real time, it continuously makes calls
    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
        // console.log(this.state.data);
    };


    render() {
        if (this.state.data.length === 0) {
            return (
                <p>Loading</p>
            )
        } else {
            return (
                <div>
                    <Nav account = "True"/>
                    <div className="container">
                    <h2>Active Requests</h2>
                        {/* <h2>Most recent submission:</h2>

                        <p><span className="font-weight-bold">First Name: </span>{this.state.data[this.state.data.length-1].firstName}</p>
                        <p><span className="font-weight-bold">Last Name: </span>{this.state.data[this.state.data.length-1].lastName}</p>
                        <p><span className="font-weight-bold">Email: </span>{this.state.data[this.state.data.length-1].email}</p>
                        <p><span className="font-weight-bold">Residence: </span>{this.state.data[this.state.data.length-1].residence}</p> */}

                        <InboxItem requests = {this.state.data}/>
                    </div>
                </div>
            );

        }

    }
}

export default Dashboard;

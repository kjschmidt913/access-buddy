import React, { Component } from 'react';
// import axios from 'axios';
import Nav from '../nav.jsx';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            id: 0,
            message: null,
            intervalIsSet: false,
            idToUpdate: null,
            objectToUpdate: null
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
        console.log(this.state.data);
      };




    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    dash here
                    {this.state.data[1]}

                </div>
            </div>
        );
    }
}

export default Dashboard;
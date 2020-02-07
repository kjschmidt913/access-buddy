import React, { Component } from 'react';
import axios from 'axios';

class RequestForm extends Component {
    // initialize our state
    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
    };

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    // never let a process live forever
    // always kill a process everytime we are done using it
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    // just a note, here, in the front end, we use the id key of our data object
    // in order to identify which we want to Update or delete.
    // for our back end, we use the object id assigned by MongoDB to modify
    // data base entries

    // our first get method that uses our backend api to
    // fetch data from our data base
    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };

    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = (message) => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post('http://localhost:3001/api/putData', {
            id: idToBeAdded,
            message: message,
        });
    };


    // our update method that uses our backend api
    // to overwrite existing data base information
    updateDB = (idToUpdate, updateToRequestFormly) => {
        let objIdToUpdate = null;
        parseInt(idToUpdate);
        this.state.data.forEach((dat) => {
            if (dat.id == idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        axios.post('http://localhost:3001/api/updateData', {
            id: objIdToUpdate,
            update: { message: updateToRequestFormly },
        });
    };

    render() {
        const { data } = this.state;
        return (
            <div class="container">
                <form>
                    <div class="col-6">
                        <h1>Request your data</h1>
                        <div class="form-group">
                            <label for="firstName">First name:</label>
                            <input type="text" id="firstName" class="form-control" />

                        </div>
                        <div class="form-group">
                            <label for="lasttName">Last name:</label>
                            <input type="text" id="lastName" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="residence">Place of Residence:</label>
                            <select class="form-control" id="residence">
                                <option>California</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" onClick={() => this.putDataToDB(this.state.message)}>Submit</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default RequestForm;
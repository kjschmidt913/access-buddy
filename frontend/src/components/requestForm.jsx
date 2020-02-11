import React, { Component } from 'react';
import axios from 'axios';

class RequestForm extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onFirstName = this.onChangeFirstName.bind(this);
        this.onChangeEmail = this.onChangEmail.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            firstName: '',
            email: '',
            lastName: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({ firstName: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeLastName(e) {
        this.setState({ lastName: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const requestObject = {
            firstName: this.state.firstName,
            email: this.state.email,
            lastName: this.state.lastName
        };

        axios.post('http://localhost:3001/api/putData', requestObject)
            .then(res => console.log(res.data));

        this.setState({
            firstName: '',
            email: '',
            lastName: ''
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div class="container">
                <form>
                    <div class="col-6">
                        <h1>Request your data</h1>
                        <div class="form-group">
                            <label for="firstName">First name:</label>
                            <input type="text" id="firstName" class="form-control" value={this.state.firstName} onChange={this.onChangeFirstName} />

                        </div>
                        <div class="form-group">
                            <label for="lasttName">Last name:</label>
                            <input type="text" id="lastName" class="form-control" value={this.state.lastName} onChange={this.onChangeLastName} />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" class="form-control" value={this.state.email} onChange={this.onChangeEmail}/>
                        </div>
                        {/* need to go over drop down menu selection */}
                        {/* <div class="form-group">
                            <label for="residence">Place of Residence:</label>
                            <select class="form-control" id="residence" onChange={(e) => this.setState({ message: e.target.value })}>
                                <option>California</option>
                                <option>Other</option>
                            </select>
                        </div> */}
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default RequestForm;
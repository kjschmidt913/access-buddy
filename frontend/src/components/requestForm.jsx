import React, { Component } from 'react';
import axios from 'axios';

class RequestForm extends Component {

    constructor(props) {
        super(props)

        // Setting up functions and binding
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeResidence = this.onChangeResidence.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            firstName: '',
            email: '',
            lastName: '',
            residence:''
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

    onChangeResidence(e) {
        this.setState({ residence: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        const requestObject = {
            firstName: this.state.firstName,
            email: this.state.email,
            lastName: this.state.lastName,
            residence: this.state.residence
        };

        console.log(requestObject);

        axios.post('http://localhost:3001/api/putData', requestObject)
            .then(res => console.log(res.data));

        this.setState({
            firstName: '',
            email: '',
            lastName: '',
            residence:''
        });
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="col-md-6 col-12 mx-auto mt-2">
                        <h1>Request your data</h1>
                        <div className="form-group mt-1">
                            <label htmlFor="firstName">First name:</label>
                            <input type="text" id="firstName" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="lasttName">Last name:</label>
                            <input type="text" id="lastName" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="residence">Place of Residence:</label>
                            <select className="form-control" id="residence" value={this.state.residence} onChange={this.onChangeResidence}>
                                <option value="" default>Select your option</option>
                                <option>California</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <button className="btn btn-primary col-12 mt-2" type="submit">Submit</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default RequestForm;
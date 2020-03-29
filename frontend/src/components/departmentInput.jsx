import React, { Component } from 'react';
import axios from 'axios';
import Nav from './nav.jsx';
import { Link } from 'react-router-dom';
import MDBFileupload from 'mdb-react-fileupload';

class DepartmentInput extends Component {

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
            residence: ''
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

    putDataToDB = requestObject => {


        axios.post("http://localhost:3001/api/putData", {
            firstName: requestObject.firstName,
            email: requestObject.email,
            lastName: requestObject.lastName,
            residence: requestObject.residence
        });
    };

    //AWS Link: https://sqs.us-east-2.amazonaws.com/497256551556/DSAR_Insightly.fifo
    

    onSubmit() {

        const requestObject = {
            firstName: this.state.firstName,
            email: this.state.email,
            lastName: this.state.lastName,
            residence: this.state.residence
        };

        this.putDataToDB(requestObject);


        this.setState({
            firstName: '',
            email: '',
            lastName: '',
            residence: ''
        });
    }


    render() {
        return (
            <div>
                <Nav account="False" />
                <div className="container">

                    <form>
                        <div className="col-md-6 col-12 mx-auto mt-2">
                            <h1>Department Data Input</h1>
                            <div className="form-group">
                                <label htmlFor="requestID">Request ID:</label>
                                <input type="text" id="lastName" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName} />
                            </div>
                            <div className="form-group mt-1">
                                <label htmlFor="deptName">Department:</label>
                                <select className="form-control" id="residence" value={this.state.residence} onChange={this.onChangeResidence}>
                                    <option value="" default>Select your department</option>
                                    <option>Marketing</option>
                                    <option>Accounting</option>
                                    <option>Other</option>
                                </select>

                            </div>
                            <MDBFileupload />
                            <Link to="/request-complete"><button className="btn btn-primary col-12 mt-2" onClick={this.onSubmit} >Submit</button></Link>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default DepartmentInput;

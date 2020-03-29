import React, { Component } from 'react';
import axios from 'axios';
import Nav from './nav.jsx';
import { Link } from 'react-router-dom';

class DepartmentInput extends Component {

    constructor(props) {
        super(props)

        // Setting up functions and binding
        this.onChangeRequestID = this.onChangeRequestID.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeDeptData = this.onChangeDeptData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            requestID: '',
            department: '',
            deptData: ''
        }
    }


    onChangeRequestID(e) {
        this.setState({ requestID: e.target.value })
    }

    onChangeDepartment(e) {
        this.setState({ department: e.target.value })
    }

    onChangeDeptData(e) {
        this.setState({ deptData: e.target.value })
    }

    putDataToDB = requestObject => {


        axios.post("http://localhost:3001/api/putData", {
            requestID: requestObject.requestID,
            department: requestObject.department,
            deptData: requestObject.deptData
        });
    };

    //AWS Link: https://sqs.us-east-2.amazonaws.com/497256551556/DSAR_Insightly.fifo
    

    onSubmit() {

        const requestObject = {
            requestID: this.state.requestID,
            department: this.state.department,
            deptData: this.state.deptData
        };

        this.putDataToDB(requestObject);


        this.setState({
            requestID: '',
            department: '',
            deptData: ''
        });
    }


    render() {
        return (
            <div>
                <Nav account="False" />

                <div className="container">

                    <form>
                        <div className="col-md-6 col-12 mx-auto mt-2">
                            <h1>Department Data Upload</h1>
                            <div className="form-group">
                                <label htmlFor="requestID">Request ID:</label>
                                <input type="text" id="requestID" className="form-control" value={this.state.requestID} onChange={this.onChangeRequestID} />
                            </div>
                            <div className="form-group mt-1">
                                <label htmlFor="deptName">Department:</label>
                                <select className="form-control" id="deptName" value={this.state.department} onChange={this.onChangeDepartment}>
                                    <option value="" default>Select your department</option>
                                    <option>Law</option>
                                    <option>Marketing</option>
                                    <option>Customer Relations</option>
                                </select>

                            </div>
                            <div className="form-group">
                                <label htmlFor="dataInput">Upload data (.zip):</label>
                                <span className="card">
                                    <div className= "card-body">
                                        <div className="file-upload-wrapper">
                                            <input type="file" id="dataInput" className="file-upload" value={this.state.deptData} onChange={this.onChangeDeptData}/>
                                        </div>
                                    </div>
                                </span>
                                <p className="text-center">(drag and drop)</p>
                            </div>

                            <Link to="/request-complete"><button className="btn btn-primary col-12 mt-2" onClick={this.onSubmit} >Submit</button></Link>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}


export default DepartmentInput;

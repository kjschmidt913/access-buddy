import React from 'react';
import './inboxItem.css';
import { Link } from 'react-router-dom';
// import getTimeRemaining from './countdown.jsx';
// import addDays from './countdown.jsx'


function InboxItem(props) {
    

    const requests = props.requests.reverse();
    const tableItems = requests.map((request, index) =>
        
        <tr className={request.department_law && request.department_marketing && request.department_customer ? "table-success" : " "} key={index} onClick={() => { toggleHide(index) }}>
            <td>{index + 1}</td>
            <td >Request {request.lastName.substring(0, 3) + request._id.substring(5, 10)}</td>
            
            <td>{index + 1 * 3} days remaining</td>
            <td><button type="button" className={request.department_law && request.department_marketing && request.department_customer ? "btn btn-primary" : "btn btn-outline-primary"}>Details</button></td>
        </tr>
    );

    const requestDetails = requests.map((request, index) =>
        <section key={index} id={index} className="d-none" >
            <div className="request-modal">
                <h4 className="text-align-left" onClick={() => { toggleHide(index) }}><i class="far fa-window-close text-danger"></i></h4>
                <div className="col-12 mx-auto mt-2">
                    <h2>Request Details</h2>

                    <div className="row col-12 mx-auto">
                        <div className="col-6">
                            <h4>Customer Information</h4>
                            <p><span className="font-weight-bold">First Name: </span>{request.firstName}</p>
                            <p><span className="font-weight-bold">Last Name: </span>{request.lastName}</p>
                            <p><span className="font-weight-bold">Email: </span>{request.email}</p>
                            <p><span className="font-weight-bold">Residence: </span>{request.residence}</p>
                            <p><i class="fas fa-check text-success mr-2"></i><span className="font-weight">Verified </span></p>
                        </div>
                        <div className="col-6">
                            <h4>Business Information</h4>
                            <p><span className="font-weight-bold">Days remaining: </span>{index +1 *3}</p>
                            <p><span className="font-weight-bold">Status by department: </span></p>

                            <p>
                                {request.department_law == "True" ? <i class="fas fa-check text-success mr-2"></i> : <i class="mr-2 fas fa-times text-danger"></i>}
                             Law
                            </p>

                            <p>
                                {request.department_marketing == "True" ? <i class="fas fa-check text-success mr-2 "></i> : <i class="mr-2 fas fa-times text-danger"></i>}
                             Marketing
                            </p>

                            <p>
                                {request.department_customer == "True" ? <i class="fas fa-check text-success mr-2 "></i> : <i class="mr-2 fas fa-times text-danger"></i>}
                             Customer Relations
                            </p>

                            {request.department_law && request.department_marketing && request.department_customer ? <Link to="/sent-user"><button className="btn btn-primary" id="sendData">Send Data</button></Link> : <button className="btn btn-primary disabled send-btn" disabled>Send Data</button>}

                        </div>
                    </div>
                </div>
            </div>

        </section>

    );


    function toggleHide(index) {
        if (document.getElementById(index).className === "d-block") {
            document.getElementById(index).className = "d-none";
        } else {
            document.getElementById(index).className = "d-block";
        }
    };

    return (
        <div className="container">
            <table className="table table-striped">
                <tbody>
                    {tableItems}
                </tbody>
            </table>

            <div className="toggle-div">
                {requestDetails}
            </div>

        </div>
    );
}


export default InboxItem;

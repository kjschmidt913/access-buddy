import React from 'react';
import './inboxItem.css';

function InboxItem(props) {

    const requests = props.requests.reverse();
    const tableItems = requests.map((request, index) =>
        <tr key={index} onClick={() => { toggleHide(index) }}>
            <td>{index + 1}</td>
            <td>Request {request.lastName.substring(0,3)+request._id.substring(5,10)}</td>
            <td>{(index + 3) * 4} days remaining</td>
            <button type="button" class="btn btn-outline-primary">Details</button>
        </tr>
    );

    const requestDetails = requests.map((request, index) =>
        <section key={index} id={index} className="d-none" >
            <div className="request-modal">
                <h2 className="col-12">Request Details <span className="text-align-right" onClick={() => { toggleHide(index) }}><i class="far fa-window-close text-danger"></i></span></h2>
                <div className="row col-10">
                    <div className="col-5">
                        <h4>Customer Information</h4>
                        <p><span className="font-weight-bold">First Name: </span>{request.firstName}</p>
                        <p><span className="font-weight-bold">Last Name: </span>{request.lastName}</p>
                        <p><span className="font-weight-bold">Email: </span>{request.email}</p>
                        <p><span className="font-weight-bold">Residence: </span>{request.residence}</p>
                    </div>
                    <div className="col-5">
                        <h4>Business Information</h4>
                        <p><span className="font-weight-bold">Days remaining: </span>9</p>
                        <p><span className="font-weight-bold">Status by department: </span></p>
                        <p><i class="fas fa-check-square text-success"></i> Marketing</p>
                        <p><i class="fas fa-check-square text-success"></i> Customer Experience</p>
                        <p><i class="fas fa-times text-danger"></i> Legal</p>

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

import React from 'react';
import './inboxItem.css';
// import getTimeRemaining from './countdown.jsx';
// import addDays from './countdown.jsx'


function InboxItem(props) {

    const requests = props.requests.reverse();
    const tableItems = requests.map((request, index) =>
        <tr key={index} onClick={() => { toggleHide(index) }}>
            <td>{index + 1}</td>
            <td>Request {request.lastName.substring(0,3)+request._id.substring(5,10)}</td>
            <td>{index*4} days remaining</td>
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
                        <p><span className="font-weight-bold">Days remaining: </span>{index*4}</p>
                        <p><span className="font-weight-bold">Status by department: </span></p>
                        <p><label><input type="checkbox" name="Marketing" value="" onchange="document.getElementById('sendbutton').disabled = !this.checked;"/> Marketing</label></p>
                        <p><label><input type="checkbox" name="Customer Experience" value="" onchange="document.getElementById('sendbutton').disabled = !this.checked;"/> Customer Experience</label></p>
                        <p><label><input type="checkbox" name="Legal" value="" onchange="document.getElementById('sendbutton').disabled = !this.checked;"/> Legal</label></p>
                        <p><input type="submit" name="sendbutton" class="inputButton" id="sendNewSms" value=" Send Request" /></p>
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

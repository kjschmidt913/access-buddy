import React from 'react';

function InboxItem(props) {

    const requests = props.requests;
    const tableItems = requests.map((request, index) =>
        <tr key={index} onClick={() => { toggleHide(index) }}>
            <td>{index + 1}</td>
            <td>Request #{request._id}</td>
            <td>{(index + 3) * 4} days remaining</td>
        </tr>
    );

    const requestDetails = requests.map((request, index) =>
        <div key={index} id={index} className="d-none">
            <h2>Request #{request._id}</h2>
            <p><span className="font-weight-bold">First Name: </span>{request.firstName}</p>
            <p><span className="font-weight-bold">Last Name: </span>{request.lastName}</p>
            <p><span className="font-weight-bold">Email: </span>{request.email}</p>
            <p><span className="font-weight-bold">Residence: </span>{request.residence}</p>
        </div>
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
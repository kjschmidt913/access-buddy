import React from 'react';


// Create some onClick functions that will show more info about the request when the user clicks on it
// Your functions will go in the function InboxItem, BEFORE the return statement 
// To reference data, use requests.fieldYouWant. if you aren't sure what the fields are, look at the html
// I commented out in dashboard.jsx.

function InboxItem(props) {

    const requests = props.requests;
    const tableItems = requests.map((request, index) =>
        <tr key={index}>
            <td>{index + 1}</td>
            <td>Request #{request._id}</td>
            <td>{(index +3) *4} days remaining</td>
        </tr>
    );
    return (
        <div className="container">
            <table className="table table-striped">
                <tbody>
                    {tableItems}
                </tbody>
            </table>

            <div className="toggle-div">
            </div>

        </div>
    );
}

export default InboxItem;
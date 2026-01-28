import type { Passenger } from './PassengerCard';

interface PassengerDetailsProps {
    passenger: Passenger | null;
}

function PassengerDetails({ passenger }: PassengerDetailsProps) {

    if(!passenger) {
        return <div>No passenger selected.</div>;
    }

    return (
        <div style={{border: '1px solid black', padding: '100px', margin: '10px', height: '300px', width: '300px'}}>
            <h2>Passenger Details</h2>
            <p><strong>Name:</strong> {passenger.firstName} {passenger.lastName}</p>
            <p><strong>Type:</strong> {passenger.paxType}</p>
            <p><strong>Seat:</strong> {passenger.seat ? passenger.seat : "Not Assigned"}</p>
            <div>
                <h3>Document:</h3>
                {passenger.document ? (
                    <div>
                        <p><strong>Type: </strong> {passenger.document.type}</p>
                        <p><strong>Number: </strong> {passenger.document.number || "Not Provided"}</p>
                        <p><strong>Expiry Date: </strong> {passenger.document.expiryDate || "Not Provided"}</p>
                    </div>
                ) : (
                    <p>No document information available.</p>
                )}
            </div>
            {passenger.dateOfBirth && (
                <p><strong>Date of Birth:</strong> {passenger.dateOfBirth}</p>
            )}
        </div>
    );
}
export default PassengerDetails;
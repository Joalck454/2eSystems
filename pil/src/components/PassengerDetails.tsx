/* PassengerDetails.tsx - Jack Fuhrer
Component to display detailed passenger info when selected.
*/

import type { Passenger } from './PassengerCard';
import { isDocumentExpired } from '../validChecks';

interface PassengerDetailsProps {
    passenger: Passenger | null;
}

function PassengerDetails({ passenger }: PassengerDetailsProps) {

    if (!passenger) { // No passenger selected with basic placeholder
        return <div className="passengerDetails">No passenger selected.</div>
    }

    return ( // Display detailed info for selected passenger
        <div className="passengerDetails">
            <h2>Passenger Details</h2>
            <p><strong>ID:</strong> {passenger.id}</p>
            <p><strong>Name:</strong> {passenger.firstName} {passenger.lastName}</p>
            <p><strong>Type:</strong> {passenger.paxType}</p>
            <p><strong>Seat:</strong> {passenger.seat ? passenger.seat : "Not Assigned"}</p>
            {passenger.dateOfBirth && (
                <p><strong>Date of Birth:</strong> {passenger.dateOfBirth}</p>
            )}
            <div>
                <h3>Document:</h3>
                {passenger.document ? ( // Check if document exists / prefill info incase missing
                    <div className='documentInfo'>
                        <p><strong>Type: </strong> {passenger.document.type}</p>
                        <p><strong>Number: </strong> {passenger.document.number || "Not Provided"}</p>
                        <p><strong>Expiry Date: </strong> {passenger.document.expiryDate || "Not Provided"} <br />
                            {isDocumentExpired(passenger) && <span style={{ color: 'red' }}> (Expired)</span>}
                        </p>
                    </div>
                ) : (
                    <p>No document information available.</p>
                )}
            </div>
            <div > {/* If Any Special Criteria is met, display here */}
                {passenger.notes && passenger.notes.length > 0 && (
                    <p style={{ maxWidth: '200px' }}><strong>Notes:</strong><br />{passenger.notes.join(", ")}</p>)}
                {passenger.specialAssistance && passenger.specialAssistance.length > 0 && (
                    <p><strong>Special Assistance Required:</strong><br />{passenger.specialAssistance.map(sa => sa.text).join(", ")}</p>)}
                {passenger.mealPreferences && passenger.mealPreferences.length > 0 && (
                    <p><strong>Meal Preferences:</strong><br />{passenger.mealPreferences.map(mp => mp.text).join(", ")}</p>)}
                {passenger.travellingWith && (
                    <p><strong>Travelling With:</strong> {passenger.travellingWith}</p>)}
            </div>
        </div>
    );
}
export default PassengerDetails;
export interface Special {
    code: string;
    text: string;
}

export interface Meals {
    code: string;
    text: string;
}

export interface Document {
  type: string;
  number: string | null;
  expiryDate: string | null;
}

export interface Passenger {
    id: string;
    firstName: string;
    lastName: string;
    paxType: "ADT" | "CHD" | "INF";
    seat: string | null;
    document: Document | null;
    // Optional 
    dateOfBirth?: string; 
    notes?: string[]; 
    specialAssistance?: Special[];
    mealPreferences?: Meals[];
    travellingWith?: string; 
}

interface PassengerCardProps {
    passenger: Passenger;
}

function PassengerCard( {passenger} : PassengerCardProps) {
    return (
        <div>
            <h3>
                {passenger.firstName} {passenger.lastName} [{passenger.paxType}]<br/> 
            </h3>
            <p> <strong>Seat:</strong> {passenger.seat ? passenger.seat : "Not Assigned"}
            </p>
            {passenger.dateOfBirth && (
            <p >Date of birth: {passenger.dateOfBirth}</p>)}
            {passenger.notes && passenger.notes.length > 0 && (
            <p>Has notes</p>)}
            {passenger.specialAssistance && passenger.specialAssistance.length > 0 && (
            <p>Special Assistance Required</p>)}
        </div>
    )

}

export default PassengerCard;
/* PassengerCard.tsx - Jack Fuhrer
Component to display basic passenger info in a card format.
*/ 

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
    onSelect: (passenger: Passenger) => void; // Optional callback for selection
    isSelected?: boolean; // indicate if this card is selected
}

function PassengerCard( {passenger, onSelect, isSelected} : PassengerCardProps) {
    const showIcon = extra(passenger);
    
    return (
        <div onClick={() => onSelect && onSelect(passenger)} 
            className={`PassengerList ${isSelected ? 'selected' : ''}`} // template literal to toggle class
            /* style={{border: '1px solid black', padding: '10px', margin: '10px', cursor: 'pointer' }} */>
            {showIcon && <img src="./src/assets/bulb.png" width="30" height="20"alt="Assistance Required"/>}
            <h3>
                {/* passenger.id TEMP REMOVE THIS */} {passenger.firstName} {passenger.lastName} [{passenger.paxType}]<br/> 
            </h3>
            <p> 
                <strong>Seat:</strong> {passenger.seat ? passenger.seat : "Not Assigned"}
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

function extra(passenger: Passenger): boolean {
    /*Note: This function checks if the passenger has any extra requirements 
        NEED TO CONTINUE THIS
    */

    //if missing seat
    if(!passenger.seat){
        return true;
    }

    //if special assistance
    if(passenger.specialAssistance && passenger.specialAssistance.length > 0){
        return true;
    }

    //if any notes
    if(passenger.notes && passenger.notes.length > 0){
        return true;
    }

    //if mealpreferences
    if(passenger.mealPreferences && passenger.mealPreferences.length > 0){
        return true;
    }
    return false;
}

export default PassengerCard;
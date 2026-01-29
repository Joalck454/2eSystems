/* PassengerCard.tsx - Jack Fuhrer
Component to display passenger info in a list or card format.
*/ 
import bulbIcon from '../assets/bulb.png';

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
            className={`passengerCard ${isSelected ? 'selected' : ''}`}>
            {showIcon && (
                <img 
                    src={bulbIcon} 
                    title="Assistance Required" 
                    width="30" 
                    height="20" 
                    alt="Assistance Required"/>
                )}
            <h3>
             {passenger.firstName} {passenger.lastName}<br/> 
            </h3>
            <p> 
                <strong>Seat:</strong> {passenger.seat ? passenger.seat : "Not Assigned"}
            </p>
            {passenger.dateOfBirth && (
            <p> <strong>DOB:</strong> {passenger.dateOfBirth}</p>)}
            {passenger.travellingWith && (
            <p> <strong>Travelling With:</strong> {passenger.travellingWith}</p>)}
        </div>
    )
}

function extra(passenger: Passenger): boolean {
    /*Note: This function checks if the passenger has any extra requirements that need attention.*/
    const haveDocument = passenger.document !== null;
    if(!haveDocument){
        return true;
    }
    
    const documentNumber = passenger.document?.number;
    const documentExpiry = passenger.document?.expiryDate;
    //if missing document number or expiry date
    if(!documentNumber || !documentExpiry){
        return true;
    }

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

    //if meal preferences
    if(passenger.mealPreferences && passenger.mealPreferences.length > 0){
        return true;
    }
    return false;
}

export default PassengerCard;
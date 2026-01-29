/* Used for modularization of functions across components*/

import type { Passenger } from "./components/PassengerCard";

//Function to check if Document is expired
export function isDocumentExpired(passenger: Passenger): boolean {
    if (!passenger.document || !passenger.document.expiryDate) {
        return false; // if missing either document or expdate 
    }

    const expiryDate = new Date(passenger.document.expiryDate);
    const today = new Date();
    return expiryDate < today;
}

export function extra(passenger: Passenger): boolean {
    /*Note: This function checks if the passenger has any extra requirements that need attention.*/
    const haveDocument = passenger.document !== null;
    if (!haveDocument) {
        return true;
    }

    const documentNumber = passenger.document?.number;
    const documentExpiry = passenger.document?.expiryDate;
    //if missing document number or expiry date
    if (!documentNumber || !documentExpiry) {
        return true;
    }

    //if missing seat and not infant
    if (!passenger.seat && passenger.paxType !== "INF") {
        return true;
    }

    //if special assistance
    if (passenger.specialAssistance && passenger.specialAssistance.length > 0) {
        return true;
    }

    //if any notes
    if (passenger.notes && passenger.notes.length > 0) {
        return true;
    }

    //if meal preferences
    if (passenger.mealPreferences && passenger.mealPreferences.length > 0) {
        return true;
    }

    //if document is expired
    if (isDocumentExpired(passenger)) {
        console.log("Expired checked");
        return true;

    }

    return false;

}
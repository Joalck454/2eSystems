import { useState, useEffect } from 'react'
import './App.css'
import data from './data/data.json';
import PassengerCard, { type Passenger } from './components/PassengerCard';
import PassengerDetails from './components/PassengerDetails';


interface Flight {
  flightNumber: string;
  from: string;
  to: string;
  departureTime: string;
  aircraftType: string;
}

function App() {
  // const [count, setCount] = useState(0);
  const [passengers, setPassengers] = useState<Passenger[]>([]); //
  const [selectedPassenger, setSelectedPassenger] = useState<Passenger | null>(null); // New state for selected passenger 

  // Add Flight info state (May add to as component later)
  const [flight, setFlight] = useState<Flight | null>(null);


  useEffect(() => {
    // data.passengers comes from JSON
    setPassengers(data.passengers as Passenger[]); // Set passengers from data
    setFlight(data.flight as Flight); // Set flight info
  }, []);

  return (
    <div className="app">

      {flight && (
        <div className='flightInfo'>
          <h2>Flight Information</h2>
          <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
          <p><strong>From:</strong> {flight.from}</p>
          <p><strong>To:</strong> {flight.to}</p>
          <p><strong>Departure Time:</strong> {flight.departureTime}</p>
          <p><strong>Aircraft Type:</strong> {flight.aircraftType}</p>
        </div>
      )}

      <h1>Passenger Management</h1> 
      <div className='layout'>
        <div className='passengerListContainer'>
          <div className='passengerList'>
            {passengers.length === 0 ? (
              <p>No passengers found.</p>
            ) : (
              passengers.map((pax) => (
                <PassengerCard
                  key={pax.id}
                  passenger={pax}
                  onSelect={(s) => setSelectedPassenger(s)} // Set selected passenger on click
                  isSelected={selectedPassenger?.id === pax.id} // check if this card is selected
                />
              ))
            )}
          </div>
        </div>
        <div>
          <PassengerDetails passenger={selectedPassenger} />
        </div>
      </div>
    </div>
  )
}

export default App




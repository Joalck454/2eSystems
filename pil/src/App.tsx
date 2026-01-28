import { useState, useEffect } from 'react'
import './App.css'

import data from './data/data.json';
import PassengerCard, { type Passenger } from './components/PassengerCard';
import PassengerDetails from './components/PassengerDetails';

function App() {
  // const [count, setCount] = useState(0);
  const [passengers, setPassengers] = useState<Passenger[]>([]); //
  const [selectedPassenger, setSelectedPassenger] = useState<Passenger | null>(null); // New state for selected passenger 


  useEffect(() => {
    // data.passengers comes from your JSON
    setPassengers(data.passengers as Passenger[]);
  }, []);

  return (
    <>
      <div> <h1>Passenger Management</h1> {/*/ Temp Heading */}
        <div style={{ display: "flex", gap: "20px" }}>

          <div>
            {passengers.map((pax) => (
              <PassengerCard
                key={pax.id}
                passenger={pax}
                onSelect={(s) => setSelectedPassenger(s)} />
            ))}
          </div>

          <div>
            <PassengerDetails passenger={selectedPassenger} />
          </div>


          {/* <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}

        </div>
      </div>
    </>
  )
}

export default App

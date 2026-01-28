import { useState, useEffect } from 'react'
import './App.css'

import data from './data/data.json';
import PassengerCard, {type Passenger} from './components/PassengerCard';

function App() {
  const [count, setCount] = useState(0);
  const [passengers, setPassengers] = useState<Passenger[]>([]);

  useEffect(() => {
    // data.passengers comes from your JSON
    setPassengers(data.passengers as Passenger[]);
  }, []);

  return (
    <>
    <div>
      <h1>Passenger Management</h1>
      {passengers.map((pax) => (
        <PassengerCard key={pax.id} passenger={pax} />
      ))}
    </div>
      <h1>Vite + React</h1>
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
      </p>


    </>
  )
}

export default App

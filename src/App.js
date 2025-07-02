import React, {useState} from "react";
import "./App.css";
import FlightResults from "./components/FlightResults";
import SearchForm from "./components/SearchForm";
const mockData = require("../src/mockFlights.json");

function App() {
  const [flightsResults, setFlightResults] = useState(null);

  const handleSearch = async (formData) => {
    const res = await fetch('/.netlify/functions/searchFlights', {
      method: 'POST',
      body: JSON.stringify({
        from : formData.from,
        to : formData.to,
        date : formData.date,
        travelers : formData.travelers,
        cabinClass : formData.cabinClass,
        originEntityId : formData.originEntityId,
        destinationEntityId : formData.destinationEntityId,
      }),
    });
    const data = await res.json();
    setFlightResults(mockData || []);
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Spotter Flights
      </h1>
      <SearchForm onSearch={handleSearch} />
      {flightsResults && <FlightResults results={flightsResults} />}
    </div>
  );
}

export default App;

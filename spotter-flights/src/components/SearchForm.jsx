import React, { useState } from "react";
import AutocompleteInput from "./AutocompleteInput";

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    travelers: 1,
    cabinClass: "Economy",
    originEntityId: "",
    destinationEntityId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 max-w-2xl mx-auto mt-8 grid gap-4 sm:grid-cols-2"
    >
      <AutocompleteInput
        label="From"
        onSelect={(selectedAirport) =>
          setFormData({
            ...formData,
            from: selectedAirport?.skyId,
            originEntityId: selectedAirport?.entityId,
          })
        }
      />
      <AutocompleteInput
        label="To"
        onSelect={(selectedAirport) =>
          setFormData({
            ...formData,
            to: selectedAirport?.skyId,
            destinationEntityId: selectedAirport?.entityId,
          })
        }
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2"
        required
      />
      <input
        type="number"
        name="travelers"
        value={formData.travelers}
        onChange={handleChange}
        min={1}
        className="border rounded-lg px-4 py-2"
      />
      <select
        name="cabinClass"
        value={formData.cabinClass}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 col-span-full sm:col-span-1"
      >
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first">First</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-6 rounded-lg col-span-full hover:bg-blue-700 transition"
      >
        Search Flights
      </button>
    </form>
  );
};

export default SearchForm;

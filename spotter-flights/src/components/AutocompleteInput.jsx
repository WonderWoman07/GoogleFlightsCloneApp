import React, { useState, useEffect } from "react";
import axios from "axios";

const API_HOST = "sky-scrapper.p.rapidapi.com";
const API_KEY = "10005c8679msh94e0517070a360cp1682b7jsnb6cf236d124e"; // Replace this

const airportCache = new Map();

const AutocompleteInput = ({ label, onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length < 3) return; // Fix: trigger only if 3 or more characters
      fetchAirports(query);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchAirports = async (input) => {
    const lower = input.toLowerCase();

    if (airportCache.has(lower)) {
      setSuggestions(airportCache.get(lower));
      setIsDropdownOpen(true);
      return;
    }

    try {
      const res = await axios.get(
        // `https://${API_HOST}/api/v1/flights/searchAirport`,
        {
          params: {
            query: lower,
            locale: "en-US",
          },
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST,
          },
        }
      );
      airportCache.set(lower, res.data.data);
      setSuggestions(res.data.data);
      setIsDropdownOpen(true);
    } catch (error) {
      console.log("Autocomplete API error : ", error);
    }
  };

  const handleSelect = (airport) => {
    const { skyId } = airport;
    const entityId = airport?.navigation?.entityId;
    const displayName = airport?.presentation?.suggestionTitle;

    setQuery(displayName);
    setSuggestions([]);
    setIsDropdownOpen(false);

    onSelect({
      skyId,
      entityId,
      displayName,
    });
  };

  return (
    <div className="relative">
      <label className="block text-sm mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsDropdownOpen(true);
        }}
        placeholder="Enter City or Airport"
        className="border px-4 py-2 rounded-lg w-full"
      />
      {isDropdownOpen && suggestions?.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-md max-h-60 overflow-y-auto shadow-lg">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-blue-100 cursor-pointer text-sm"
              onClick={() => handleSelect(item)}
            >
              {item.presentation?.suggestionTitle}{" "}
              <span className="text-gray-500">
                – {item.presentation?.subtitle}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;

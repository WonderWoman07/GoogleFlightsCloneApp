✈️ Spotter Flights - Google Flights Clone (Frontend Assignment)
A responsive React application that replicates the core functionality of Google Flights using mock data and optional API integration via Netlify Functions. Built as part of a frontend assessment for Spotter.

🚀 Features
Autocomplete airport search
One-way and round-trip search forms

Flight results grid with:
Airline logo
Departure/arrival times
Duration and price
Responsive design (mobile & desktop)
Integrated with RapidAPI's Sky-Scrapper (fallbacks to mock data)
Netlify Functions for secure backend API calls

🔧 Tech Stack
React 18+

Tailwind CSS 3

Axios

Netlify Functions (Serverless)

RapidAPI (Sky-Scrapper)

Mock JSON fallback

Deployed via Netlify

📂 Folder Structure
src/
├── components/
│   ├── AutocompleteInput.jsx
│   ├── SearchForm.jsx
│   └── FlightResults.jsx
├── mockFlights.json
├── App.js
└── index.js
netlify/functions/
├── searchAirport.js
└── searchFlights.js

🖼️ Preview
[Insert a Loom video link here or Netlify preview screenshot]

🛠️ Local Development
Clone the repo:

git clone https://github.com/your-username/spotter-flights.git
cd spotter-flights

Install dependencies:
npm install

Create a .env file in the root and add:
RAPIDAPI_KEY=your_rapidapi_key_here

Start development server:
npm start

Netlify Functions will auto-proxy requests during development.

🌐 Live Demo
Deployed at: https://remarkable-dragon-4bd1fd.netlify.app/

🔄 Mock vs Real API
By default, the app uses real API via Netlify Functions.
If the API returns a CAPTCHA or fails, it will fall back to mockFlights.json data.

✅ Assignment Notes
Built in < 16 hours.
Mobile responsive
Demonstrates clean UI, reusable components, and fallback logic

🙌 Acknowledgements
Sky-Scrapper API via RapidAPI
Netlify for deployment and serverless functions
Tailwind CSS for utility styling

Made with ❤️ for Spotter
import axios from "axios";

const API_HOST = "sky-scrapper.p.rapidapi.com";

const searchFlights = async ({
  from,
  to,
  date,
  travelers,
  cabinClass,
  originEntityId,
  destinationEntityId,
}) => {
  if (!from || !to || !date || !originEntityId || !destinationEntityId) return;

  try {
    const response = await axios.get(
      // `https://${API_HOST}/api/v1/flights/searchFlights`,
      ``,
      {
        params: {
          originSkyId: from,
          destinationSkyId: to,
          originEntityId: originEntityId,
          destinationEntityId: destinationEntityId,
          date: date,
          cabinClass: cabinClass,
          adults: travelers,
          sortBy: "best",
          currency: "USD",
          market: "en-US",
          countryCode: "US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Flight API error:", error);
    return null;
  }
};

export default searchFlights;

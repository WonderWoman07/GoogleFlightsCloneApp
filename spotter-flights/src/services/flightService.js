import axios from "axios";

const API_HOST = "sky-scrapper.p.rapidapi.com";
const API_KEY = "10005c8679msh94e0517070a360cp1682b7jsnb6cf236d124e";

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
          "X-RapidAPI-Key": API_KEY,
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

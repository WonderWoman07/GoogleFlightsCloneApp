const axios = require("axios");

exports.handler = async (event) => {
  const {
    from,
    to,
    date,
    travelers,
    cabinClass,
    originEntityId,
    destinationEntityId,
  } = JSON.parse(event.body);

  const options = {
    method: "GET",
    // url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights",
    url: "",
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
      "x-rapidapi-key": process.env.RAPIDAPI_KEY, // Store this securely in Netlify UI
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "API request failed",
        details: error.message,
      }),
    };
  }
};

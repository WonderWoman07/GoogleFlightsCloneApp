const axios = require("axios");

exports.handler = async function (event) {
  const query = event.queryStringParameters.query;
  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Query parameter is required." }),
    };
  }

  const options = {
    method: "GET",
    // url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
    params: {
      query,
      locale: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const res = await axios.request(options);
    return {
      statusCode: 200,
      body: JSON.stringify(res.data),
    };
  } catch (error) {
    console.error("Error in searchAirport.js:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch airport data" }),
    };
  }
};

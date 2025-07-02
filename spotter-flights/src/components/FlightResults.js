const FlightResults = ({ results }) => {
    if (!results.length) return <p className="text-center mt-6 text-gray-500">No flights found.</p>;
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {results.map((itinerary, index) => {
          const [onward, returnLeg] = itinerary.legs;
          return (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h2 className="text-lg font-semibold">
                    {onward.origin.displayCode} → {onward.destination.displayCode}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(onward.departure).toLocaleString()} → {new Date(onward.arrival).toLocaleString()}
                  </p>
                </div>
                <span className="text-lg font-bold text-green-600">{itinerary.price.formatted}</span>
              </div>
  
              <div className="flex justify-between items-center border-t pt-2 mt-2">
                <div>
                  <h2 className="text-lg font-semibold">
                    {returnLeg.origin.displayCode} → {returnLeg.destination.displayCode}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(returnLeg.departure).toLocaleString()} → {new Date(returnLeg.arrival).toLocaleString()}
                  </p>
                </div>
                {onward?.carriers?.marketing?.[0]?.logoUrl && (
                  <img
                    src={onward.carriers.marketing[0].logoUrl}
                    alt="airline logo"
                    className="w-10 h-10 object-contain"
                  />
                )}
              </div>
  
              <p className="mt-2 text-sm text-gray-600">
                Duration: {onward.durationInMinutes} min onward, {returnLeg.durationInMinutes} min return
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default FlightResults;
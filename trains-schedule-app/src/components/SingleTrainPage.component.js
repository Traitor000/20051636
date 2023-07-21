import React from 'react';
import { useParams } from 'react-router-dom'; // Use useParams to get the trainNumber from the URL
import allTrainsData from './trainData';

const SingleTrainPage = () => {
  const { trainNumber } = useParams(); // Get the trainNumber from the URL

  // Find the train with the matching trainNumber from the allTrainsData array
  const train = allTrainsData.find((train) => train.trainNumber === trainNumber);

  // If the train with the given trainNumber is not found, display an error message
  if (!train) {
    return <div>Train not found.</div>;
  }

  return (
    <div className="single-train-page">
      <div className="train-details">
        <h1>{train.name}</h1>
        <img src={`/images/${train.image}`} alt={train.name} /> {/* Use the relative path to the image */}
        <p>
          Origin: {train.origin} | Destination: {train.destination}
        </p>
        <p>Departure Time: {train.departureTime}</p>
        <p>Arrival Time: {train.arrivalTime}</p>
        <p>Duration: {train.duration}</p>
        <p>Capacity: {train.capacity}</p>
        <p>Price: {train.price}</p>
      </div>
    </div>
  );
};

export default SingleTrainPage;

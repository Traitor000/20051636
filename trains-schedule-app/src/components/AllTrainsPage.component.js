import React from 'react';
import TrainCard from './TrainCard'; // Create a TrainCard component for displaying single train details
import allTrainsData from './trainData'; 


const AllTrainsPage = () => {
  return (
    <div className="all-trains-page">
      <h1>All Trains</h1>
      <div className="train-cards-container">
        {allTrainsData.map((train) => (
          <TrainCard key={train.trainNumber} train={train} />
        ))}
      </div>
    </div>
  );
};

export default AllTrainsPage;

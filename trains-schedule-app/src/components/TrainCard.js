import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

const TrainCard = ({ train }) => {
  return (
    <Card sx={{ maxWidth: 400, marginBottom: 20 }}>
      <img src={train.image} alt={`Train ${train.trainNumber}`} style={{ maxWidth: '100%', height: 'auto' }} />
      <CardContent>
        <Typography variant="h5" component="div">
          {train.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Train Number: {train.trainNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Departure Time: {train.departureTime}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sleeper Seats Available: {train.capacity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price for Sleeper: {train.price}
        </Typography>
        <Button component={Link} to={`/trains/${train.trainNumber}`} variant="contained">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default TrainCard;

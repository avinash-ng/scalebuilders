import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoomCard, { IRoomCardProps } from './components/RoomCard';
import RoomCardList from './components/RoomCardList';
import RCollectionCard, { ICardProps } from './components/RoomCollectionCard';
import RoomCollectionCard from './components/RoomCollectionCard';
import { Grid } from '@material-ui/core';
const list:ICardProps[] = [
  {cardName: 'Kitchen', cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', maxWidth: 330,aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.'},
  {cardName: 'BathRoom', maxWidth: 330, cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.'},
  // {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
  // {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'}
]
function App() {
  return (
    <Grid container direction="row" spacing={1}>
        {list.map((each: ICardProps, index: number) => (
        <Grid item >
            <RoomCollectionCard 
                cardName={list[0].cardName}
                cardImage={list[0].cardImage}
                maxWidth={list[0].maxWidth} 
            />
        </Grid> ))}
    </Grid>
  );
}

export default App;

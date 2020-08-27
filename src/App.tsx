import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoomCard, { IRoomCardProps } from './components/RoomCard';
import RoomCardList from './components/RoomCardList';
const list:IRoomCardProps[] = [
  {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
  {roomName: 'BathRoom', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
  // {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
  // {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'}
]
function App() {
  return (
    <RoomCardList roomsList={list}></RoomCardList>
  );
}

export default App;

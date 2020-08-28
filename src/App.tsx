import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoomCard, { IRoomCardProps } from './components/organisms/cards/rooms/RoomCard';
import RoomCardList from './components/organisms/cards/rooms/RoomCardList';
import LayoutCard, { ILayoutCardProps } from './components/organisms/cards/layouts/LayoutCard';
import LayoutCardList from './components/organisms/cards/layouts/LayoutCardList';
// import CollectionCard, { ICollectionCardProps } from './components/organisms/cards/collections/CollectionCard';
// import CollectionCardList from './components/organisms/cards/collections/CollectionCardList';

const list:IRoomCardProps[] = [
  {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
  {roomName: 'BathRoom', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
  // {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
  // {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'}
]
const list1:ILayoutCardProps[] = [
  {layoutName: 'L Shape', layoutImage: 'https://global-uploads.webflow.com/5b44edefca321a1e2d0c2aa6/5c9100d370f1f42ee1d22100_Dimensions-Guide-Layouts-Kitchens-L-Shape-OG.jpg'},
  {layoutName: 'Bar Shape', layoutImage: 'https://www.houseplanshelper.com/images/u_shaped_kitchen_wall_surround.jpg'},
  {layoutName: 'Open', layoutImage: 'https://www.houseplanshelper.com/images/u_shaped_kitchen_wall_surround.jpg'}

]
// const list2:ICollectionCardProps[]=[
//                 {collectionName: 'Lagom',             
//                 collectionImage:'https://img4.nbstatic.in/tr:w-500/584f99ccc9e77c000d1749c9.jpg',
//                 aboutCollection:'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.'
// }
// ]
function App() {
  return (
    <div>
    <RoomCardList roomsList={list}></RoomCardList>
    <LayoutCardList layoutsList={list1}></LayoutCardList>
    {/* <CollectionCardList collectionsList={list2}></CollectionCardList> */}
    </div>
  );
}

export default App;

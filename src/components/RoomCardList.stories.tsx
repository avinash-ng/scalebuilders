import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";
import RoomCardList from "./RoomCardList";
import React from "react";
import { IRoomCardProps } from "./RoomCard";
import { Grid } from "@material-ui/core";
const list:IRoomCardProps[] = [
    {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
    {roomName: 'BathRoom', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
    {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'},
    {roomName: 'Kitchen', roomImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'}
  ]
storiesOf('RoomCardList', module).addDecorator(withKnobs)

.add('list of rooms ', () => (
    <Grid item><RoomCardList roomsList={list}></RoomCardList></Grid>
))
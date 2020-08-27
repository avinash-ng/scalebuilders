import { addDecorator, storiesOf } from "@storybook/react"
import RoomCard from "./RoomCard"
import { text, withKnobs } from "@storybook/addon-knobs"
import React from "react"
import { Grid } from "@material-ui/core"

storiesOf('RoomCard', module).addDecorator(withKnobs)
.add("Kitchen Card", () => (
    <Grid container><Grid item><RoomCard roomName={text('name', "Kitchen")} roomImage={text('imageURL', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg')}></RoomCard></Grid></Grid>
))
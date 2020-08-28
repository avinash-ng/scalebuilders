import { addDecorator, storiesOf } from "@storybook/react"
import LayoutCard from "./LayoutCard"
import { text, withKnobs } from "@storybook/addon-knobs"
import React from "react"
import { Grid } from "@material-ui/core"

storiesOf('LayoutCard', module).addDecorator(withKnobs)
.add("Layout Card", () => (
    <Grid container><Grid item><LayoutCard layoutName={text('name', "L Shape")} layoutImage={text('imageURL', 'https://global-uploads.webflow.com/5b44edefca321a1e2d0c2aa6/5c9100d370f1f42ee1d22100_Dimensions-Guide-Layouts-Kitchens-L-Shape-OG.jpg')}></LayoutCard></Grid></Grid>
))
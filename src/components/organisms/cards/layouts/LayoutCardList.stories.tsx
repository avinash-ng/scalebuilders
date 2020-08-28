import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";
import LayoutCardList from "./LayoutCardList";
import React from "react";
import { ILayoutCardProps } from "./LayoutCard";
import { Grid } from "@material-ui/core";
const list:ILayoutCardProps[] = [
    {layoutName: 'L Shape', layoutImage: 'https://global-uploads.webflow.com/5b44edefca321a1e2d0c2aa6/5c9100d370f1f42ee1d22100_Dimensions-Guide-Layouts-Kitchens-L-Shape-OG.jpg'},
    {layoutName: 'Bar Shape', layoutImage: 'https://www.houseplanshelper.com/images/u_shaped_kitchen_wall_surround.jpg'},
    {layoutName: 'Layout', layoutImage: 'https://www.houseplanshelper.com/images/u_shaped_kitchen_wall_surround.jpg'},

  ]
storiesOf('LayoutCardList', module).addDecorator(withKnobs)

.add('List of layouts ', () => (
    <Grid item><LayoutCardList layoutsList={list}></LayoutCardList></Grid>
))
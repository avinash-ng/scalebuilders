import { storiesOf } from "@storybook/react";
import RoomCollectionCard, { ICardProps } from "./RoomCollectionCard";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import React from "react";
import { Grid } from "@material-ui/core";
// const list:ICardProps[] = [
//     {cardName: text('name','Kitchen'), cardImage: text('imageURL', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'), maxWidth: number('maxwidth',330) ,aboutCard: text('about', 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.')},
//     {cardName: text('name','Kitchen'), cardImage: text('imageURL', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'), maxWidth: number('maxwidth',330) ,aboutCard: text('about', 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.')},
//     {cardName: text('name','Kitchen'), cardImage: text('imageURL', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'), maxWidth: number('maxwidth',330) ,aboutCard: text('about', 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.')},
//     {cardName: text('name','Kitchen'), cardImage: text('imageURL', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg'), maxWidth: number('maxwidth',330) ,aboutCard: text('about', 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.')},

// ]
const list:ICardProps[] = [
    {cardName: 'Kitchen', cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', maxWidth: 330,aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.'},
    {cardName: 'BathRoom', maxWidth: 330, cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.'},
    {cardName: 'BathRoom', maxWidth: 330, cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.'},
    {cardName: 'BathRoom', maxWidth: 330, cardImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-hbx110119wholehome-015-1572549271.jpg', aboutCard: 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.'},
]

storiesOf('RoomCollectionCard', module).addDecorator(withKnobs)
.add('default', () => (
    <RoomCollectionCard cardName={text('name', list[0].cardName)} cardImage={text('image', list[0].cardImage)} maxWidth={number('width', list[0].maxWidth)} aboutCard={text('about', list[0].aboutCard)}></RoomCollectionCard>
))
.add('list of cards', () => (
<Grid container direction="row" spacing={1}>{list.map((each: ICardProps, index: number) => (
    <Grid item >
        <RoomCollectionCard {...each}></RoomCollectionCard>
    </Grid>
))}</Grid>
))
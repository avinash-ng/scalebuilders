import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import CollectionCardList from "./CollectionCardList";
import React from "react";
import { ICollectionCardProps } from "./CollectionCard";
const items: ICollectionCardProps[] = [
    {collectionImage:'https://img4.nbstatic.in/tr:w-500/584f99ccc9e77c000d1749c9.jpg', aboutCollection:'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.', collectionName:'Logam'},
    {collectionImage:'https://img4.nbstatic.in/tr:w-500/584f99ccc9e77c000d1749c9.jpg', aboutCollection:'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.', collectionName:'Studio'},
    {collectionImage:'https://img4.nbstatic.in/tr:w-500/584f99ccc9e77c000d1749c9.jpg', aboutCollection:'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.', collectionName:'Clasico'}
]
storiesOf('CollectionCardList', module).addDecorator(withKnobs)
.add('list of collections', () => (
    <CollectionCardList itemsList={items}></CollectionCardList>
))
import { storiesOf } from "@storybook/react";
import CollectionCard from "./CollectionCard";
import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Grid } from "@material-ui/core";

storiesOf('Collection Card', module).addDecorator(withKnobs)
.add('default card', () => (
    
            <CollectionCard 
                collectionName={text('name', 'Lagom')} 
                collectionImage={text('imageURL', 'https://img4.nbstatic.in/tr:w-500/584f99ccc9e77c000d1749c9.jpg')} 
                aboutCollection={text('about', 'Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current.')}>
            </CollectionCard>
      
))
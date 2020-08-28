import CollectionCard, { ICollectionCardProps } from "./CollectionCard"
import { Grid } from "@material-ui/core"
import React from "react"

interface ICollectionCardListProps {
    itemsList: ICollectionCardProps[]
}
const CollectionCardList:React.FC<ICollectionCardListProps> = ({itemsList}) => {
    return (
        <Grid container direction="row" spacing={2}>
            {itemsList && itemsList.map((item: ICollectionCardProps, key: number) => (
                <Grid item>
                    <CollectionCard {...item}></CollectionCard>
                </Grid>
            ))}
        </Grid>
    )
}
export default CollectionCardList
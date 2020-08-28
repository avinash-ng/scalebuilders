import { Grid, makeStyles } from "@material-ui/core"
import LayoutCard, { ILayoutCardProps } from "./LayoutCard"
import React, { useEffect } from "react"
interface ILayoutListProps{
    layoutsList: ILayoutCardProps[]
}
const useStyles = makeStyles((theme) => ({
    
}))
const LayoutCardList:React.FC<ILayoutListProps> = ({layoutsList}) => {
    const classes = useStyles();
    useEffect(() => {
        console.log("Hello world rendering layoutcard list")
    })
    return (
        <Grid container direction="row" spacing={3} justify="center" >
            
                {layoutsList.map((layout:ILayoutCardProps, index:number) => (
                    <Grid item>
                        <LayoutCard {...layout}></LayoutCard>
                    </Grid>
                    
                ))}
                
            
        </Grid>
    )
}
export default LayoutCardList
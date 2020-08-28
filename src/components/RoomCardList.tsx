import { Grid, makeStyles } from "@material-ui/core"
import RoomCard, { IRoomCardProps } from "./RoomCard"
import React, { useEffect } from "react"
interface IRoomListProps{
    roomsList: IRoomCardProps[]
}
const useStyles = makeStyles((theme) => ({
    
}))
const RoomCardList:React.FC<IRoomListProps> = ({roomsList}) => {
    const classes = useStyles();
    useEffect(() => {
        console.log("Hello world rendering roomcard list")
    })
    return (
        <Grid container direction="row" spacing={3} justify="center" >
            
                {roomsList.map((room:IRoomCardProps, index:number) => (
                    <Grid item>
                        <RoomCard {...room}></RoomCard>
                    </Grid>
                    
                ))}
                
            
        </Grid>
    )
}
export default RoomCardList
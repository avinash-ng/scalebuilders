import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, makeStyles, Theme, createMuiTheme, ThemeProvider } from '@material-ui/core';
export interface IRoomCardProps {
    roomImage?: string
    roomName?: string
}
const useStyles = makeStyles((theme) => ({
    roomcard: {
    //    maxWidth: '330px',
       borderRadius: '4px'
    },
    image: {
        objectFit: 'cover',
        // width: '100%',
        width: 330,
        height: 172,
        borderRadius: '4px',
        
    }
}));

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root :{
                fontSize: '18px',
                letterSpacing: '0.5px'
            }
        },
        MuiCardContent: {
            root: {
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                // paddingBottom: 0,
                '&:last-child': {
                    paddingBottom: '12px'
                }
            }
        }
    }
})
const RoomCard:React.FC<IRoomCardProps> = ({roomImage, roomName}) => {
    const classes = useStyles();
    const [raised, setRaised] = useState<boolean>(false);
    const raiseHandler = () => {
        setRaised(!raised);
    }
    return (
            
        
            <ThemeProvider theme = {theme}>
                <Card raised={raised} onMouseOver={raiseHandler} onMouseOut={raiseHandler} className={classes.roomcard}>
                    <CardContent>
                        <Grid container direction="column" alignItems="center"  spacing={1}>
                            <Grid item >
                                <img className={classes.image} src={roomImage}></img>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">{roomName}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ThemeProvider>
        
        
    )
}
export default RoomCard
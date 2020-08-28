import React, { useState } from 'react'
import { CardMedia, makeStyles, Card, CardContent, Typography, createMuiTheme, ThemeProvider, Grid } from '@material-ui/core'
export interface ICardProps {
    cardImage: string
    cardName: string
    aboutCard : string 
    maxWidth: number
};
const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '4px',
    },
    title: {
        textAlign: 'center'
    },
    image: {
        objectFit: 'contain',
        width: '100%',
        height: 172,
        borderRadius: '4px',
    }
}));
const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root :{
                fontSize: '18px',
                letterSpacing: '0.5px',
                fontFamily: 'SFProDisplay'
            }
        },
        MuiCardContent: {

            root: {
                '&:last-child': {
                    paddingBottom: 12
                }
            }
            
        }
    }
});
const RoomCollectionCard:React.FC<ICardProps> = ({cardName, cardImage, aboutCard, maxWidth}) => {
    const classes = useStyles()
    const [raised, setRaised] = useState<boolean>(false);
    const raiseHandler = () => {
        setRaised(!raised)
    }   
    return(
        // <Grid item md={4} lg={3}>
            <ThemeProvider theme = {theme}>
                    <Card raised={raised} onMouseOver={raiseHandler} onMouseOut={raiseHandler} className={classes.root} style={{maxWidth: maxWidth}}>
                        <CardMedia
                            className={classes.image}
                            image={cardImage}
                            title={cardName}
                        />
                        <CardContent>
                            {aboutCard !== null ? <Grid container direction="column" justify="flex-start" spacing={1}>
                                            <Grid item>
                                                <Typography variant="h6">{cardName}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1">{aboutCard}</Typography>
                                            </Grid>
                                        </Grid>
                                        :<Typography variant="subtitle1" className={classes.title}>{cardName}</Typography>}
                        </CardContent>
                    </Card>
            </ThemeProvider>
        // </Grid>
    )
}
export default RoomCollectionCard
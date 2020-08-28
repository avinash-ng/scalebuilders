import { makeStyles, Card, CardContent, Grid, Typography, createMuiTheme, ThemeProvider, CardHeader, CardMedia } from "@material-ui/core"
import classes from "*.module.css"
import React, { useState } from "react";

export interface ICollectionCardProps {
    collectionName?: string,
    collectionImage?: string,
    aboutCollection?: string

}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 330
    },
    image: {
        width: '100%',
        height: 172,
        objectFit: 'contain',
        borderRadius: '4px'
    }
}))
const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root :{
                fontSize: '18px',
                letterSpacing: '0.5px',
                fontFamily: 'SFProDisplay'
            }
        },
    }
})
const CollectionCard:React.FC<ICollectionCardProps> = ({collectionName="Lagom", collectionImage="https://img4.nbstatic.in/tr:w-500/584f99ccc9e77c000d1749c9.jpg", aboutCollection="Elegant, refined and graceful.  Clasico lacks garnish or overstated design elements that shout for attention. It is permanently current. "}) => {
    const classes = useStyles();
    const [raised, setRaised] = useState<boolean>(false);
    const raiseHandler = () => {
        setRaised(!raised)
    }   
    return (
        
            <ThemeProvider theme = {theme}>
            <Card raised={raised} onMouseOver={raiseHandler} onMouseOut={raiseHandler} className={classes.root}>
                <CardMedia
                    className={classes.image}
                    image={collectionImage}
                    title={collectionName}
                />
                <CardContent >
                    <Grid container direction="column" justify="flex-start" spacing={1}>
                        <Grid item>
                            <Typography variant="h6">{collectionName}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{aboutCollection}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </ThemeProvider>
        
    )
}
export default CollectionCard;
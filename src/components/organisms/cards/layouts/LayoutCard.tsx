import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, makeStyles, Theme, createMuiTheme, ThemeProvider } from '@material-ui/core';
export interface ILayoutCardProps {
    layoutImage?: string
    layoutName?: string
}
const useStyles = makeStyles((theme) => ({
    layoutcard: {
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
                paddingBottom: 0,
                '&:last-child': {
                    paddingBottom: '12px'
                }
            }
        }
    }
})
const LayoutCard:React.FC<ILayoutCardProps> = ({layoutImage, layoutName}) => {
    const classes = useStyles();
    const [raised, setRaised] = useState<boolean>(false);
    const raiseHandler = () => {
        setRaised(!raised);
    }
    return (
            
        
            <ThemeProvider theme = {theme}>
                <Card raised={raised} onMouseOver={raiseHandler} onMouseOut={raiseHandler} className={classes.layoutcard}>
                    <CardContent>
                        <Grid container direction="column" alignItems="center"  spacing={1}>
                            <Grid item >
                                <img className={classes.image} src={layoutImage}></img>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">{layoutName}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ThemeProvider>
        
        
    )
}
export default LayoutCard
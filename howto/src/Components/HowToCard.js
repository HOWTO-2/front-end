import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



export default function HowToCard({ card }) {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },


    });
    const classes = useStyles();

    if (!card) {
        return <h2>Finding Cards</h2>
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom >
                    Title
                </Typography>
                <Typography variant="h5" component="h2">
                    Author:{card.first_name}{card.last_name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Topic:{card.email}
                </Typography>
                <Typography variant="body2" component="p">
                    Guide:{card.avatar}
                </Typography>
            </CardContent>
        </Card>

        //////////sample PLEASE CHANGE VALUES WHEN ENDPOINT UPDATED////////

    )
}



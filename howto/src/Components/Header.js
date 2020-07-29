import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';


export default function Header(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));
    const classes = useStyles();

    return (
        <header className={classes.root}>


            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button component={Link} to='/'>Home</Button>
                <Button component={Link} to='/login'>Log In</Button>
                <Button component={Link} to='/signup'>Sign Up</Button>
            </ButtonGroup>

        </header>
    )

}
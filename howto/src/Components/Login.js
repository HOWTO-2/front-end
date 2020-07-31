import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function Login(props) {
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
        <form className={classes.root}>
            <TextField
                name='username'
                type='text'
                variant='outlined'
                placeholder='Enter Your Username'
                label='Username'
                // value={values.username}
                // onChange={onInputChange}
            />
            <TextField
                name='password'
                type='password'
                variant='outlined'
                placeholder='Enter Your Password'
                label='Password' 
                // value={values.username}
                // onChange={onInputChange}
                />
            <Button
             variant="contained"
             color="primary"
            >Log In</Button>
          

        </form>

    )
}

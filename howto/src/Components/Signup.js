import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Signup(props) {
  const { values, inputChange, submit, disabled, errors } = props;

  //////////////////┬─┬ ノ( ゜-゜ノ)
  //Helper Functions//┬─┬ ノ( ゜-゜ノ)
  ///////////////////////////////////

  const onInputChange = (e) => {
    const { name, value } = e.target;
    inputChange(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <div>{errors.email}</div>
      <div>{errors.password}</div>
      <TextField
        placeholder="Enter Your First Name"
        label="First Name"
        variant="outlined"
        onChange={onInputChange}
        type="text"
        name="fName"
        value={values.fName}
      />
      <TextField
        placeholder="Enter Your Last Name"
        label="Last Name"
        variant="outlined"
        onChange={onInputChange}
        name="lName"
        type="text"
        value={values.lName}
      />
      <TextField
        placeholder="Enter Your Email"
        label="Email Address"
        variant="outlined"
        onChange={onInputChange}
        name="email"
        type="email"
        value={values.email}
      />
      <TextField
        placeholder="Enter Your Username"
        label="Username"
        variant="outlined"
        onChange={onInputChange}
        name="username"
        type="text"
        value={values.username}
      />
      <TextField
        placeholder="Enter Your Password"
        label="Password"
        variant="outlined"
        onChange={onInputChange}
        name="password"
        type="password"
        value={values.password}
      />
      <br />
      <button disabled={disabled}>Add User</button>
      <Button 
      disabled={disabled} 
      variant="outlined" 
      color="primary"
      onClick={() => { alert('Woops Wrong Button') }}
      >
        Primary
      </Button>
      
    </form>
  );
}

// <label>FirstName
// <input
//         name='fName'
//         type='text'
//         maxLength='15'
//         onChange={onInputChange}
//         value={values.fName}
//     />
// </label>
// <label>Last Name
// <input
//         name='lName'
//         type='text'
//         maxLength='15'
//         onChange={onInputChange}
//         value={values.lName}
//     />
// </label>
// <label>Email
// <input
//         name='email'
//         type='email'
//         maxLength='25'
//         onChange={onInputChange}
//         value={values.email}
//     />
// </label>
// <label>Username
// <input
//         name='username'
//         type='text'
//         maxLength='15'
//         onChange={onInputChange}
//         value={values.username}
//     />
// </label>
// <label>Password
// <input
//         name='password'
//         type='password'
//         maxLength='15'
//         minLength='7'
//         onChange={onInputChange}
//         value={values.password}
//     />
// </label>

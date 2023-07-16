import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Button,
  Checkbox,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import loginimg from "./loginImg.jpg";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    maxWidth: 1440,
    paddingLeft: "150px",
    "@media (max-width: 700px)": {
      paddingLeft: "0",
    },
  },
  image: {
    width: "100%",
    height: "900px",
    "@media (max-width: 700px)": {
      width: "",
      height: "",
    },
  },
  heading: {
    fontSize: "36px",
    fontWeight: 400,
    color: "#000000",
    marginTop:"40px",
    marginBottom:"30px"
  },
  subHeading: {
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: 500,
    marginBottom:"31px",
    color: "#6F6E6E",
  },
  headingSign: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#206FC4",
    marginBottom: "31px",
  },

  formStyle2: {
    maxWidth: "432px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "100%",
    "&.MuiFormLabel-root.Mui-focused ": {
      color: "#6F6E6E !important",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ": {
      borderColor: "#6F6E6E !important",
    },
  },
  boxstyle: {
    marginBottom: "27px",
  },
  signinButton: {
    marginBottom: "24px",
    height: "55px",
    backgroundColor: "#206FC4",
    color: "#FFFFFF",
    width: "100%",
    fontSize: "16px",
    fontWeight: 700,
  },
  boxstyle2: {
    display: "flex",
    marginTop: "19px",
    width: "100%",
    marginBottom:"31px",
    alignItems: "center",
    justifyContent: "space-between",
    "@media(max-width:600px)": {
      display: "block",
    },
  },
  typography: {
    display: "block",
    color: "#848484",
  },
  labelStyle: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#535353",
    marginBottom:"12px"
  },
  maingrid: {
    "@media(max-width:600px)": {},
  },
});

interface LoginProps extends WithStyles<typeof styles> {}
class Login extends Component<LoginProps> {
  render() {
    const { classes } = this.props;
    const logo = "INVENTO";
    const heading = "SIGNIN";
    return (
      <Box>
        <div className={classes.root}>
          <Grid container className={classes.maingrid}>
            <Grid item xs={12} md={6} sm={6}>
              <Typography className={classes.heading}>{logo}</Typography>
              <Typography className={classes.headingSign}>{heading}</Typography>
              <Box className={classes.formStyle2}>
                <Box className={classes.boxstyle}>
                  <Typography className={classes.labelStyle}>Email:</Typography>
                  <FormControl
                    className={clsx(classes.textField)}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="outlined-adornment-email"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "Email",
                      }}
                    />
                  </FormControl>
                </Box>
                <Box className={classes.boxstyle}>
                  <Typography className={classes.labelStyle}>
                    Password:
                  </Typography>
                  <FormControl
                    className={clsx(classes.textField)}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type="password"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "password",
                      }}
                    />
                  </FormControl>
                </Box>

                <Box className={classes.boxstyle2}>
                  <Typography className={classes.typography}>
                    <Checkbox
                      defaultChecked
                      color="default"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Remember Password
                  </Typography>
                  <Typography
                    className={classes.typography}
                    style={{ cursor: "pointer" }}
                  >
                    Forgot Password?
                  </Typography>
                </Box>
                <Button variant="contained" className={classes.signinButton}>
                  SIGNIN
                </Button>
                <Typography className={classes.subHeading}>
                  Don't have an account?
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
              <img src={loginimg} className={classes.image} />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(Login);

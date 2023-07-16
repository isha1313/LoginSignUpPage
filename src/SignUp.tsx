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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { green } from "@material-ui/core/colors";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Select from "@material-ui/core/Select";
const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    maxWidth: 1440,
    paddingLeft: "115px",
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
    marginTop: "40px",
    marginBottom: "30px",
  },
  subHeading: {
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: 500,
    marginBottom: "31px",
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
  selectOutlined: {
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.shape.borderRadius,
      borderColor: theme.palette.primary.main,
    },
    "&:hover .MuiOutlinedInput-root": {
      borderColor: theme.palette.primary.dark,
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      borderColor: theme.palette.primary.dark,
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
    marginTop: "20px",
    width: "100%",
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
    marginBottom: "12px",
  },
  checkstyle: {
    marginTop: "19px",
    marginBottom: "32px",
  },
  selectMainBox: {
    minHeight: "52px",
    border: "1px solid silver",
    marginBottom: "15px",
    borderRadius: "4px",
  },
  selectBox: {
    padding: "12px",
    width: 432,
    borderRadius: 15,
    background: "#4A4A4A",
  },
  labelStyle3: {
    color: "#FFF",
    fontSize: "14px",
    fontWeight: 400,
  },
});

const GreenCheckbox = withStyles({
  root: {
    color: "#535353",
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})(Checkbox);

const GreenCheckbox1 = withStyles({
  root: {
    color: "white",
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

interface SignUpProps extends WithStyles<typeof styles> {}
interface SignUpState {
  country: string;
  job: string;
  showJobs: boolean;
  selectedJob: any;
}
class SignUp extends Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      country: "Select",
      job: "",
      showJobs: false,
      selectedJob: [],
    };
  }
  handleSelectMainBoxClick = () => {
    this.setState((prevState) => ({
      showJobs: !prevState.showJobs,
    }));
  };

  handleSelectMainBoxDoubleClick = () => {
    this.setState({ showJobs: false });
  };
  handleChange = (event: any) => {
    this.setState({ country: event.target.value });
  };
  handleChangeJob = (event: any) => {
    this.setState({ job: event.target.value });
  };
  handleJobSelection = (data: any) => {
    const { selectedJob } = this.state;
    const index = selectedJob.findIndex((item: any) => item === data);
    if (index === -1) {
      selectedJob.push(data);
    } else {
      selectedJob.splice(index, 1);
    }

    this.setState({ selectedJob });
  };

  render() {
    const { classes } = this.props;
    const logo = "INVENTO";
    const { showJobs } = this.state;
    const heading = "SIGNUP ";
    const countryNames = [
      "India",
      "United States",
      "United Kingdom",
      "Australia",
      "Canada",
    ];
    const listJobs = [
      { name: "IP Lawyer" },
      { name: "IP Enforcement" },
      { name: "Patent Holder" },
      { name: "Prototype Developer" },
      { name: "Patent Illustrator" },
      { name: "Patent Liscening Expert" },
      { name: "Patent Database" },
      { name: "Prototype Agent" },
      { name: "Others" },
      { name: "Govt.,ngos, msme, companies" },
    ];
    const listOfSelect = [
      { subHeading: "Contain at least one uppercase letter" },
      { subHeading: "Contain at least one special character" },
      { subHeading: "Contain at least one special character" },
    ];
    const svgIcon = `
    <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="padding: 12px; cursor: pointer;">
      <path d="M11.6883 11.5325C11.5325 11.5325 20.4156 2.64935 20.4156 2.64935C21.039 2.02597 21.039 1.09091 20.4156 0.467531C19.7922 -0.155846 18.8571 -0.155846 18.2338 0.467531L10.4416 8.1039L2.64935 0.467532C2.02597 -0.155845 1.09091 -0.155845 0.467532 0.467532C0.155843 0.779221 -4.76851e-07 1.09091 -4.56415e-07 1.55844C-4.35979e-07 2.02597 0.155843 2.33766 0.467532 2.64935L9.1948 11.5325C9.97402 12.1558 11.5325 11.5325 11.6883 11.5325Z" fill="black"/>
    </svg>
  `;
    return (
      <Box>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} md={6}>
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
                    First Name:
                  </Typography>
                  <FormControl
                    className={clsx(classes.textField)}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="outlined-adornment-FirstName"
                      type="FirstName"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "FirstName",
                      }}
                    />
                  </FormControl>
                </Box>
                <Box className={classes.boxstyle}>
                  <Typography className={classes.labelStyle}>
                    Last Name:
                  </Typography>
                  <FormControl
                    className={clsx(classes.textField)}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="outlined-adornment-LastName"
                      type="FirstName"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "LastName",
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

                <Grid className={classes.checkstyle}>
                  {listOfSelect.map((item, index) => {
                    return (
                      <Box display="flex" alignItems="center">
                        <FormControlLabel
                          key={`index ${index}`}
                          control={
                            <GreenCheckbox
                              icon={<RadioButtonUncheckedIcon />}
                              checkedIcon={<CheckCircleIcon />}
                            />
                          }
                          label={<Typography>{item.subHeading}</Typography>}
                        />
                      </Box>
                    );
                  })}
                </Grid>
                <Box className={classes.boxstyle}>
                  <Typography className={classes.labelStyle}>
                    Select Country:
                  </Typography>
                  <FormControl
                    variant="outlined"
                    className={clsx(classes.textField)}
                  >
                    <Select
                      className={classes.selectOutlined}
                      native
                      value={this.state.country}
                      onChange={this.handleChange}
                      inputProps={{
                        name: "Country",
                        id: "outlined-country-native-simple",
                      }}
                      IconComponent={() => (
                        <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
                      )}
                    >
                      <option aria-label="None" value="" />
                      {countryNames.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box className={classes.boxstyle}>
                  <Typography className={classes.labelStyle}>
                    Job Title:
                  </Typography>
                  <Box
                    className={classes.selectMainBox}
                    onClick={this.handleSelectMainBoxClick}
                  >
                    {this.state.selectedJob.map((item: any, index: number) => {
                      return `${item},`

                    })}
                  </Box>
                  {showJobs && (
                    <Grid className={classes.selectBox} container>
                      {listJobs.map((item, index) => (
                        <Grid key={`${index}job`} item xs={6}>
                          <FormControlLabel
                            control={<GreenCheckbox1 />}
                            label={
                              <Typography className={classes.labelStyle3}>
                                {item.name}
                              </Typography>
                            }
                            onChange={(e: any) =>
                              this.handleJobSelection(item.name)
                            }
                          />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Box>
                <Button variant="contained" className={classes.signinButton}>
                  SIGNUP
                </Button>
                <Typography className={classes.subHeading}>
                  Have an account?
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={loginimg} className={classes.image} />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(SignUp);

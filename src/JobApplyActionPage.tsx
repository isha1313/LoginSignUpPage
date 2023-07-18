import React, { Component } from "react";
import { CSSProperties } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    maxWidth: 1229,
    marginTop: 52,
    marginBottom: 15,
    "@media(max-width:600px)": {
      marginTop: 30,
    },
  },
  subParagraph: {
    marginTop: "8px",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "14px",
    color: "#B1B3C3",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textFieldStyle: {
    "& label.Mui-focused": {
      color: "#D9D9D9",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#D9D9D9",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& fieldset": {
        borderColor: "#D9D9D9",
      },
      "&:hover fieldset": {
        borderColor: "#D9D9D9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#D9D9D9",
      },
      "&.MuiInputBase-root .Mui-disabled": {
        color: "rgba(0, 0, 0, 0.87)",
        cursor: "pointer",
      },
    },
    width: "480px",
    "@media(max-width:550px)": {
      width: "350px",
    },
    "@media(max-width:450px)": {
      width: "300px",
    },
    "@media(max-width:400px)": {
      width: "250px",
    },
  },
  textStyle: {
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "15px",
  },
  textStyle2: {
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: "15px",
  },
  headingStyle: {
    marginBottom: "8px",
  },
  innerBox: {
    marginBottom: "40px",
  },
  customButton: {
    color: "#101010",
    fontFamily: "lato",
    fontWeight: 500,
    fontSize: "15px",
    width: "184px",
    borderRadius: "8px",
    textAlign: "center" as CSSProperties["textAlign"],
    padding: "16px 12px",
    backgroundColor: "#43D270",
    "&:hover": {
      backgroundColor: "#3ca15e",
    },
    "@media(max-width:600px)": {
      fontSize: "12px",
      width: "100px",
      padding: "12px 20px",
    },
  },
  fileInput: {
    display: "none",
  },
});

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    marginBottom: "26px",
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

interface JobApplyActionPageProps extends WithStyles<typeof styles> {}
class JobApplyActionPage extends Component<JobApplyActionPageProps> {
  render() {
    const { classes } = this.props;
    const handleFileChange = (event: any) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        console.log("Selected file:", file);
      } else {
        console.log("No file selected.");
      }
    };
    const handleIconClick = () => {
      const fileInput = document.getElementById("file-input");
      if (fileInput) {
        fileInput.click();
      }
    };
    const dummyData = [
      {
        headingName: "Email address*",
        placeholder: "Enter your email address",
        type: "text",
      },
      {
        headingName: "First name*",
        placeholder: "Enter your first name here",
        type: "text",
      },
      {
        headingName: "Last name*",
        placeholder: "Enter your last name here",
        type: "text",
      },
      {
        headingName: "Attach CV*",
        placeholder: "Drop here from desktop or simple click and attach",
        type: "file",
        accept: ".doc, .docx, .pdf, .rtf, .txt",
      },
      {
        headingName: "Attach Cover Letter (if)",
        placeholder: "Drop here from desktop or simple click and attach",
        type: "file",
        accept: ".doc, .docx, .pdf, .rtf, .txt",
      },
    ];
    let icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
      >
        <path
          d="M14.2649 2.60898C12.0571 0.401172 8.46174 0.401172 6.25627 2.60898L0.139084 8.72148C0.0992406 8.76133 0.0781467 8.81523 0.0781467 8.87148C0.0781467 8.92773 0.0992406 8.98164 0.139084 9.02148L1.00393 9.88633C1.04346 9.92569 1.09697 9.94778 1.15276 9.94778C1.20854 9.94778 1.26205 9.92569 1.30158 9.88633L7.41877 3.77383C8.17815 3.01445 9.1883 2.59727 10.2617 2.59727C11.3352 2.59727 12.3453 3.01445 13.1024 3.77383C13.8617 4.5332 14.2789 5.54336 14.2789 6.61445C14.2789 7.68789 13.8617 8.6957 13.1024 9.45508L6.86799 15.6871L5.85783 16.6973C4.9133 17.6418 3.37815 17.6418 2.43362 16.6973C1.97658 16.2402 1.7258 15.6332 1.7258 14.9863C1.7258 14.3395 1.97658 13.7324 2.43362 13.2754L8.61877 7.09258C8.7758 6.93789 8.98205 6.85117 9.20236 6.85117H9.20471C9.42502 6.85117 9.62893 6.93789 9.78362 7.09258C9.94065 7.24961 10.025 7.45586 10.025 7.67617C10.025 7.89414 9.9383 8.10039 9.78362 8.25508L4.72815 13.3059C4.6883 13.3457 4.66721 13.3996 4.66721 13.4559C4.66721 13.5121 4.6883 13.566 4.72815 13.6059L5.59299 14.4707C5.63252 14.5101 5.68603 14.5322 5.74182 14.5322C5.7976 14.5322 5.85112 14.5101 5.89065 14.4707L10.9438 9.41758C11.4102 8.95117 11.6656 8.33242 11.6656 7.67383C11.6656 7.01523 11.4078 6.39414 10.9438 5.93008C9.98049 4.9668 8.41487 4.96914 7.45158 5.93008L6.85158 6.53242L1.26877 12.1129C0.889859 12.4896 0.589503 12.9377 0.38512 13.4314C0.180737 13.9251 0.0763961 14.4544 0.0781467 14.9887C0.0781467 16.0738 0.502365 17.0934 1.26877 17.8598C2.0633 18.652 3.10393 19.048 4.14455 19.048C5.18518 19.048 6.2258 18.652 7.01799 17.8598L14.2649 10.6176C15.3313 9.54883 15.9219 8.12617 15.9219 6.61445C15.9242 5.10039 15.3336 3.67773 14.2649 2.60898Z"
          fill="black"
        />
      </svg>
    );

    return (
      <Box>
        <div className={classes.root}>
          <Grid>
            <Box className={classes.boxContainer}>
              {dummyData.map((item: any, index: number) => {
                if (item.type === "text") {
                  return (
                    <Box className={classes.innerBox} key={`${index}index`}>
                      <Typography
                        className={clsx(
                          classes.textStyle,
                          classes.headingStyle
                        )}
                        style={{ color: "#34373A" }}
                      >
                        {item.headingName}
                      </Typography>
                      <TextField
                        required
                        id="outlined-secondary"
                        variant="outlined"
                        color="secondary"
                        placeholder={item.placeholder}
                        InputProps={{
                          classes: {
                            input: classes.textStyle,
                          },
                        }}
                        className={classes.textFieldStyle}
                      />
                    </Box>
                  );
                }
                if (item.type === "file") {
                  return (
                    <Box className={classes.innerBox} key={`${index}index`}>
                      <Typography
                        className={clsx(
                          classes.textStyle,
                          classes.headingStyle
                        )}
                        style={{ color: "#34373A" }}
                      >
                        Attach CV*
                      </Typography>
                      <TextField
                        id="outlined-secondary"
                        variant="outlined"
                        disabled
                        color="secondary"
                        onClick={handleIconClick}
                        placeholder="Drop here from desktop or simply click and attach"
                        InputProps={{
                          classes: {
                            input: classes.textStyle,
                          },
                          style: { cursor: "pointer" },
                          endAdornment: (
                            <InputAdornment position="end">
                              {icon}
                            </InputAdornment>
                          ),
                        }}
                        className={classes.textFieldStyle}
                      />
                      <input
                        type="file"
                        id="file-input"
                        className={classes.fileInput}
                        onChange={handleFileChange}
                        accept=".doc, .docx, .pdf, .rtf, .txt"
                      />
                      <Typography className={classes.subParagraph}>
                        {item.accept}
                      </Typography>
                    </Box>
                  );
                }
              })}

              <Box className={classes.innerBox} style={{ maxWidth: "480px" }}>
                <FormControlLabel
                  control={<GreenCheckbox />}
                  label={
                    <Typography
                      className={clsx(classes.textStyle, classes.headingStyle)}
                      style={{ color: "#595959" }}
                    >
                      I agree to the
                      <span className={classes.textStyle2}>
                        Terms & Conditions{" "}
                      </span>
                      and confirm that I've reviewed the{" "}
                      <span className={classes.textStyle2}>
                        Privacy Policy{" "}
                      </span>
                      .
                    </Typography>
                  }
                />
              </Box>
              <Button variant="contained" className={classes.customButton}>
                NEXT
              </Button>
            </Box>
          </Grid>
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(JobApplyActionPage);

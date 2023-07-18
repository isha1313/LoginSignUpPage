import React, { Component } from "react";
import { CSSProperties } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Typography, withStyles } from "@material-ui/core";
import { WithStyles } from "@material-ui/core/styles";
import Group2 from "./Group2.png";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    maxWidth: 1229,
    marginTop: 58,
    "@media(max-width:600px)": {
      marginTop: 30,
    },
  },
  img: {
    maxWidth: "245px",
    height: "100%",
    objectFit: "cover" as CSSProperties["objectFit"],
  },
  contentBox: {
    display: "flex",
    justifyContent: "center",
  },
  headingStyle: {
    marginTop: "58px",
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: "24px",
    maxWidth: 1005,
    color: "#34373A",
    textAlign: "center" as CSSProperties["textAlign"],
    "@media(max-width:600px)": {
      fontSize: "20px",
      marginTop: "28px",
    },
  },
  contentBox2: {
    display: "flex",
    justifyContent: "Center",
  },
});

interface JobApplicationSuccessProps extends WithStyles<typeof styles> {}
class JobApplicationSuccess extends Component<JobApplicationSuccessProps> {
  render() {
    const { classes } = this.props;

    return (
      <Box>
        <div className={classes.root}>
          <Grid>
            <Box className={classes.contentBox}>
              <img src={Group2} alt="" className={classes.img} />
            </Box>
            <Box className={classes.contentBox2}>
              <Typography className={classes.headingStyle}>
                We've received your information. Someone from the recruitment
                will get in touch with you soon. All the best!
              </Typography>
            </Box>
          </Grid>
        </div>
      </Box>
    );
  }
}
export default withStyles(styles)(JobApplicationSuccess);

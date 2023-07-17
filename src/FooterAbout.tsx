import React, { Component } from "react";
import { CSSProperties } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import imageAbout from "./imageAbout.png";
import { withStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    maxWidth: 1229,
    marginBlock: 98,
    "@media(max-width:600px)": {
      marginBlock: 20,
    },
  },
  styleforitem2: {
    borderRadius: "16px",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as CSSProperties["objectFit"],
  },
  tittleStyle: {
    marginBottom: "24px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "14px",
    color: "#43D270",
    backgroundColor: "#E7FFD8",
    width: "137px",
    borderRadius: "20px",
    padding: "6px 10px",
    textAlign: "center" as CSSProperties["textAlign"],
  },
  heading: {
    marginBottom: "24px",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: "34px",
    color: "#34373A",
    "@media(max-width:600px)": {
      fontSize: "24px",
    },
  },
  subHeading: {
    marginBottom: "24px",
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: "17px",
    color: "#34373A",
    "@media(max-width:600px)": {
      fontSize: "20px",
    },
  },
  description: {
    marginBottom: "24px",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "17px",
    color: "#34373A",
    "@media(max-width:600px)": {
      fontSize: "16px",
    },
  },
  contentBox: {
    paddingLeft: 106,
    marginTop: 28,
    "@media(max-width:960px)": {
      marginTop: 50,
      paddingInline: 16,
    },
    "@media (min-width: 960px) and (max-width:1100px)": {
      paddingLeft: 26,
    },
    "@media (min-width: 1100px) and (max-width:1300px)": {
      paddingLeft: 56,
    },
  },
  contentbox2:{
    "@media (max-width:960px)": {
      margin: "0 auto",
    },
  }
});

interface FooterProps extends WithStyles<typeof styles> {}
class FooterAbout extends Component<FooterProps> {
  render() {
    const { classes } = this.props;

    return (
      <Box>
        <div className={classes.root}>
          <Grid container>
            <Grid item md={6} className={classes.contentbox2}>
              <Box className={classes.styleforitem2}>
                <img src={imageAbout} alt="" className={classes.img} />
              </Box>
            </Grid>
            <Grid item md={6} className={classes.contentBox}>
              <Box>
                <Typography className={classes.tittleStyle}>
                  Our vision
                </Typography>
                <Typography className={classes.heading}>
                  We employ technology to facilitate transformation
                </Typography>
                <Typography className={classes.subHeading}>
                  Carbonzeroed aims to be the most vital tech enabler in the
                  world's transition to an economy of sustainable value
                  creation.s
                </Typography>
                <Typography className={classes.description}>
                  Our vision is to reduce complexity for companies managing
                  their carbon footprint, so that they can become climate
                  experts themselves. It is key to easily engage all
                  stakeholders in order to foster change management. For these
                  reasons, we developed our Climate Action Platform.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(FooterAbout);

import React, { Component } from "react";
import { CSSProperties } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CallMadeIcon from "@material-ui/icons/CallMade";
const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    backgroundColor: "#000000",
    minHeight: "287px",
    "@media(max-width:600px)": {
      marginBlock: 20,
      minHeight: "200px",
    },
  },

  heading: {
    textAlign: "center" as CSSProperties["textAlign"],
    color: "#ffffff",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: "48px",
    marginBottom: "39px",
    "@media(max-width:600px)": {
      fontSize: "24px",
    },
  },
  contentBox: {
    textAlign: "center" as CSSProperties["textAlign"],
    padding: "67px",
  },
  customButton: {
    color: "#101010",
    fontFamily: "lato",
    fontWeight: 500,
    fontSize: "15px",
    maxWidth: "252px",
    borderRadius: "8px",
    textAlign: "center" as CSSProperties["textAlign"],
    padding: "16px 24px",
    backgroundColor: "#43D270",
    "&:hover": {
      backgroundColor: "#3ca15e",
    },
    "@media(max-width:600px)": {
      fontSize: "12px",
      maxWidth: "200px",
      padding: "12px 20px",
    },
  },
  icon: {
    marginLeft: "8px",
  },
});

interface FooterProps extends WithStyles<typeof styles> {}
class FooterAbout extends Component<FooterProps> {
  render() {
    const { classes } = this.props;

    return (
      <Box>
        <div className={classes.root}>
          <Box className={classes.contentBox}>
            <Typography className={classes.heading}>
              We are <span style={{ color: "#43D270" }}>hiring</span>!
            </Typography>
            <Button variant="contained" className={classes.customButton}>
              VISIT CAREERS
              <CallMadeIcon className={classes.icon} fontSize="small" />
            </Button>
          </Box>
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(FooterAbout);

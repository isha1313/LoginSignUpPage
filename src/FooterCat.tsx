import React, { Component } from "react";
import { CSSProperties } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import cat from "./cat.jpg";
import { withStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    maxWidth: 1229,
    marginTop: 80,
    marginBottom: 176,
    "@media(max-width:600px)": {
      marginBottom: 56,
      marginTop: 40,
    },
  },
  heading: {
    marginBottom: "56px",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: "48px",
    color: "#34373A",
    textAlign: "center" as CSSProperties["textAlign"],
    "@media(max-width:600px)": {
      fontSize: "24px",
      marginBottom: "20px",
    },
  },
  styleforgrid: {
    justifyContent: "center",
  },
  styleforitem: {
    textAlign: "center" as CSSProperties["textAlign"],
    minWidth: "276px",
    minHeight: "291px",
    "@media(max-width:600px)": {
      minHeight: "260px",
    },
  },
  styleforitem2: {
    maxWidth: "167px",
    maxHeight: "167px",
    margin: "0 auto",
    backgroundColor: "#43D270",
    borderRadius: "36px",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as CSSProperties["objectFit"],
  },
  subheading: {
    marginTop: "27px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "20px",
    color: "#34373A",
    "@media(max-width:600px)": {
      marginTop: "12px",
      fontSize: "16px",
    },
  },
  tag: {
    marginTop: "13px",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "15px",
    color: "#34373A",
    "@media(max-width:600px)": {
      marginTop: "0px",
      fontSize: "14px",
    },
  },
});

interface FooterProps extends WithStyles<typeof styles> {}
class Footer extends Component<FooterProps> {
  render() {
    const { classes } = this.props;
    const dummyData = [
      { image1: cat, name: "Robin Thomas", tag: "CEO" },
      { image1: cat, name: "Robin Thomas", tag: "CEO" },
      { image1: cat, name: "Robin Thomas", tag: "CEO" },
    ];
    return (
      <Box>
        <div className={classes.root}>
          <Box>
            <Typography className={classes.heading}>
              Meet our founding team
            </Typography>
            <Grid container className={classes.styleforgrid}>
              {dummyData.map((item: any, index: number) => {
                return (
                  <Grid
                    item
                    key={`index ${index}`}
                    className={classes.styleforitem}
                  >
                    <Box className={classes.styleforitem2}>
                      <img src={item.image1} alt="" className={classes.img} />
                    </Box>
                    <Typography className={classes.subheading}>
                      {item.name}
                    </Typography>
                    <Typography className={classes.tag}>{item.tag}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(Footer);

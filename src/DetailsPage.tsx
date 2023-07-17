import React, { Component } from "react";
import { CSSProperties } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import image from "./Imege.png";
import clsx from "clsx";
import { withStyles, WithStyles } from "@material-ui/core/styles";

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

  styleforitem2: {
    borderRadius:"32px",
    maxHeight: "580px",
    margin: "0 auto",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as CSSProperties["objectFit"],
  },

  tag: {
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "15px",
    color: "#34373A",
    "@media(max-width:600px)": {
      fontSize: "14px",
    },
  },
  content: {
    marginTop: "55px",
    "@media(max-width:600px)": {
      marginBottom: "25px",
    },
  },

  content2: {
    marginBottom: "46px",
    "@media(max-width:600px)": {
      marginBottom: "30px",
    },
  },
});

interface DetailsProps extends WithStyles<typeof styles> {}
class DetailsPage extends Component<DetailsProps> {
  render() {
    const { classes } = this.props;
    const dummyDescription1 =
      "Carbonzeroed enables companies to effectively decarbonize and transform their business in light of financial implications. Our Climate Action Platform helps you to find the most economical way to minimize your environmental impact, with care for the planet and your bottom line.We believe that reducing the environmental impact of businesses is not only feasible - it implies an exciting opportunity for positive, collective change. Our Climate Action Platform delivers our vision for a well-managed transition to a low-carbon economy, channelling our optimism into helping companies take the necessary steps.Fueled by our confidence in a brighter future, we move quickly to craft solutions to the unique complexities of each company's decarbonization journey.  We put ourselves in your shoes to deliver the optimal experience for your business.";
    const dummyDescription2 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis ut diam quam nulla porttitor. Orci a scelerisque purus semper eget duis at tellus. Feugiat in ante metus dictum. Nisi quis eleifend quam adipiscing vitae. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Sit amet risus nullam eget felis eget nunc lobortis mattis. Turpis cursus in hac habitasse platea dictumst quisque. Nisi quis eleifend quam adipiscing vitae. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Lorem sed risus ultricies tristique nulla aliquet enim tortor at.";
    return (
      <Box>
        <div className={classes.root}>
          <Grid>
            <Box className={clsx(classes.tag, classes.content2)}>
              {dummyDescription1}
            </Box>
            <Box className={classes.styleforitem2}>
              <img src={image} className={classes.img} />
            </Box>
            <Box className={clsx(classes.tag, classes.content)}>
              {dummyDescription2}
            </Box>
          </Grid>
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(DetailsPage);

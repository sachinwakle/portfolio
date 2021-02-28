import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  year: {
    fontWeight: "bold",
  },
}));

function EducationOne() {
  return (
    <Grid item container direction="column" spacing={0}>
      <Typography variant="body1" gutterBottom>
        B.E. in Computer Science and Engineering with <b>71% marks</b>
      </Typography>
      <Typography variant="body1" gutterBottom>
        MGM's Jawaharlal Nehru Engineering College, Aurangabad
      </Typography>
    </Grid>
  );
}

const EducationOneDuration = () => {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.year}>
      Year 2012-2015
    </Typography>
  );
};

function EducationTwo() {
  return (
    <Grid item container direction="column" spacing={0}>
      <Typography variant="body1" gutterBottom>
        Diploma in Computer Engineering with <b>78.31% marks</b>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Government Polytechnic, Jalna
      </Typography>
    </Grid>
  );
}

const EducationTwoDuration = () => {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.year}>
      Year 2009-2012
    </Typography>
  );
};

function EducationThree() {
  return (
    <Grid item container direction="column" spacing={0}>
      <Typography variant="body1" gutterBottom>
        SSC Board Auranagabad Division with <b>89.85% marks</b>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Z. P. High School Lasurgaon Tal Vaijapur Dist Aurangabad
      </Typography>
    </Grid>
  );
}

const EducationThreeDuration = () => {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.year}>
      Year 2008-2009
    </Typography>
  );
};

export {
  EducationOne,
  EducationOneDuration,
  EducationTwo,
  EducationTwoDuration,
  EducationThree,
  EducationThreeDuration,
};

import { Card, CardHeader, makeStyles, Typography } from '@material-ui/core'
import { brown } from '@material-ui/core/colors';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    title:{
      fontWeight:"bold",
      color: brown[500]
    },
  }));

  function NameBanner() {
      const classes = useStyles();
    const titleHeader = (type, content) => <Typography variant={type} className={classes.title}>{content}</Typography>;
    return (
        <Card>
            <CardHeader title={titleHeader("h4","Sachin Wakle")} subheader={titleHeader("h5","Java Developer")}/>
        </Card>
    )
}

export default NameBanner

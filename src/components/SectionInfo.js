import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { brown, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    backgroundColor: "transparent",
    color: brown[500]
  },
  title:{
    fontWeight:"bold",
    color: brown[500]
  },
  divider:{
      backgroundColor:"darkgray",
      height: "4px",
      borderRadius: "2px"
  }
}));

export default function SectionInfo({ cardTitle, cardIcon, cardContent }) {
  const classes = useStyles();

  const titleHeader = () => <Typography variant="h4" className={classes.title}>{cardTitle}</Typography>;



  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={cardTitle} className={classes.avatar}>
            {cardIcon}
          </Avatar>
        }
        title={titleHeader()}
      />
      <Divider variant="middle"  className={classes.divider}/>
      <CardContent>{cardContent}</CardContent>
    </Card>
  );
}

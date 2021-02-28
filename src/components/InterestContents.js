import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
  avatar: {
    backgroundColor: "transparent",
    color: "rgba(0, 0, 0, 0.54)",
  },
}));

export default function InterestContents() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <LabelImportantIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
              >
                Reading Blogs and Books, StackOverflow, Medium, Quora, Developer
                Blogs, Reddit, Technical blogs
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <LabelImportantIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
              >
                Learning New Things
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

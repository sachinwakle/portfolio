import { Card, CardMedia } from "@material-ui/core";
import React, { useContext } from "react";
import sachin from "../sachin_profile.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeConext } from "../App";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function ProfilePic() {
  const contextTh = useContext(ThemeConext);
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image={sachin} className={classes.media} onClick={contextTh} />
    </Card>
  );
}

export default ProfilePic;

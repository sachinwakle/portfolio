import { Button, Card,CardMedia,CardContent } from '@material-ui/core'
import { Image } from '@material-ui/icons'
import React from 'react'
import sachin from '../sachin_profile.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

function ProfilePic() {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={sachin} className={classes.media}/>
        </Card>
    )
}

export default ProfilePic

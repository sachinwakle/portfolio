import { Grid, Typography } from '@material-ui/core'
import React from 'react'


function PersonalInfoContents() {
    return (
        <Grid container spacing={1} direction="column">
            <Grid item>
                <Typography variant="body1"  style={{fontWeight:"bold"}}>
                Address
                </Typography>
                <Typography variant="body1"  >
                    At Post Lasurgaon Tal Vaijapur Dist Aurangabad, Maharashtra - 423702
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1"  style={{fontWeight:"bold"}}>
                Phone
                </Typography>
                <Typography variant="body1"  >
                09158503441 / 09514766003
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1"  style={{fontWeight:"bold"}}>
                E-mail
                </Typography>
                <Typography variant="body1"  >
                sachinwakle2002@gmail.com
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1"  style={{fontWeight:"bold"}}>
                LinkedIn
                </Typography>
                <Typography variant="body1"  >
                https://www.linkedin.com/in/sbwakle
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1"  style={{fontWeight:"bold"}}>
                Github
                </Typography>
                <Typography variant="body1"  >
                https://github.com/sachinwakle
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1"  style={{fontWeight:"bold"}}>
                Blog
                </Typography>
                <Typography variant="body1"  >
                https://medium.com/tech-journo
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1"  style={{fontWeight:"bold"}}>
                StackOverflow
                </Typography>
                <Typography variant="body1"  >
                ttps://stackoverflow.com/ users/10078660/sachinwakle
                </Typography>
            </Grid>
        </Grid>
    )
}

export default PersonalInfoContents

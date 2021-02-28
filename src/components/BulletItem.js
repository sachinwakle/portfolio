import React from "react";
import Grid from "@material-ui/core/Grid";

export default function BulletItem({leftContent,rightContent,leftCell,rightCell}) {

  return (
        <Grid container spacing={1} justify="space-between">
          <Grid item xs={leftCell?leftCell:2}>
           {leftContent}
          </Grid>
          <Grid item xs={rightCell?rightCell:10} container direction="column">
          {rightContent}
          </Grid>
      </Grid>
  );
}

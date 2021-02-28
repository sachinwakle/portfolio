import { Grid } from "@material-ui/core";
import React from "react";

function SectionItem({ children, xs, sm }) {
  return (
    <React.Fragment>
      <Grid item children={children} xs={xs ? xs : 12} sm={sm ? sm : 12} />
    </React.Fragment>
  );
}

export default SectionItem;

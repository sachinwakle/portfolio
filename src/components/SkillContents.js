import { Typography } from "@material-ui/core";
import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import { brown } from "@material-ui/core/colors";
const StyledRating = withStyles({
  iconFilled: {
    color: brown[500],
  },
})(Rating);

function Java() {
  return (
    <Typography variant="body1" gutterBottom>Java SE & J2EE</Typography>
  );
}

function Rest() {
  return (
    <Typography variant="body1" gutterBottom>
      SOAP JAX-WS & RESTful JAX-RS Web Services
    </Typography>
  );
}

function Database() {
  return (
    <Typography variant="body1" gutterBottom>
      MySql Server 5.6
    </Typography>
  );
}
function Tools() {
  return (
    <Typography variant="body1" gutterBottom>
      Apache Maven, Git, Tortoise SVN, WildFly 8 application server
    </Typography>
  );
}

function Spring() {
  return (
    <Typography variant="body1" gutterBottom>
      Spring & Spring Boot
    </Typography>
  );
}

function SkillRating({ratingValue}) {
  return (
    <StyledRating
      name="SkillRating"
      defaultValue={ratingValue}
      precision={0.5}
      icon={<FiberManualRecordIcon style={{ fontSize: "15" }} />}
      readOnly
    />
  );
}

export { Java, Rest, Database, Tools, Spring, SkillRating };

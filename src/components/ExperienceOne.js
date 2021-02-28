import { Grid,  Typography } from "@material-ui/core";
import React from "react";

function ExperienceOne() {
  return (
    <Grid item container direction="column" spacing={0}>
      <Typography variant="h5" style={{fontWeight:"bold"}}>Tata Consultancy Services Limited</Typography>
      <Typography variant="h6" gutterBottom>
        Java Developer
      </Typography>

      <Typography variant="h6" gutterBottom>
        Projects
      </Typography>

      <Grid item>
        <Typography variant="h6">
          BU - Cloud Plus Service Manager ITIL tool
        </Typography>
        <Typography variant="h6">Responsibility:</Typography>
        <Typography variant="body1">
          Performed Fullstack Dev activities at various phases of product
          development. Performed Back-End development such as implementing
          various services methods and handler methods with Java, Servlet and
          MySql Server 5.6 technlogies. Performed Front-End development with Ext
          Js 3.4, JavaScript, HTML, CSS technology. Performed Requriment
          Analysis, ImplementedDesign Documents and Test Cases. Performed Defect
          Fixing during QA phase till release and deployment of the product.
        </Typography>
        <Typography variant="h6">Technical Skills:</Typography>
        <Typography variant="body1">Java2EE, Ext Js 3.4, HTML, CSS</Typography>
        <Typography variant="h6">Tools:</Typography>
        <Typography variant="body1">
          Eclipse Luna IDE v4.4, Apache Maven build tool, Jenkins deployment
          tool, Chrome Dev debugging tool.
        </Typography>
        <Typography variant="body1" style={{ fontStyle: "italic" }}>
          Reduced defects counts during QA phase from 46% to 18% in Cloud Plus
          Project
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6">MePC Maersk Line</Typography>
        <Typography variant="body1">
          A large shipping corporation MePC is the electronic product catalogue,
          a dynamic electronic catalogue where users can search for products and
          services. This is basically a planning tool which returns the
          optimized product based on low cost and then low transit time.
        </Typography>
        <Typography variant="h6">Responsibility:</Typography>
        <Typography variant="body1">
          Writing Web Services using SOAP JAX-WS protocol and RESTful JAX-RS
          along with Apache Camel Router Enterprise Integration Pattern
        </Typography>
        <Typography variant="h6">Technical Skills:</Typography>
        <Typography variant="body1">
          POSTMAN, SOAP-UI, Jetty Server Apache Maven build tool, Eclipse IDE
        </Typography>
      </Grid>
    </Grid>
  );
}

const ExperienceOneDuration = () => {
  return <Typography variant="h6">Aug, 2015 - Aug, 2018</Typography>;
};

export { ExperienceOne, ExperienceOneDuration };

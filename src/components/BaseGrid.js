import { Grid } from "@material-ui/core";
import { green, yellow } from "@material-ui/core/colors";
import { Height } from "@material-ui/icons";
import React from "react";
import SectionItem from "./SectionItem";
import SectionInfo from "./SectionInfo";
import ExperienceFirst from "./ExperienceFirst";
import Education from "./Education";
import Achievements from "./Achievements";
import Interest from "./Interest";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Summary from "./Summary";
import NameBanner from "./NameBanner";
import ProfilePic from "./ProfilePic";

const style = {
  backgroundColor: "green",
};

function BaseGrid() {
  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid container justify="space-between" xs={12} sm={9}>
          <SectionItem id="profile-pic-container" xs={12} sm={6}>
            <ProfilePic />
          </SectionItem>
          <SectionItem id="name-banner" xs={12} sm={6}>
            <NameBanner />
          </SectionItem>
          <SectionItem id="summary" xs={12}>
            <Summary />
          </SectionItem>
          <SectionItem id="work-experience-section" xs={12} sm={6}>
            <ExperienceFirst />
          </SectionItem>
          <SectionItem id="education-section" xs={12} sm={6}>
            <Education />
          </SectionItem>
          <SectionItem id="skill-section" xs={12} sm={6}>
            <Skills />
          </SectionItem>
          <SectionItem id="achievement-section" xs={12} sm={6}>
            <Achievements />
          </SectionItem>
          <SectionItem id="personal-info-section" xs={12} sm={6}>
            <PersonalInfo />
          </SectionItem>
          <SectionItem id="interest-section" xs={12} sm={6}>
            <Interest />
          </SectionItem>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BaseGrid;

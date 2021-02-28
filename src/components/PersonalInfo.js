import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PersonalInfoContents from "./PersonalInfoContents";
import SectionInfo from './SectionInfo'
function PersonalInfo() {
  return (
    <SectionInfo
      cardTitle="Personal Info"
      cardIcon={<ContactMailIcon fontSize="large" />}
      cardContent={<PersonalInfoContents />}
    />
  );
}

export default PersonalInfo;

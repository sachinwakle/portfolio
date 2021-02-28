import React from "react";
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import SectionInfo from './SectionInfo'
import InterestContents from "./InterestContents";


function Interest() {
  return (
    <SectionInfo
      cardTitle="Interests"
      cardIcon={<SportsTennisIcon fontSize="large" />}
      cardContent={<InterestContents />}
    />
  );
}

export default Interest;

import React from "react";
import AchievementContents from "./AchievementContents";
import SportsIcon from "@material-ui/icons/Sports";
import SectionInfo from './SectionInfo'

function Achievements() {
  return (
    <SectionInfo
      cardTitle="Achievements"
      cardIcon={<SportsIcon fontSize="large" />}
      cardContent={<AchievementContents />}
    />
  );
}

export default Achievements;

import React from "react";
import SectionInfo from "./SectionInfo";
import BulletItem from "./BulletItem";
import { ExperienceOne, ExperienceOneDuration } from "./ExperienceOne";
import WorkIcon from "@material-ui/icons/Work";

function Tcs(){
  return (
    <BulletItem
      leftContent={<ExperienceOneDuration/>}
      rightContent={<ExperienceOne/>}
    />
  );
};

function ExperienceFirst() {
  return (
      <SectionInfo cardTitle="Experience" cardIcon={
          <WorkIcon fontSize="large"/>
      }  cardContent={
          <Tcs/>
      }/>
  );
}

export default ExperienceFirst;

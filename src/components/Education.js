import React from "react";
import SectionInfo from "./SectionInfo";
import BulletItem from "./BulletItem";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import {
  EducationOne,
  EducationOneDuration,
  EducationTwo,
  EducationTwoDuration,
  EducationThree,
  EducationThreeDuration,
} from "./EducationContents";

function EducationInfo() {
  return (
    <React.Fragment>
      <BulletItem
        leftContent={<EducationOneDuration />}
        rightContent={<EducationOne />}
      />
      <BulletItem
        leftContent={<EducationTwoDuration />}
        rightContent={<EducationTwo />}
      />
      <BulletItem
        leftContent={<EducationThreeDuration />}
        rightContent={<EducationThree />}
      />
    </React.Fragment>
  );
}

function Education() {
  return (
    <SectionInfo
      cardTitle="Education"
      cardIcon={<MenuBookIcon fontSize="large" />}
      cardContent={<EducationInfo />}
    />
  );
}

export default Education;

import React from "react";
import {
  Java,
  Rest,
  Database,
  Tools,
  Spring,
  SkillRating,
} from "./SkillContents";
import BulletItem from "./BulletItem";
import SettingsIcon from "@material-ui/icons/Settings";
import SectionInfo from './SectionInfo'

function SkillSet() {
  return (
    <React.Fragment>
      <BulletItem leftContent={<SkillRating ratingValue={4}/>} rightContent={<Java />} 
      leftCell={3} rightCell={9}/>
      <BulletItem leftContent={<SkillRating ratingValue={4}/>} rightContent={<Rest />} 
      leftCell={3} rightCell={9}/>
      <BulletItem leftContent={<SkillRating ratingValue={4}/>} rightContent={<Database />} 
      leftCell={3} rightCell={9}/>
      <BulletItem leftContent={<SkillRating ratingValue={5}/>} rightContent={<Tools />} 
      leftCell={3} rightCell={9}/>
      <BulletItem leftContent={<SkillRating ratingValue={3.5}/>} rightContent={<Spring />} 
      leftCell={3} rightCell={9}/>
    </React.Fragment>
  );
}

function Skills() {
  return (
    <SectionInfo
      cardTitle="Skills"
      cardIcon={<SettingsIcon fontSize="large" />}
      cardContent={<SkillSet />}
    />
  );
}

export default Skills;

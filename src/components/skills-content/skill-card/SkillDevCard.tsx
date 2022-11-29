import React from "react";
import classes from "./skill-card.module.scss";
import htmlTag from "../../../static/html-tag.svg";
import { CardDevTypes } from "./types";


export const SkillDevCard = ({ skillNumber, skill, content }: CardDevTypes) => {
  return (
    <div className={classes.container}>
      <div className={classes.tag}>
        <img src={htmlTag} alt="html-tag" />
      </div>
      <h4>{skillNumber}</h4>
      <h3>{skill}</h3>
      <p>{content}</p>
    </div>
  );
};

import React from "react";
import classes from "./skill-card.module.scss";
import designIcon from "../../../static/design-icon.svg";
import { CardDesignTypes } from "./types";

export const SkillDesignCard = ({ skillNumber, skill }: CardDesignTypes) => {
  return (
    <div

      style={{ maxHeight: "115px" }}
      className={classes.container}
    >
      <div className={classes.tag}>
        <img src={designIcon} alt="html-tag" />
      </div>
      <h4>{skillNumber}</h4>
      <h3>{skill}</h3>
    </div>
  );
};

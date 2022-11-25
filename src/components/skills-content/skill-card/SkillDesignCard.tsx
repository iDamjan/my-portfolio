import React from "react";
import classes from "./skill-card.module.scss";
import designIcon from "../../../static/design-icon.svg";
import { CardDesignTypes } from "./types";
import { motion } from "framer-motion";
export const SkillDesignCard = ({ skillNumber, skill }: CardDesignTypes) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3, rotate: 10 }}
      whileTap={{ scale: 0.8, rotate: -10 }}
      style={{ maxHeight: "115px" }}
      className={classes.container}
    >
      <div className={classes.tag}>
        <img src={designIcon} alt="html-tag" />
      </div>
      <h4>{skillNumber}</h4>
      <h3>{skill}</h3>
    </motion.div>
  );
};

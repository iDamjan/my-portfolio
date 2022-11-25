import React from "react";
import classes from "./skill-card.module.scss";
import htmlTag from "../../../static/html-tag.svg";
import { CardDevTypes } from "./types";
import { motion } from "framer-motion";

export const SkillDevCard = ({ skillNumber, skill, content }: CardDevTypes) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3, rotate:10 }}
      whileTap={{ scale: 0.8, rotate:-10 }}
      className={classes.container}
    >
      <div className={classes.tag}>
        <img src={htmlTag} alt="html-tag" />
      </div>
      <h4>{skillNumber}</h4>
      <h3>{skill}</h3>
      <p>{content}</p>
    </motion.div>
  );
};

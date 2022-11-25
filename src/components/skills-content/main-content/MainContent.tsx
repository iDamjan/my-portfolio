import React from "react";
import { SkillDevCard } from "../skill-card/SkillDevCard";
import classes from "./main-content.module.scss";
import { cardDevSkills, cardDesignSkills } from "../cardSkills";
import { SkillDesignCard } from "../skill-card/SkillDesignCard";
import { motion } from "framer-motion";

export const MainContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0.1, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={classes.container}
    >
      {cardDevSkills.map((skill) => {
        return (
          <SkillDevCard
            key={skill.id}
            skillNumber={skill.id}
            skill={skill.skill}
            content={skill.content}
          />
        );
      })}
      {cardDesignSkills.map((skill) => {
        return (
          <SkillDesignCard
            key={skill.id}
            skillNumber={skill.id}
            skill={skill.skill}
          />
        );
      })}
    </motion.div>
  );
};

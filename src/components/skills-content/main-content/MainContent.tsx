import React from "react";
import { SkillDevCard } from "../skill-card/SkillDevCard";
import classes from "./main-content.module.scss";
import { cardDevSkills, cardDesignSkills } from "../cardSkills";
import { SkillDesignCard } from "../skill-card/SkillDesignCard";


export const MainContent = () => {
  return (
    <div
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
    </div>
  );
};

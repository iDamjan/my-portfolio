import ProjectCard from "../project-card/ProjectCard";
import { projectData } from "../projects-data";
import classes from "./main-content.module.scss";

export const MainContent = () => {
  return (
    <div className={classes.container}>
      {projectData.map((project) => {
        return (
          <ProjectCard
            key={project.title}
            title={project.title}
            content={project.content}
            github={project.GitHub}
            image={project.image}
            webpage={project.WebPage}
            mobile={project.mobile}
          />
        );
      })}
    </div>
  );
};

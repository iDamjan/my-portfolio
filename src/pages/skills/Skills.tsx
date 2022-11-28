import classes from "./Skills.module.scss";
import { MainContent } from "../../components/skills-content/main-content/MainContent";

export default function Skills() {
  return (
    <div className={classes.container}>
      <MainContent />
    </div>
  );
}

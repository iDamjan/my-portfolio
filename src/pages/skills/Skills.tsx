import Navbar from "../../components/navbar/Navbar";
import SkillsBackground from '../../static/background-skills.png'
import classes from './Skills.module.scss'
import { MainContent } from "../../components/skills-content/main-content/MainContent";

export default function Skills() {
  return (
    <div
    className={classes.container}
      style={{ backgroundImage: `url(${SkillsBackground})` }}
    
    >
      <Navbar />
      <MainContent />
    </div>
  );
}

import classes from "./About.module.scss";
import MainContent from "../../components/about-me-content/main-content/MainContent";

export default function About() {
  return (
    <div
      className={classes.container}
    >
      <MainContent />
    </div>
  );
}

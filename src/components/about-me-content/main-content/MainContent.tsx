import classes from "./MainContent.module.scss";
import Button from "@mui/material/Button";
import PhoneIcon from "../../../static/phone-icon.svg";
import EmailIcon from "../../../static/email-icon.svg";
import ArrowFunction from "../../../static/arrow-function-hire.svg";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import ImageDamjan from "../../../static/me-icon.png";
import { copyEmailHandler } from "./utils/copyEmailHandler";
import { copyNumberHandler } from "./utils/copyNumberHandler";
// @ts-ignore
import cv from "../../../static/cv-damjan-stojanovski.pdf";

const MainContent = () => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  return (
    <>
      {copySuccess && (
        <Alert className={classes.alert} severity="success">
          Copying to clipboard succsesfull
        </Alert>
      )}
      <div className={classes.main}>
        <img className={classes.personalImage} src={ImageDamjan} alt="Damjan" />
        <div className={classes.container}>
          <div className={classes.heading}>
            <h1>About</h1>
          </div>
          <h3>
            Junior Frontend <span>Web Developer</span>
          </h3>
          <p>
            Passionate junior front-end developer with a desire to learn and
            grow in a collaborative team environment.
            <br />
            I've always loved working with technology and over time I've
            developed a wide variety of skills.
            <br />
            <br />
            Primarily focused on web development and also have practical
            knowledge of other technologies, practices, and principles.
            <br /> As a hardworking professional and a cheerful teammate, I
            believe that a good working atmosphere is a key to a motivated and
            successful team. <br />
            My biggest strength is my ability to learn and adapt quickly to new
            roles. <br /> <br />
            Currently, I am mainly focused on working with Javascript, ReactJS,
            Typescript, HTML & CSS, and SASS.
          </p>
          <div className={classes.flex}>
            <a href={cv} download>
              <Button className={classes.button} variant="contained">
                Download CV
              </Button>
            </a>
            <div className={classes.contactContainer}>
              <div
                onClick={() => copyNumberHandler(setCopySuccess)}
                className={classes.contact}
              >
                <img src={PhoneIcon} alt="phone icon" />
                <p>Phone</p>
                <h5>+38972307766</h5>
              </div>
              <div
                onClick={() => copyEmailHandler(setCopySuccess)}
                className={classes.contact}
              >
                <img src={EmailIcon} alt="Email icon" />
                <p>Email</p>
                <h5>damjan.stojanovski123@gmail.com</h5>
              </div>
            </div>
          </div>
          <img src={ArrowFunction} alt="Arrow function quote" />
        </div>
      </div>
    </>
  );
};

export default MainContent;

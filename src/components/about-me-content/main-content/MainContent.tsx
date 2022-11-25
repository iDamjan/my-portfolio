import classes from "./MainContent.module.scss";
import Button from "@mui/material/Button";
import PhoneIcon from "../../../static/phone-icon.svg";
import EmailIcon from "../../../static/email-icon.svg";
import ArrowFunction from "../../../static/arrow-function-hire.svg";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import ImageDamjan from "../../../static/me-icon.png";
import { motion } from "framer-motion";
// @ts-ignore
import cv from "../../../static/cv-damjan-stojanovski.pdf";

const MainContent = () => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const copyNumberHandler = () => {
    const number = "+38972307766";
    navigator.clipboard.writeText(number).then(
      function () {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 1500);
      },
      function (err) {
        return alert(err + "please try again");
      }
    );
  };
  const copyEmailHandler = () => {
    const email = "damjan.stojanovski123@gmail.com";
    navigator.clipboard.writeText(email).then(
      function () {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 1500);
      },
      function (err) {
        return alert(err + "please try again");
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0.1, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={classes.main}
    >
      {copySuccess && (
        <Alert severity="success">Copying to clipboard succsesfull</Alert>
      )}
       <img
            className={classes.personalImage}
            src={ImageDamjan}
            alt="Damjan"
          />
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>About</h1>
        </div>
        <h3>
          Junior Frontend <span>Web Developer</span>
        </h3>
        <p>
          Passionate junior front-end developer with a desire to learn and grow
          in a collaborative team environment. 
          I've always loved working with technology and so over time I've developed a wide variety of skills.
          Primarily focused on web development and practical knowledge of other
          technologies, practices, and principles. As a hardworking professional
          and a cheerful teammate, I believe that a good working atmosphere is a
          key to a motivated and successful team. My biggest strength is my
          ability to learn and adapt quickly to new roles. Currently, my work
          mainly is focused on working with Javascript, ReactJS, Typescript,
          HTML & CSS, and SASS.
        </p>
        <div className={classes.flex}>
         
         
          <a href={cv} download>
            <Button className={classes.button} variant="contained">
              Download CV
            </Button>
          </a>
          <div className={classes.contactContainer}>
            <div onClick={copyNumberHandler} className={classes.contact}>
              <img src={PhoneIcon} alt="phone icon" />
              <p>Phone</p>
              <h5>+38972307766</h5>
            </div>
            <div onClick={copyEmailHandler} className={classes.contact}>
              <img src={EmailIcon} alt="Email icon" />
              <p>Email</p>
              <h5>damjan.stojanovski123@gmail.com</h5>
            </div>
          </div>
        </div>
        <img src={ArrowFunction} alt="Arrow function quote" />
      </div>
    </motion.div>
  );
};

export default MainContent;

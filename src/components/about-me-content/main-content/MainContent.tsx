import classes from "./MainContent.module.scss";
import Button from "@mui/material/Button";
import PhoneIcon from "../../../static/phone-icon.svg";
import EmailIcon from "../../../static/email-icon.svg";
import ArrowFunction from "../../../static/arrow-function-hire.svg";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const MainContent = () => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const downloadCvHandler = () => {
    // using Java Script method to get PDF file
    fetch("cv-damjan-stojanovski.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cv-damjan-stojanovski.pdf";
        alink.click();
      });
    });
  };

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
    <>
      {copySuccess && (
        <Alert severity="success">Copying to clipboard succsesfull</Alert>
      )}
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>About</h1>
        </div>
        <h3>
          Junior Frontend <span>Web Developer</span>
        </h3>
        <p>
          Hi! My name is Damjan Stojanovski. I am a front-end web developer who
          is very enthusiastic about REACT, Javascript, typescript, and CSS. I
          have a lot of experience with these technologies and I am always
          looking to improve my skills. I am a quick learner and I am always
          willing to try new things. I am a team player and I am always looking
          to help others. I am also a very creative person and I love to come up
          with new ideas.
        </p>
        <div className={classes.flex}>
          <Button
            onClick={downloadCvHandler}
            className={classes.button}
            variant="contained"
          >
            Download CV
          </Button>
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
    </>
  );
};

export default MainContent;

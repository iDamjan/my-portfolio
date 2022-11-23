
  export const downloadCvHandler = () => {
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

  export const copyNumberHandler = ({setCopySuccess}:any) :any => {
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
  export const copyEmailHandler = ({setCopySuccess}:any):any => {
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
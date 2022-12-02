export const copyNumberHandler = (setCopySuccess:(value:boolean) => void) => {
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
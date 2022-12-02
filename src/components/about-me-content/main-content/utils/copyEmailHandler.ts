export const copyEmailHandler = (setCopySuccess:(value:boolean) => void) => {
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
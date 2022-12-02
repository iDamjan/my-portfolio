const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const invalidEmail = (value : string) =>{
    if (!emailRegex.test(value)) {
        return true;
      } else return false
}

export const invalidTextInput = (name:string) => {
    if (name.trim() === ""){
        return true
    }else return false
}
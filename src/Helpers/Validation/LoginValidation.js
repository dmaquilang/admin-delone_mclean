import { handleValidationChange } from "./CommonValidation";

export const validateLogin = (data, setIsError) => {
    var isValid = true;

    var isValidEmail = true
    var isValidPassword = true

    if(data.email === "") {
        handleValidationChange("email", true, setIsError);
        isValidRole = false;
    } else {
        handleValidationChange("email", false, setIsError);
        isValidRole = true;
    }

    if(data.password === "") {
        handleValidationChange("password", true, setIsError);
        isValidSex = false;
    } else {
        handleValidationChange("password", false, setIsError);
        isValidSex = true;
    }

    isValid = isValid && isValidEmail && isValidPassword

    return isValid
  
}
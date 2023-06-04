import { handleValidationChange } from "./CommonValidation";

export const validateDemographics = (data, setIsError) => {
    var isValid = true;

    var isValidRole = true
    var isValidSex = true
    var isValidAge = true
    var isValidYearCollege = true
    var isValidMinutesSpent = true

    if(data.role === "") {
        handleValidationChange("role", true, setIsError);
        isValidRole = false;
    } else {
        handleValidationChange("role", false, setIsError);
        isValidRole = true;
    }

    if(data.sex === "") {
        handleValidationChange("sex", true, setIsError);
        isValidSex = false;
    } else {
        handleValidationChange("sex", false, setIsError);
        isValidSex = true;
    }

    if(data.year_college === "") {
        handleValidationChange("year_college", true, setIsError);
        isValidYearCollege = false;
    } else {
        handleValidationChange("year_college", false, setIsError);
        isValidYearCollege = true;
    }

    if(data.age === "") {
        handleValidationChange("age", true, setIsError);
        isValidAge = false;
    } else {
        handleValidationChange("age", false, setIsError);
        isValidAge = true;
    }

    if(data.minutes_spent === "") {
        handleValidationChange("minutes_spent", true, setIsError);
        isValidMinutesSpent = false;
    } else {
        handleValidationChange("minutes_spent", false, setIsError);
        isValidMinutesSpent = true;
    }


    isValid = isValid && isValidRole && isValidSex && isValidAge && isValidMinutesSpent

    return isValid
  
}
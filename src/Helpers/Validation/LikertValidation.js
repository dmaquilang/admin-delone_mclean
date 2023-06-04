import { handleValidationChange } from "./CommonValidation";

export const validateLikert = (answers, setIsError) => {
    var isValid = true;

    var objValid = {
    isValidQ1:true,
    isValidQ2:true,
    isValidQ3:true,
    isValidQ4:true,
    isValidQ5:true,
    isValidQ6:true,
    isValidQ7:true,
    isValidQ8:true,
    isValidQ9:true,
    isValidQ10:true,
    isValidQ11:true,
    isValidQ12:true,
    isValidQ13:true,
    isValidQ14:true,
    isValidQ15:true,
    isValidQ16:true,
    isValidQ17:true,
    isValidQ18:true,
    isValidQ19:true,
    isValidQ20:true,
    isValidQ21:true,
    isValidQ22:true,
    isValidQ23:true,
    isValidQ24:true,
    }

    

    answers.map(data=>{
        if(data.ans === "") {
            handleValidationChange(`q${data.number}`, true, setIsError);
            objValid[`isValidQ${data.number}`] = false;
        } else {
            handleValidationChange(`q${data.number}`, false, setIsError);
            objValid[`isValidQ${data.number}`] = true
        }
    })

 

  


    isValid = isValid && objValid.isValidQ1 && objValid.isValidQ2 && objValid.isValidQ3 &&
    objValid.isValidQ4 && objValid.isValidQ5 && objValid.isValidQ6 && objValid.isValidQ7 &&
    objValid.isValidQ8 && objValid.isValidQ9 && objValid.isValidQ10 && objValid.isValidQ11 &&
    objValid.isValidQ12 && objValid.isValidQ13 && objValid.isValidQ14 && objValid.isValidQ15 &&
    objValid.isValidQ16 && objValid.isValidQ17 && objValid.isValidQ18 && objValid.isValidQ19 &&
    objValid.isValidQ20 && objValid.isValidQ22 && objValid.isValidQ23 && objValid.isValidQ24

    return isValid
  
}
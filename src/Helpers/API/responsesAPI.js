import { postAPICall, getAPICall } from "./axiosMethodCalls";

export const createResponse = async (id, answers) => {
    try {
        const response = await postAPICall(process.env.REACT_APP_LINK + 'responses/add', {
            respondent_id:id,
            question_ids:answers.map(data=>{
                return data.number
            }),
            responses:answers.map(data=>{
                return data.ans
            })
            });
          return ({data:response.data}); 
    } catch (error) {
        return ({error: error.response});
    }
}

export const createRespondent = async (demographics, respondent_id = null) => {
    try {
        const response = await postAPICall(process.env.REACT_APP_LINK + 'respondents/update/' + respondent_id, {
            ...demographics
            });
          return ({data:response.data}); 
    } catch (error) {
        return ({error: error.response});
    }
}

export const createEmail = async (email) => {
    console.log(email)
    try {
        const response = await postAPICall(process.env.REACT_APP_LINK + 'respondents/validate_email', {
            email
        });
          return ({data:response.data}); 
    } catch (error) {
        return ({error: error.response});
    }
}
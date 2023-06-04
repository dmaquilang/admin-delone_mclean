import axios from 'axios';

let config = {
    headers: {
        "api-key" : process.env.REACT_APP_KEY,
        "Content-Type": "application/json",
    }
}
let fileconfig = {
    headers: {
        "api-key" : process.env.REACT_APP_KEY,
        "Content-Type": "multipart/form-data",
    }
}

export const loginUser = async (username, password) => {

    try {
      const response = await postAPICall(process.env.REACT_APP_LINK + "logins", {
        username: username,
        password: password,
        user_type: "admin",
        // area_code: areaCode,
      });
      let userData = response.data.data;
      console.log(userData);
      if (userData) {
        localStorage.setItem("user", userData.id);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("role", userData.role);
        localStorage.setItem("token", userData.token);
      }
      return { data: response };
    } catch (error) {
      return { error: error.response };
    }
  };

export const getDemographics = async () => {

    try {
      const response = await postAPICall(process.env.REACT_APP_LINK + "data/demographics", {
      });
      let data = response.data.data;
      return { data: response };
    } catch (error) {
      return { error: error.response };
    }
  };

export const getDataSystemSuccess = async () => {

    try {
      const response = await postAPICall(process.env.REACT_APP_LINK + "data/systemsuccess", {
        // username: username,
        // password: password,
        // user_type: "admin",
        // area_code: areaCode,
      });
      let data = response.data.data;
      // console.log(data);
      // if (userData) {
      //   localStorage.setItem("user", userData.id);
      //   localStorage.setItem("name", userData.name);
      //   localStorage.setItem("role", userData.role);
      //   localStorage.setItem("token", userData.token);
      // }
      return { data: response };
    } catch (error) {
      return { error: error.response };
    }
  };

export const getData = async () => {

    try {
      const response = await postAPICall(process.env.REACT_APP_LINK + "data", {
        // username: username,
        // password: password,
        // user_type: "admin",
        // area_code: areaCode,
      });
      let data = response.data.data;
      // console.log(data);
      // if (userData) {
      //   localStorage.setItem("user", userData.id);
      //   localStorage.setItem("name", userData.name);
      //   localStorage.setItem("role", userData.role);
      //   localStorage.setItem("token", userData.token);
      // }
      return { data: response };
    } catch (error) {
      return { error: error.response };
    }
  };

export const verifyUser = async (id, token) => {

    try {
      const response = await postAPICall(process.env.REACT_APP_LINK + "logins/verify", {
        id: id,
        token: token
      });
      return response;
    } catch (error) {
      return false;
    }
  };

export const logoutUser = async () => {
  try {
    console.log(localStorage["user"], localStorage["token"]);

    const response = await postAPICall(process.env.REACT_APP_LINK + "logouts", {
      requester: localStorage["user"],
      token: localStorage["token"]
    });

    // localStorage.setItem("user", null);
    // localStorage.setItem("token", null);

    // removeUserSession();
    return { data: response.data };
  } catch (error) {
    return { error: error.response };
  }
};

// API Axios Get Call.
export const getAPICall = (url, data) => {
    return axios.get(url, data, config);
}

// API Axios Post Call.
export const postAPICall = (url, data) => {
    return axios.post(url, data, config);
}

// API Axios Post Call.
export const postAPICall2 = (url, data) => {
    return axios.post(url, data, fileconfig);
}

// API Axios Put Call.
export const putAPICall = (url, data) => {
    return axios.put(url, data, config);
}

// API Axios Delete Call.
export const deleteAPICall = (url) => {
    return axios.delete(url,config);
}

export const getAPICallGoogle = (url) => {
    return axios.get(url);
}
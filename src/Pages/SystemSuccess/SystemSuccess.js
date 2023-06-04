import React, {useState, useEffect} from 'react'
import { Row, Col, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SystemSuccess.css';
import NavBar from '../../Components/NavBar/Navbar';
import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";
import { HistogramChart } from "@carbon/charts-react";
import { getDataSystemSuccess } from '../../Helpers/API/axiosMethodCalls';
import { verifyUser } from '../../Helpers/API/axiosMethodCalls';

//Q1
const mockdata1= {
	state : {
		data: [
			{
				"group": "Dataset 1",
				"q1": 1
			},
		  {
				"group": "Dataset 1",
				"q1": 2
			},

			{
			"group": "Dataset 1",
			"q1": 3
			},
		  {
				"group": "Dataset 1",
				"q1": 4
			},
		  {
				"group": "Dataset 1",
				"q1": 5
			},
],

		options: {
	"title": "Q1: SAIS is simple for me to use",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q1",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 1": "#ff598f",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};

  //Q1
const mockdata2= {
	state : {
		data: [
	{
		"group": "Dataset 2",
		"q2": 4
	},
  {
		"group": "Dataset 2",
		"q2": 5
	},

{
  "group": "Dataset 2",
  "q2": 5
},
  {
		"group": "Dataset 2",
		"q2": 6
	},
],

		options: {
	"title": "Q2. It is simple for me to get SAIS to do what I want",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q2",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 2": "#fd8a5e",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata3= {
	state : {
		data: [
	{
		"group": "Dataset 3",
		"q3": 4
	},
  {
		"group": "Dataset 3",
		"q3": 5
	},

{
  "group": "Dataset 3",
  "q3": 5
},
  {
		"group": "Dataset 3",
		"q3": 6
	},
],
		options: {
	"title": "Q3. SAIS allows for versatile interaction",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q3",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 3": "#e0e300",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata4= {
	state : {
		data: [
	{
		"group": "Dataset 4",
		"q4": 4
	},
  {
		"group": "Dataset 4",
		"q4": 5
	},

{
  "group": "Dataset 4",
  "q4": 5
},
  {
		"group": "Dataset 4",
		"q4": 6
	},
],
		options: {
	"title": "Q4. I had no trouble figuring out how to use SAIS",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q4",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 4": "#01dddd",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata5= {
	state : {
		data: [
	{
		"group": "Dataset 5",
		"q5": 4
	},
  {
		"group": "Dataset 5",
		"q5": 5
	},

{
  "group": "Dataset 5",
  "q5": 5
},
  {
		"group": "Dataset 5",
		"q5": 6
	},
],
		options: {
	"title": "Q5. SAIS generated information is accurate",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q5",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 5": "#c39797",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata6= {
	state : {
		data: [
	{
		"group": "Dataset 6",
		"q6": 4
	},
  {
		"group": "Dataset 6",
		"q6": 5
	},

{
  "group": "Dataset 6",
  "q6": 5
},
  {
		"group": "Dataset 6",
		"q6": 6
	},
],
		options: {
	"title": "Q6. SAIS generated information serves its intended purpose",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q6",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 6": "#0000ff",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata7= {
	state : {
		data: [
	{
		"group": "Dataset 7",
		"q7": 4
	},
  {
		"group": "Dataset 7",
		"q7": 5
	},

{
  "group": "Dataset 7",
  "q7": 5
},
  {
		"group": "Dataset 7",
		"q7": 6
	},
],
		options: {
	"title": "Q7. Information from SAIS is generated in a timely manner",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q7",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 7": "#420420",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata8= {
	state : {
		data: [
	{
		"group": "Dataset 8",
		"q8": 4
	},
  {
		"group": "Dataset 8",
		"q8": 5
	},

{
  "group": "Dataset 8",
  "q8": 5
},
  {
		"group": "Dataset 8",
		"q8": 6
	},
],
		options: {
	"title": "Q8. I am confident with the information generated by SAIS",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q8",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 8": "#ff4040",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata9= {
	state : {
		data: [
	{
		"group": "Dataset 9",
		"q9": 4
	},
  {
		"group": "Dataset 9",
		"q9": 5
	},

{
  "group": "Dataset 9",
  "q9": 5
},
  {
		"group": "Dataset 9",
		"q9": 6
	},
],
		options: {
	"title": "Q9. The system provider offers adequate technical assistance",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q9",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 9": "#008000",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata10= {
	state : {
		data: [
	{
		"group": "Dataset 10",
		"q10": 4
	},
  {
		"group": "Dataset 10",
		"q10": 5
	},

{
  "group": "Dataset 10",
  "q10": 5
},
  {
		"group": "Dataset 10",
		"q10": 6
	},
],
		options: {
	"title": "Q10. The current system infrastructure is sufficient to support SAIS",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q10",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		} 
	},
  "color": {
    "scale":{
      "Dataset 10": "#468499",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata11= {
	state : {
		data: [
	{
		"group": "Dataset 11",
		"q11": 4
	},
  {
		"group": "Dataset 11",
		"q11": 5
	},

{
  "group": "Dataset 11",
  "q11": 5
},
  {
		"group": "Dataset 11",
		"q11": 6
	},
],
		options: {
	"title": "Q11. SAIS can be relied upon to deliver information when necessary",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q11",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 11": "#ff80ed",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata12= {
	state : {
		data: [
	{
		"group": "Dataset 12",
		"q12": 4
	},
  {
		"group": "Dataset 12",
		"q12": 5
	},
  {
    "group": "Dataset 12",
    "q12": 5
  },
  {
		"group": "Dataset 12",
		"q12": 6
	},
],
		options: {
	"title": "Q12. SAIS is complete for work procedures",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q12",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 12": "#b8905e",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata13= {
	state : {
		data: [
	{
		"group": "Dataset 13",
		"q13": 4
	},
  {
		"group": "Dataset 13",
		"q13": 5
	},

{
  "group": "Dataset 13",
  "q13": 5
},
  {
		"group": "Dataset 13",
		"q13": 6
	},
],
		options: {
	"title": "Q13. I can complete transactions more rapidly by utilizing SAIS",
	"axes": {
		"bottom": {
			"title": "Scores",
			"mapsTo": "q13",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 13": "#f1c232",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata14= {
	state : {
		data: [
	{
		"group": "Dataset 14",
		"q14": 4
	},
  {
		"group": "Dataset 14",
		"q14": 5
	},

{
  "group": "Dataset 14",
  "q14": 5
},
  {
		"group": "Dataset 14",
		"q14": 6
	},
],
		options: {
	"title": "Q14. Using SAIS has increased my transaction performance",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q14",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 14": "#a24444",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata15= {
	state : {
		data: [
	{
		"group": "Dataset 15",
		"q15": 4
	},
  {
		"group": "Dataset 15",
		"q15": 5
	},

{
  "group": "Dataset 15",
  "q15": 5
},
  {
		"group": "Dataset 15",
		"q15": 6
	},
],
		options: {
	"title": "Q15. Transactions has been made simpler by using SAIS",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q15",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 15": "#8b9de6",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata16= {
	state : {
		data: [
	{
		"group": "Dataset 16",
		"q16": 4
	},
  {
		"group": "Dataset 16",
		"q16": 5
	},

{
  "group": "Dataset 16",
  "q16": 5
},
  {
		"group": "Dataset 16",
		"q16": 6
	},
],
		options: {
	"title": "Q16. SAIS is helpful to me in my transactions",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q16",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 16": "#7c4bb0",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata17= {
	state : {
		data: [
	{
		"group": "Dataset 17",
		"q17": 4
	},
  {
		"group": "Dataset 17",
		"q17": 5
	},

{
  "group": "Dataset 17",
  "q17": 5
},
  {
		"group": "Dataset 17",
		"q17": 6
	},
],
		options: {
	"title": "Q17. I am satisfied with how SAIS functions",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q17",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 17": "#31312e",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata18= {
	state : {
		data: [
	{
		"group": "Dataset 18",
		"q18": 4
	},
  {
		"group": "Dataset 18",
		"q18": 5
	},

{
  "group": "Dataset 18",
  "q18": 5
},
  {
		"group": "Dataset 18",
		"q18": 6
	},
],
		options: {
	"title": "Q18. SAIS has made transaction procedures easier",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q18",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 18": "#7e8560",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
const mockdata19= {
	state : {
		data: [
	{
		"group": "Dataset 19",
		"q19": 4
	},
  {
		"group": "Dataset 19",
		"q19": 5
	},

{
  "group": "Dataset 19",
  "q19": 5
},
  {
		"group": "Dataset 19",
		"q19": 6
	},
],
		options: {
	"title": "Q19. I am generally satisfied when utilizing SAIS",
	"axes": {
		"bottom": {
			"title": "Score",
			"mapsTo": "q19",
			"bins": 6,
			"limitDomainToBins": true
		},
		"left": {
			"title": "No. of Respondents",
			"scaleType": "linear",
			"binned": true
		}
	},
  "color": {
    "scale":{
      "Dataset 19": "#2703a6",
    }
  },
	"height": "400px",
	"legend": false,
}
	}};
  //Q1
  const mockdata20= {
    state : {
      data: [
    {
      "group": "Dataset 20",
      "q20": 4
    },
    {
      "group": "Dataset 20",
      "q20": 5
    },
  
  {
    "group": "Dataset 20",
    "q20": 5
  },
    {
      "group": "Dataset 20",
      "q20": 6
    },
  ],
      options: {
    "title": "Q20. The paper-based system's shortcomings are effectively addressed by SAIS",
    "axes": {
      "bottom": {
        "title": "Score",
        "mapsTo": "q20",
        "bins": 6,
        "limitDomainToBins": true
      },
      "left": {
        "title": "No. of Respondents",
        "scaleType": "linear",
        "binned": true
      }
    },
    "color": {
      "scale":{
        "Dataset 20": "#98cc6c",
      }
    },
    "height": "400px",
	  "legend": false,
  }
    }};
  //Q1
  const mockdata21= {
    state : {
      data: [
    {
      "group": "Dataset 21",
      "q21": 4
    },
    {
      "group": "Dataset 21",
      "q21": 5
    },
  
  {
    "group": "Dataset 21",
    "q21": 5
  },
    {
      "group": "Dataset 21",
      "q21": 6
    },
  ],
      options: {
    "title": "Q21. Using SAIS cause an improvement on student academic related transactions",
    "axes": {
      "bottom": {
        "title": "Score",
        "mapsTo": "q21",
        "bins": 6,
        "limitDomainToBins": true
      },
      "left": {
        "title": "No. of Respondents",
        "scaleType": "linear",
        "binned": true
      }
    },
    "color": {
      "scale":{
        "Dataset 21": "#ffdab9",
      }
    },
    "height": "400px",
	"legend": false,
  }
    }};
  //Q1
  const mockdata22= {
    state : {
      data: [
    {
      "group": "Dataset 22",
      "q22": 4
    },
    {
      "group": "Dataset 22",
      "q22": 5
    },
  
  {
    "group": "Dataset 22",
    "q22": 5
  },
    {
      "group": "Dataset 22",
      "q22": 6
    },
  ],
      options: {
    "title": "Q22. SAIS makes it simple to obtain student information",
    "axes": {
      "bottom": {
        "title": "Score",
        "mapsTo": "q22",
        "bins": 6,
        "limitDomainToBins": true
      },
      "left": {
        "title": "No. of Respondents",
        "scaleType": "linear",
        "binned": true
      }
    },
    "color": {
      "scale":{
        "Dataset 22": "#990000",
      }
    },
    "height": "400px",
	"legend": false,
  }
    }};
  //Q1
  const mockdata23= {
    state : {
      data: [
        {
          "group": "Dataset 23",
          "q23": 2
        },
    {
      "group": "Dataset 23",
      "q23": 4.9
    },
    {
      "group": "Dataset 23",
      "q23": 5.5
    },
  
  {
    "group": "Dataset 23",
    "q23": 5
  },
    {
      "group": "Dataset 23",
      "q23": 6
    },
  ],
      options: {
    "title": "Q23. SAIS improves transaction communication",
    "axes": {
      "bottom": {
        "title": "Score",
        "mapsTo": "q23",
        "bins": 6,
        "limitDomainToBins": true
      },
      "left": {
        "title": "No. of Respondents",
        "scaleType": "linear",
        "binned": true
      }
    },
    "color": {
      "scale":{
        "Dataset 23": "#088da5",
      }
    },
    "height": "400px",
	"legend": false,
  }
    }};
  //Q24
  const mockdata24= {
    state : {
      data: [
    {
      "group": "Dataset 24",
      "q24": 4
    },
    {
      "group": "Dataset 24",
      "q24": 5
    },
  
  {
    "group": "Dataset 24",
    "q24": 5
  },
    {
      "group": "Dataset 24",
      "q24": 6
    },
  ],
      options: {
    "title": "Q24. Utilizing SAIS results in better judgment on student academic related transactions",
    "axes": {
      "bottom": {
        "title": "Score",
        "mapsTo": "q24",
        "bins": 6,
        "limitDomainToBins": true
      },
      "left": {
        "title": "No. of Respondents",
        "scaleType": "linear",
        "binned": true
      }
    },
    "color": {
      "scale":{
        "Dataset 24": "#ff1493",
      }
    },
    "height": "400px",
	"legend": false,
  }
    }};

var data = [
  
]

function SystemSuccess() {
  // const [email, setEmail] = useState("")
  // const [isValid, setIsValid] = useState(false)
  const [dataRes, setDataRes] = useState(null);
  const [isVerified, setIsVerified] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    get_data();
    api_verification();
  }, []); //no dependency array.

  const api_verification = async () => {
    const response = await verifyUser(localStorage["user"], localStorage["token"]);
    if(response.data.verified == false) {
      window.location.href = "/";
    }
    setIsVerified(response.data.verified);
  }

  const get_data = async () => {
    const response = await getDataSystemSuccess();
    console.log(response);
    let respondents = response.data.data;
    let newData = [];
		mockdata1.state.data = respondents.q1;
		mockdata2.state.data = respondents.q2;
		mockdata3.state.data = respondents.q3;
		mockdata4.state.data = respondents.q4;
		mockdata5.state.data = respondents.q5;
		mockdata6.state.data = respondents.q6;
		mockdata7.state.data = respondents.q7;
		mockdata8.state.data = respondents.q8;
		mockdata9.state.data = respondents.q9;
		mockdata10.state.data = respondents.q10;
		mockdata11.state.data = respondents.q11;
		mockdata12.state.data = respondents.q12;
		mockdata13.state.data = respondents.q13;
		mockdata14.state.data = respondents.q14;
		mockdata15.state.data = respondents.q15;
		mockdata16.state.data = respondents.q16;
		mockdata17.state.data = respondents.q17;
		mockdata18.state.data = respondents.q18;
		mockdata19.state.data = respondents.q19;
		mockdata20.state.data = respondents.q20;
		mockdata21.state.data = respondents.q21;
		mockdata22.state.data = respondents.q22;
		mockdata23.state.data = respondents.q23;
		mockdata24.state.data = respondents.q24;
    console.log(respondents);

    // respondents.forEach(function(respondent) {
    //   let temp = {
    //     'id': respondent.id,
    //     'Email': respondent.email,
    //     'Role': respondent.role,
    //     'Year': respondent.year_college,
    //     'Sex': respondent.sex,
    //     'Age': respondent.age,
    //     'TimeSpent': respondent.minutes_spent,
    //     'Q1': respondent.responses[0],
    //     'Q2': respondent.responses[1],
    //     'Q3': respondent.responses[2],
    //     'Q4': respondent.responses[3], 
    //     'Q5': respondent.responses[4],
    //     'Q6': respondent.responses[5],
    //     'Q7': respondent.responses[6],
    //     'Q8': respondent.responses[7],
    //     'Q9': respondent.responses[8],
    //     'Q10': respondent.responses[9],
    //     'Q11': respondent.responses[10],
    //     'Q12': respondent.responses[11],
    //     'Q13': respondent.responses[12],
    //     'Q14': respondent.responses[13],
    //     'Q15': respondent.responses[14],
    //     'Q16': respondent.responses[15],
    //     'Q17': respondent.responses[16],
    //     'Q18': respondent.responses[17],
    //     'Q19': respondent.responses[18],
    //     'Q20': respondent.responses[19],
    //     'Q21': respondent.responses[20],
    //     'Q22': respondent.responses[21],
    //     'Q23': respondent.responses[22],
    //     'Q24': respondent.responses[23]
    //   }
    //   newData.push(temp);
    // })
    data = newData;
    setDataRes(response.data.data);
  }

  return (
    <Container>
      <Row>
        <Col lg={1}>
          <NavBar></NavBar>
        </Col>
        <Col lg={10} className='box'>
          <Row className='d-flex data-title wrap'>
            SYSTEM SUCCESS
          </Row>

          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata1.state.data}
			                  options={mockdata1.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata2.state.data}
			                  options={mockdata2.state.options}
                        style={{fillColor:"yellow"}}>
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata3.state.data}
			                  options={mockdata3.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata4.state.data}
			                  options={mockdata4.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata5.state.data}
			                  options={mockdata5.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata6.state.data}
			                  options={mockdata6.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata7.state.data}
			                  options={mockdata7.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata8.state.data}
			                  options={mockdata8.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata9.state.data}
			                  options={mockdata9.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata10.state.data}
			                  options={mockdata10.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata11.state.data}
			                  options={mockdata11.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata12.state.data}
			                  options={mockdata12.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata13.state.data}
			                  options={mockdata13.state.options}
                        style={{color:"yellow"}}>
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata14.state.data}
			                  options={mockdata14.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata15.state.data}
			                  options={mockdata15.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata16.state.data}
			                  options={mockdata16.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata17.state.data}
			                  options={mockdata17.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata18.state.data}
			                  options={mockdata18.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata19.state.data}
			                  options={mockdata19.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata20.state.data}
			                  options={mockdata20.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata21.state.data}
			                  options={mockdata21.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata22.state.data}
			                  options={mockdata22.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className='d-flex justify-content-around logo' >
                  	<HistogramChart
			                  data={mockdata23.state.data}
			                  options={mockdata23.state.options}
                       >
                       
		                  </HistogramChart>
	                  
            </Col>
            <Col lg={5} className='d-flex justify-content-around logo' >
            <HistogramChart
			                  data={mockdata24.state.data}
			                  options={mockdata24.state.options}
                       >
                       
		                  </HistogramChart>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SystemSuccess
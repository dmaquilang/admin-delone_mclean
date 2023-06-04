import React, {useState, useEffect} from 'react'
import { Row, Col, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { PieChart } from 'react-minimal-pie-chart';
import './Demographics.css';
import { Chart } from "react-google-charts";
import NavBar from '../../Components/NavBar/Navbar';
import { getDemographics } from '../../Helpers/API/axiosMethodCalls';

// mock data

function Demographics() {
  //Role in SAIS data
  const [RIS, setRIS] = useState();
  const [RISpie, setRISpie] = useState();

  const [optPie, setOptPie] = useState({
    chart: {
      title: "Role in SAIS",
    },
    axes: {
      y: {
        0: { side: 'top', label: 'Number of Respondents'} // Top x-axis.
      }
    }
  });

  //Student Year Level
  const [ SYL, setSYL] = useState();
  const [ SYLpie, setSYLpie] = useState();
  const [SYLoption, setSYLoption] = useState({
    chart: {
      title: "Student Year Level",
    },
    axes: {
      y: {
        0: { side: 'top', label: 'Number of Students'} // Top x-axis.
      }
    }
  });
  //FACULTY/ADMIN COLLEGE
  const [ FAC, setFAC] = useState();
  const [ FACpie, setFACpie] = useState();
  const [FACopt, setFACopt] = useState({
    chart: {
      title: "Faculty/Admin College",
    },
    axes: {
      y: {
        0: { side: 'top', label: 'Number of Faculties/Admin'} // Top x-axis.
      }
    }
  });
  //SEX
  const [SEX, setSEX] = useState();
  const [SEXpie, setSEXpie] = useState();
  const [SEXopt, setSEXopt] = useState({
    chart: {
      title: "Sex",
    },
    axes: {
      y: {
        0: { side: 'top', label: 'Number of Respondents'} // Top x-axis.
      }
    }
  });
  //AGE
  const [ AGE, setAGE] = useState();
  const [ AGEpie, setAGEpie] = useState();
  const [AGEopt, setAGEopt] = useState({
    chart: {
      title: "Age",
      slices: {
        5: { label: 'Other', color: 'black' },
      },
      hAxis: {
        title: "Year",
        titleTextStyle: {
          fontSize: 14,
          color: "#333",
        },
        titlePosition: "in",
      },
    },
    axes: {
      y: {
        0: { side: 'top', label: 'Number of Respondents'} // Top x-axis.
      }
    }
  });
  //MONTHLY AVERAGE SPENT ON SAIS
  const [ MAS, setMAS] = useState();
  const [ MASpie, setMASpie] = useState();
  const [MASopt, setMASopt] = useState({
    chart: {
      title: "Monthly Average Spent on SAIS",
    },
    axes: {
      y: {
        0: { side: 'top', label: 'Number of Respondents'} // Top x-axis.
      }
    }
  });

  useEffect(() => {
    get_demographics();
  }, []);

  const get_demographics = async () => {
    const response = await getDemographics();
    console.log(response);
    let counts = response.data.data;
    console.log(counts);
    setRIS (counts.RIS);
    setRISpie (counts.RISpie);
    setSYL (counts.SYL);
    setSYLpie (counts.SYLpie);
    setFAC (counts.FAC);
    setFACpie (counts.FACpie);
    setSEX (counts.SEX);
    setSEXpie (counts.SEXpie);
    console.log(counts.AGE)
    // let max = counts.AGE[0][1];
    // for(let i = 1; i<counts.AGE[0].length; i++) {
    //   if(counts.AGE[0][i] >= max) {
    //     ordered_arr[0].unshift(counts.AGE[0][i])
    //     ordered_arr[1].unshift(counts.AGE[1][i])
    //     max = counts.AGE[0][i];
    //   } else {
    //     ordered_arr[0].push(counts.AGE[0][i])
    //     ordered_arr[1].push(counts.AGE[1][i])
    //   }
    // }
    // ordered_arr[0].unshift(counts.AGE[0][0])
    // ordered_arr[1].unshift(counts.AGE[1][0])

    let ordered_arr = [[],[]];

    // let sortedTest = counts.AGE[0].map((value, index) => [value, counts.AGE[1][index]])
    // .sort((a, b) => a[1] - b[1])
    // .map((value) => value[0]);

    for (let i = 0; i < counts.AGE[0].length; i++) {
      ordered_arr[0].push(counts.AGE[0][i]);
      ordered_arr[1].push(counts.AGE[1][i]);
    }

    for (let i = 1; i < ordered_arr[0].length; i++) {
      for (let j = i + 1; j < ordered_arr[0].length; j++) {
        if (ordered_arr[1][i] < ordered_arr[1][j]) {
          let temp1 = ordered_arr[0][i];
          let temp2 = ordered_arr[1][i];

          ordered_arr[0][i] = ordered_arr[0][j];
          ordered_arr[1][i] = ordered_arr[1][j];
          ordered_arr[0][j] = temp1;
          ordered_arr[1][j] = temp2;
        }

      }
    }

    setAGE(ordered_arr);
    // setAGE(ordered_arr);
    // setAGE (counts.AGE.sort((a, b) => b[1] - a[1]));

    let filteredAGEpie = [];
    let others = 0;
    counts.AGEpie.forEach(function(age, index) {
      let count = age[1];
      if(age[0] != 'Age' && count < 8) {
        others += 1;
      } else {
        filteredAGEpie.push(age);
      }
    });

    filteredAGEpie.push(["Others", others]);

    console.log(counts.AGEpie);
    setAGEpie (filteredAGEpie);
    setMAS (counts.MAS);
    setMASpie (counts.MASpie);    
    console.log(counts);
    // let newData = [];
    // respondents.forEach(function(respondent) {
    //   newData.push(temp);
    // })
    // data = newData;
    // setDataRes(response.data.data);
  }

  const navigate = useNavigate()
  return (
    <Container>
      <Row>
        <Col lg={2}>
          <NavBar></NavBar>
        </Col>
          <Col lg={10} className='box'>
            <Row className='d-flex data-title wrap'>
              DEMOGRAHICS
            </Row>
            {/* ROLE IN SAIS */}
            <Row className='d-flex graph wrap'>
              <Col lg={6} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="300px"
                  data={RIS}
                  options={optPie}
                 
                />
              </Col>

              <Col lg={5} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="PieChart"
                  data={RISpie}
                  options={optPie.chart}
                  width={"100%"}
                  height={"300px"}
                />
              </Col>
            </Row>
            <hr></hr>
            {/* STUDENT YEAR LEVEL */}
            <Row className='d-flex graph wrap'>
              <Col lg={6} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="300px"
                  data={SYL}
                  options={SYLoption}
                 
                />
              </Col>

              <Col lg={5} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="PieChart"
                  data={SYLpie}
                  options={SYLoption.chart}
                  width={"100%"}
                  height={"300px"}
                />
              </Col>
            </Row>
            <hr></hr>
            {/* FACULTY/ADMIN COLLEGE */}
            <Row className='d-flex graph wrap'>
              <Col lg={6} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="300px"
                  data={FAC}
                  options={FACopt}
                />
              </Col>

              <Col lg={5} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="PieChart"
                  data={FACpie}
                  options={FACopt.chart}
                  width={"100%"}
                  height={"300px"}
                />
              </Col>
            </Row>
            <hr></hr>
            {/* SEX */}
            <Row className='d-flex graph wrap'>
              <Col lg={6} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="300px"
                  data={SEX}
                  options={SEXopt}
                />
              </Col>

              <Col lg={5} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="PieChart"
                  data={SEXpie}
                  options={SEXopt.chart}
                  width={"100%"}
                  height={"300px"}
                />
              </Col>
            </Row>
            <hr></hr>
            {/* AGE */}
            <Row className='d-flex graph wrap'>
              <Col lg={6} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="300px"
                  data={AGE}
                  options={AGEopt}
                  
                />
              </Col>

              <Col lg={5} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="PieChart"
                  data={AGEpie}
                  options={AGEopt.chart}
                  width={"100%"}
                  height={"300px"}
                />
              </Col>
            </Row>
            <hr></hr>
            {/* MONTHLY AVERAGE SPENT IN SAIS */}
            <Row className='d-flex graph wrap'>
              <Col lg={7} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="300px"
                  data={MAS}
                  options={MASopt}
                />
              </Col>

              <Col lg={5} className='d-flex justify-content-around logo' >
                <Chart
                  chartType="PieChart"
                  data={MASpie}
                  options={MASopt.chart}
                  width={"100%"}
                  height={"300px"}
                />
              </Col>
            </Row>

          </Col>
      </Row>
    </Container>
  )
}

export default Demographics
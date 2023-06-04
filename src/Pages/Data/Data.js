import React, {useState, useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { CSVLink } from "react-csv";
import { verifyUser } from '../../Helpers/API/axiosMethodCalls';
import NavBar from '../../Components/NavBar/Navbar';
import { getData } from '../../Helpers/API/axiosMethodCalls';
import './Data.css';
//mock up data
const columns = [
  {
      name: 'ID',
      selector: row => row.id,
  },
  {
      name: 'Email',
      selector: row => row.Email,
  },
  {
      name: 'Role in SAIS',
      selector: row => row.Role,
  },
  {
    name: 'Year/College',
    selector: row => row.Year,
},
{
  name: 'Sex',
  selector: row => row.Sex,
},
{
  name: 'Age',
  selector: row => row.Age,
},
{
  name: 'Time spent in SAIS',
  selector: row => row.TimeSpent,
},
{
  name: 'Q1',
  selector: row => row.Q1,
},
{
  name: 'Q2',
  selector: row => row.Q2,
},
{
  name: 'Q3',
  selector: row => row.Q3,
},
{
  name: 'Q4',
  selector: row => row.Q4,
},
{
  name: 'Q5',
  selector: row => row.Q5,
},
{
  name: 'Q6',
  selector: row => row.Q6,
},
{
  name: 'Q7',
  selector: row => row.Q7,
},
{
  name: 'Q8',
  selector: row => row.Q8,
},
{
  name: 'Q9',
  selector: row => row.Q9,
},
{
  name: 'Q10',
  selector: row => row.Q10,
},{
  name: 'Q11',
  selector: row => row.Q11,
},
{
  name: 'Q12',
  selector: row => row.Q12,
},
{
  name: 'Q13',
  selector: row => row.Q13,
},
{
  name: 'Q14',
  selector: row => row.Q14,
},
{
  name: 'Q15',
  selector: row => row.Q15,
},
{
  name: 'Q16',
  selector: row => row.Q16,
},
{
  name: 'Q17',
  selector: row => row.Q17,
},
{
  name: 'Q18',
  selector: row => row.Q18,
},
{
  name: 'Q19',
  selector: row => row.Q19,
},
{
  name: 'Q20',
  selector: row => row.Q20,
},
{
  name: 'Q21',
  selector: row => row.Q21,
},
{
  name: 'Q22',
  selector: row => row.Q22,
},
{
  name: 'Q23',
  selector: row => row.Q23,
},
{
  name: 'Q24',
  selector: row => row.Q24,
},


];

var data = [
  
]

function Data() {
  const [dataRes, setDataRes] = useState(null);
  const [isVerified, setIsVerified] = useState(true);

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
    const response = await getData();
    console.log(response);
    let respondents = response.data.data;
    let newData = [];
    respondents.forEach(function(respondent) {
      let temp = {
        'id': respondent.id,
        'Email': respondent.email,
        'Role': respondent.role,
        'Year': respondent.year_college,
        'Sex': respondent.sex,
        'Age': respondent.age,
        'TimeSpent': respondent.minutes_spent,
        'Q1': respondent.responses[0],
        'Q2': respondent.responses[1],
        'Q3': respondent.responses[2],
        'Q4': respondent.responses[3], 
        'Q5': respondent.responses[4],
        'Q6': respondent.responses[5],
        'Q7': respondent.responses[6],
        'Q8': respondent.responses[7],
        'Q9': respondent.responses[8],
        'Q10': respondent.responses[9],
        'Q11': respondent.responses[10],
        'Q12': respondent.responses[11],
        'Q13': respondent.responses[12],
        'Q14': respondent.responses[13],
        'Q15': respondent.responses[14],
        'Q16': respondent.responses[15],
        'Q17': respondent.responses[16],
        'Q18': respondent.responses[17],
        'Q19': respondent.responses[18],
        'Q20': respondent.responses[19],
        'Q21': respondent.responses[20],
        'Q22': respondent.responses[21],
        'Q23': respondent.responses[22],
        'Q24': respondent.responses[23]
      }
      newData.push(temp);
    })
    data = newData;
    setDataRes(response.data.data);
  }
  return isVerified == true ? (
    <Container>
      <Row>
        <Col lg={2}>
          <NavBar></NavBar>
        </Col>
        <Col lg={10} className='box'>
          <Row className='d-flex data-title wrap'>
            DATA
          </Row>
          <Row>
            <CSVLink data={data}><button className='csv' type='button'>
              Export</button> </CSVLink>
            <DataTable
              columns={columns}
              data={data}
              pagination
            />
          </Row>
        </Col>
      </Row>
    </Container>
  ):("")
}

export default Data
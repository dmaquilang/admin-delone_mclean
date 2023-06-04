import React, {useState} from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import InputError from '../../Components/InputError/InputError';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { loginUser } from '../../Helpers/API/axiosMethodCalls';
import './Login.css';

function Home() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [details, setMessage] = useState({ message: "", type: "" });
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleInputChange (e){
    setEmail(e.target.value)
  }

  const handleLogin = async () => {
    setDisabled(true);

    const response = await loginUser(email, password);
    console.log(response);
    if (("data" in response) && response.data.status == 200) {
      
      setMessage({ message: "Login Successful", type: "success" });
      // Redirect to dashboard after 1 second
      // console.log(response.data.data);
      localStorage.setItem("user", response.data.data.user.id);
      localStorage.setItem("token", response.data.data.user.token);

      setTimeout(() => {
        console.log(localStorage["user"], localStorage["token"]);
        window.location.href = "/data";
      }, 1000);
    } else {
      setMessage({
        message: response.error.data.status,
        type: "error",
      });
    }
    setDisabled(false);
    // setShowToast(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col lg={12} className='d-flex justify-content-center logo' style={{marginTop:"5px"}}><img src={logo} width={200} height={100}/></Col>
      </Row>

      <Row className='d-flex justify-content-center'>
        <Col lg={12} className='d-flex justify-content-center home-title wrap' style={{marginTop:"50px"}}>
          An Empirical Evaluation on the University of the Philippines Student Academic Information System Using DeLone and McLean Information System Success Model
        </Col>
      </Row>

      <Row className='d-flex justify-content-center'> 
            <Col lg={6} className='d-flex justify-content-center'>
              <Form.Control
              className="email"
              type="text"
              // value={email}
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <InputError isValid={isValid} message="This field is required."/>
        </Col>  
      </Row>

      <Row className='d-flex justify-content-center'> 
            <Col lg={6} className='d-flex justify-content-center'>
              <Form.Control
              className="email"
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <i onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </i>
            <InputError isValid={isValid} message="This field is required."/>
        </Col>  
      </Row>

      <Row className='d-flex justify-content-center'>
        <Col lg={12} className='d-flex justify-content-center'>
            <button
                className='btn btn-lg btn-primary'
                type="submit"
                onClick={handleLogin}
                disabled={disabled}
              >
                {" "}
                Login{" "}
              </button>
            {/* <button type='button' className='btn btn-lg btn-primary' onClick={()=>navigate('/data')}>Login</button> */}
        </Col>
      </Row>

      <Row>
        <hr style={{marginTop: "8%",height:"5px",background:"#7C1216", opacity:"1", borderColor:"#7C1216"}}/>
        <hr className="pt-0 mt-0" style={{marginTop: "0%", height:"5px",background:"#F6AA2C", opacity:"1", borderColor:"#F6AA2C"}}/>
        <hr className="pt-0 mt-0" style={{height:"5px",background:"#0B4423", opacity:"1", borderColor:"#0B4423"}}/>
      </Row>

    </Container>
  )
}

export default Home
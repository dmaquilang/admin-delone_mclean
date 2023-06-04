import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {Row} from 'react-bootstrap';
import logo from '../../Assets/logo.png'
import ExitToAppOutlined from '@mui/icons-material/ExitToAppOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import { logoutUser } from '../../Helpers/API/axiosMethodCalls';

// css
import './Navbar.css'

export default function AdminNavbar() {
    const [showManage, setShowManage] = useState(false);
    const [showContribution, setShowContribution] = useState(false);
    const [inactive, setInactive] = useState(true);
    const [details, setMessage] = useState({ message: "", type: "" });
    
    const handleLogout = async () => {
    const response = await logoutUser();
    if (("response" in response.data) && response.data.response == "Logout successful.") {
      setMessage({ message: "Logout Successful", type: "success" });
      // setShowToast(true);
      // refreshPage();
        window.location.href = "/";
    } else {
        console.log(response)
      setMessage({
        message: response.error.data.status,
        type: "error",
      });
      // setShowToast(true);
      // refreshPage();
    }
    };

    return (  
        <div onClick={() => setInactive(!inactive)} className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
        </label>
        <div className = "sidenav d-print-none">
            {/* logo */}
            <Row className="logo pt-3 pb-3 p-0 m-0 " style={{width:"70%"}}>
                <img src={logo}  className='d-flex justify-content-center logo' alt='Logo' />
            </Row>

            {/* tabs */}
            <NavLink style={{transition: "all .3s"}} to = "/data" className={({isActive}) => (isActive ? "content content-selected": "content")}>
                <div>
                <DescriptionOutlinedIcon fontSize='large' className='content-icon'/>
                    <span style={{fontSize:"16px"}}>DATA</span>
                </div>
            </NavLink>
            <NavLink style={{transition: "all .3s"}} to = "/demographics" className={({isActive}) => (isActive ? "content content-selected": "content")}>
                <div>
                <RecentActorsOutlinedIcon fontSize='large' className='content-icon'/>
                    <span style={{fontSize:"16px", }}>DEMOGRAPHICS</span>
                </div>
            </NavLink>
            
            <NavLink style={{transition: "all .3s"}} to = "/systemsuccess" className={({isActive}) => (isActive ? "content content-selected": "content")}>
                <div>
                <BarChartIcon fontSize='large' className='content-icon'/>
                    <span style={{fontSize:"16px"}}>SYSTEM SUCCESS</span>
                </div>
            </NavLink>
            
            <NavLink style={{transition: "all .3s"}} onClick={handleLogout} className="content">
                
                <div >
                <ExitToAppOutlined fontSize='large' className='content-icon'/>
                    <span style={{fontSize:"16px"}} className="">logout</span>
                </div>
            </NavLink>
        </div>

    <ul className={`menu__box ${inactive ? "inactive" : ""}`}>
    <div className = "logo pt-0 pb-3 p-0 m-0" style={{width:"100%"}} >
                <img src = {logo}  className='d-flex justify-content-center logo' alt = 'Logo' />
            </div>
            <NavLink style={{transition: "all .3s"}} to = "/data" className={({isActive}) => (isActive ? "content content-selected": "content")}>
                <div>
                <DescriptionOutlinedIcon fontSize='small' className='content-icon'/>
                    <span style={{fontSize:"16px"}}>DATA</span>
                </div>
            </NavLink>
            <NavLink style={{transition: "all .3s"}} to = "/demographics" className={({isActive}) => (isActive ? "content content-selected": "content")}>
                <div>
                <RecentActorsOutlinedIcon fontSize='large' className='content-icon'/>
                    <span style={{fontSize:"16px"}}>DEMOGRAPHICS</span>
                </div>
            </NavLink>
            <NavLink style={{transition: "all .3s"}} to = "/systemsuccess" className={({isActive}) => (isActive ? "content content-selected": "content")}>
                <div>
                <BarChartIcon fontSize='small' className='content-icon'/>
                    <span style={{fontSize:"16px"}}>SYSTEM SUCCESS</span>
                </div>
            </NavLink>

           
            
            <NavLink style={{transition: "all .3s"}} to = "/">
                <div className='content'>
                <ExitToAppOutlined fontSize='large' className='content-icon'/>
                    <span style={{fontSize:"16px"}} className="">logout</span>
                </div>
            </NavLink>
            </ul>
        </div>
    );
};


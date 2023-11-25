import Header from '../header/header';
import Footer from '../footer/footer';
import "./corporate.css"
import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router,Routes, useNavigate,Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../governmentportal/government.css";
import Marquee from 'react-fast-marquee';
// import { useNavigate } from 'react-router-dom';
import Select from "react-select";
// import data from './datajobs.json';
import Job from '../governmentportal/job';
import axios from 'axios'
import Modal from "react-modal"
import Popup from './popup'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const Corporate = () => {
    const [data, setData] = useState([]);
    const [job, setJob] = useState({state: 'Karnataka'});
    const [value, setSignedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [success,setSuccess] = useState(false);
    const [isData, setIsData] = useState(false)
    const [spin, setSpin] = useState(false)


    useEffect(() => {
        fetchData();
    }, [])

    const navigate = useNavigate();

    const handleSignIn = (newValue) => {
        setSignedIn(newValue);
    }
    const handleEmail = (newMail) => {
        setEmail(newMail);
    }
    const handleAdmin = (newbool) => {
        setSuccess(newbool);
        setSignedIn(false)
    }

    const fetchData = () => {
        axios.get("https://jobs-finite.herokuapp.com/getAllPrivatePosts")
            .then(res => {
                setData([...res.data])
                setIsData(true)
            }) 
            .catch(err => {
                console.log(err)
                setIsData(true)
            });
    }
    return (
        <>
        <div>
                  <Header handleSignIn={handleSignIn} handleEmail={handleEmail}/>
                  { isData ? 
                  <>
                    {value && <div style={{ marginTop: "100px", marginLeft: "200px"}}>
                        <Popup value={value} email={email} handleAdmin={handleAdmin} handleSignIn={handleSignIn}/>
                    </div>}
                    <h2 style={{textAlign: "center", color: "#d3212d"}}>IT Jobs</h2>
                    <div id="govtpage-main-outside">
                                <div id="govtpage-main" className="gap">
                                <div className='state'>For Freshers</div>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Company Name</th>
                                                <th>Post Name</th>
                                                <th>Qualification</th>
                                                <th>Last Date</th>
                                                <th>More Information</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data && data.filter((index) => index.fresher === true).map((item,ind) => {
                                        return (
                                        <tr key={ind}>
                                            <td>{item.companyName}</td>
                                            <td>{item.examName}</td>
                                            <td>{item.qualification}</td>
                                            <td>{item.postLastDateString}</td>
                                            <td><a href='' onClick={() => {
                                                    navigate(`/privatePortal/${item.id}`, {state: item});
                                                }}>Next</a>
                                                </td>
                                        </tr>
                                        )})}
                                        </tbody>
                                    </table>
                                </div>
                                <div id="govtpage-main" style={{paddingTop: "20px"}}>
                                <div className='state'>For Experienced</div>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Company Name</th>
                                                <th>Post Name</th>
                                                <th>Experience</th>
                                                <th>Last Date</th>
                                                <th>More Information</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data && data.filter((index) => index.fresher === false).sort((a, b) => a.experience - b.experience).map((item,ind) => {
                                        return (
                                        <tr key={ind}>
                                            <td>{item.companyName}</td>
                                            <td>{item.examName}</td>
                                            <td>{item.experience}</td>
                                            <td>{item.postLastDateString}</td>
                                            <td><a href='' onClick={() => {
                                                    navigate(`/privatePortal/${item.id}`, {state: item});
                                                }}>Next</a>
                                                </td>
                                        </tr>
                                        )})}
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                        </> : <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={!isData}
                          >
                            <CircularProgress color="inherit" />
                          </Backdrop>
            }
                    <Footer value={success}/>
                </div> </>
    );
};

export default Corporate;
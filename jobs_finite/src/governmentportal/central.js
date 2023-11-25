import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes, useNavigate,Route } from "react-router-dom";
import Header from '../header/header';
import { Link } from 'react-router-dom';
import "./government.css";
import Marquee from 'react-fast-marquee';
// import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import data from './datajobs.json';
import Job from './job';
import axios from 'axios'
import Footer from '../footer/footer';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const CentralGovernment = () => { 
    const [data, setData] = useState([]);
    const [job, setJob] = useState({state: 'Karnataka'});
    const [isData, setIsData] = useState(false)


    useEffect(() => {
        fetchData();
    }, [])

    const navigate = useNavigate();
    const fetchData = () => {
        // document.getElementById('bank-body').innerHTML = '';
        axios.get("https://jobs-finite.herokuapp.com/getAllCentralGovtPost")
            .then(res => {
                setData([...res.data])
                setIsData(true)
            }) 
            .catch(err => console.log(err));
    }
    return (
        <> 
        <div>
            <Header/>
            { isData ?
            <div>

            <h2 style={{textAlign: "center", color: "#d3212d"}}>Central Government Jobs</h2>
            <div id="govtpage-main-outside">
                <div id="govtpage-main">
                    <div className='state'>UPSC</div>
                    <table className='table' id='upsc-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='upsc-body'>
                            {data && data.filter(index => index.examName === "UPSC" && index.jobType ==="central").map((item,ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/centralgovtPortal/${item.id}`, {state: item});
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main" className="gap">
                <div className='state'>Banking</div>
                    <table className='table' id='bank-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                {/* <th>Recruitment Board</th> */}
                                <th>Post Name</th>
                                <th>Qualification</th>
                                {/* <th>Advt No</th> */}
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='bank-body'>
                        {data && data.filter(index => index.examName === "SBI" && index.jobType ==="central").map((item,ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/centralgovtPortal/${item.id}`, {state: item});
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state gap-below'>Railways</div>
                    <table className='table' id='rail-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                {/* <th>Recruitment Board</th> */}
                                <th>Post Name</th>
                                <th>Qualification</th>
                                {/* <th>Advt No</th> */}
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='rail-body'>
                        {data && data.filter(index => index.examName === "RAIL" && index.jobType ==="central").map((item,ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/centralgovtPortal/${item.id}`, {state: item});
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Staff Selection Committee</div>
                    <table className='table' id='ssc-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                {/* <th>Recruitment Board</th> */}
                                <th>Post Name</th>
                                <th>Qualification</th>
                                {/* <th>Advt No</th> */}
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='ssc-body'>
                        {data && data.filter(index => index.examName === "SSC" && index.jobType ==="central").map((item,ind) => {
                                return (
                                    <tr key={ind}>  
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/centralgovtPortal/${item.id}`, {state: item});
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            }
                                )}
                        </tbody>
                    </table>
                </div>

            </div>
            </div>
             : <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={!isData}
                          >
                            <CircularProgress color="inherit" />
                          </Backdrop>
                      }
            <Footer/>
           
        </div> </>
    );
};

export default CentralGovernment;
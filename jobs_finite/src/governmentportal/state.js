import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Routes, useNavigate,Route } from "react-router-dom";
import Header from '../header/header';
import "./government.css";
import Footer from '../footer/footer';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const StateGovernment = () => {
    const [data, setData] = useState([]);
    const [isData, setIsData] = useState(false)
    // const [job, setJob] = useState({ state: 'Karnataka' });

    useEffect(() => {
        fetchData();
    }, [])

    const navigate = useNavigate();
    const fetchData = () => {
        // document.getElementById('bank-body').innerHTML = '';
        axios.get("https://jobs-finite.herokuapp.com/getAllStateGovtPosts")
            .then(res => {
                setData([...res.data])
                setIsData(true)
            })
            .catch(err => console.log(err));
    }
    return (
        <> 
        <div>
            <Header />
            { isData ? 
                <>
            <h2 style={{ textAlign: "center", color: "#d3212d" }}>State Government Jobs</h2>
            <div id="govtpage-main-outside">
                <div id="govtpage-main">
                    <div className='state'>Andaman and Nicobar Islands</div>
                    <table className='table' id='andaman'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("andaman")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Andhra Pradesh</div>
                    <table className='table' id='Andhra'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("andhrapradesh")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Arunachal Pradesh</div>
                    <table className='table' id='Arunachal'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("arunachalpradesh")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main" className="gap">
                    <div className='state'>Assam</div>
                    <table className='table' id='Assam'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("assam")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state gap-below'>Bihar</div>
                    <table className='table' id='Bihar'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("bihar")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Chhattisgarh</div>
                    <table className='table' id='Chhattisgarh'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("chhattisgarh")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Goa</div>
                    <table className='table' id='Goa'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("goa")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main" className="gap">
                    <div className='state'>Gujarat</div>
                    <table className='table' id='Gujarat'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("gujarat")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state gap-below'>Haryana</div>
                    <table className='table' id='Haryana'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("haryana")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Himachal Pradesh</div>
                    <table className='table' id='Himachal'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("himachalpradesh")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Jharkhand</div>
                    <table className='table' id='Jharkhand'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("jharkhand")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main" className="gap">
                    <div className='state'>Karnataka</div>
                    <table className='table' id='Karnataka'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("karnataka")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state gap-below'>Kerala</div>
                    <table className='table' id='Kerala'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("kerala")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Madhya Pradesh</div>
                    <table className='table' id='Madhya'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("madhyapradesh")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state'>Maharastra</div>
                    <table className='table' id='Maharastra'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("maharastra")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main" className="gap">
                    <div className='state'>Manipur</div>
                    <table className='table' id='Manipur'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("manipur")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                    <div className='state gap-below'>Meghalaya</div>
                    <table className='table' id='Meghalaya'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("meghalaya")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Mizoram</div>
                    <table className='table' id='Mizoram'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("mizoram")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main" className="gap">
                    <div className='state'>Nagaland</div>
                    <table className='table' id='Nagaland'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("nagaland")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state gap-below'>Odisha</div>
                    <table className='table' id='Odisha'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("odisha")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Punjab</div>
                    <table className='table' id='Punjab'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("punjab")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main" className="gap">
                    <div className='state'>Rajasthan</div>
                    <table className='table' id='Rajasthan'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("rajasthan")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state gap-below'>Sikkim</div>
                    <table className='table' id='Sikkim'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("sikkim")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Tamil Nadu</div>
                    <table className='table' id='Tamil'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("tamilnadu")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Telangana</div>
                    <table className='table' id='Telangana'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("telangana")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main" className="gap">
                    <div className='state'>Tripura</div>
                    <table className='table' id='Tripura'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("tripura")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state gap-below'>Uttar Pradesh</div>
                    <table className='table' id='Uttar'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("uttarpradesh")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>Uttarakhand</div>
                    <table className='table' id='Uttarakhand'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("uttarakhand")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                   <div id="govtpage-main">
                    <div className='state'>West Bengal</div>
                    <table className='table' id='West'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter(index => index.state.replace(/\s+/g,"").toLowerCase().includes("westbengal")).map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{item.postDateString}</td>
                                        <td>{item.examName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.postLastDateString}</td>
                                        <td><a href='' onClick={() => {
                                            navigate(`/stategovtportal/${item.id}`, { state: item });
                                        }}>Get Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            : <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={!isData}
                          >
                            <CircularProgress color="inherit" />
                          </Backdrop>
                }
            <Footer />
        </div>  </>
    );
};

export default StateGovernment;
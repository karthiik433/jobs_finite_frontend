import React, { useState } from 'react';
import { UNSAFE_LocationContext, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Header from '../header/header';
import "./DynamicJob/job.css";
import axios from 'axios'
import Footer from '../footer/footer';

const StateJob = (props) => {

    const location = useLocation();
    const params = useParams()
    const id = params.id;
    const [newData, setNewData] = useState({});
    React.useEffect(() => {
        console.log('new Location', location)

        if(location.state == null){
            axios.get(`https://jobs-finite.herokuapp.com/getPostDetails/state/${id}`)
                .then(res => {
                    setNewData(res.data)
                    // console.log(newData)

                }) 
                .catch(err => console.log(err));
        }
    },[])
    return (
        <>
        {location.state != null ? 
        <div>
            <Header/>
            <h2 style={{textAlign: "center"}}></h2>
            <div id="job-main-outside">
                <div id="jobpage-main">
                    <div id="job-content">
                        <div className='inner-job-content' style={{backgroundColor: "silver", fontSize: "30px"}}>
                            <div style={{textAlign: "center"}}>{location.state.examName} Recuritment </div>
                        </div>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Post Name: </span> {location.state.examName}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Exam Date: </span> {location.state.postDateString}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Last Date to apply: </span> {location.state.postLastDateString}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Qualification: </span> {location.state.qualification}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Job description: </span> {location.state.jobDescription}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Application Fees</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}>For General Category :    <span style={{fontWeight: "bold"}}>   Rs.{location.state.generalFee}/-</span></li>
                                    <li style={{ marginBottom: "5px"}}>For SC/ST/PWD :    <span style={{fontWeight: "bold"}}>   Rs.{location.state.scFee}/-</span></li>
                                    <li style={{ marginBottom: "5px"}}>Payment Mode:    <span style={{fontWeight: "bold"}}>   Debit / Internet Banking</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Important Dates</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}>Starting Date to Apply :<span style={{fontWeight: "bold"}}>   {location.state.postDateString}</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date to Apply :<span style={{fontWeight: "bold"}}>   {location.state.postLastDateString}</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date for Payment of Fee through Online :<span style={{fontWeight: "bold"}}>{location.state.lastDayForChallanString} by 23:00 Hrs</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date for Generation of office Challan :<span style={{fontWeight: "bold"}}>02/03/2021 by 23:00 Hrs</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date for Correction of Application Form :<span style={{fontWeight: "bold"}}>{location.state.lastDayForCorrectionString} by 23:00 Hrs</span></li>
                                    {/* <li style={{ marginBottom: "5px"}}>Date of Computer Based Examination(Tier - 1) :<span style={{fontWeight: "bold"}}>May 2022</span></li>
                                    <li style={{ marginBottom: "5px"}}>Date of Tier II Exam :<span style={{fontWeight: "bold"}}>To be notified later</span></li> */}
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Age Limit</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}>Minimum Age :    <span style={{fontWeight: "bold"}}>   {location.state.minimumAge}</span></li>
                                    <li style={{ marginBottom: "5px"}}>Maximum Age :    <span style={{fontWeight: "bold"}}>   {location.state.maximumAge}</span></li>
                                    <li style={{ marginBottom: "5px"}}><span style={{fontWeight: "bold"}}>Age relaxation is applicable as per rules</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Educational Qualifications</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}><span style={{fontWeight: "bold"}}>Candidates must have passed {location.state.qualification} from a recognized Board/ University</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red",marginBottom: "15px", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Vacancy Details</span></div>
                            <div id="grid-vacancy">
                                <table>
                                    <thead>
                                        <tr>
                                            <td style={{color: "#AA336A", fontWeight: "bold"}}>SI No</td>
                                            <td style={{color: "#AA336A", fontWeight: "bold"}}>Category Name</td>
                                            <td style={{color: "#AA336A", fontWeight: "bold"}}>Vacancy</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>General</td>
                                            <td>{location.state.generalVacancy}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>SC</td>
                                            <td>{location.state.scVacancy}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>ST</td>
                                            <td>{location.state.stVacancy}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding links' style={{paddingBottom: "1px"}}>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Important Links</span></div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content' style={{display: "flex", paddingTop: "0px", paddingBottom: "0px"}}>
                            <div style={{paddingLeft: "30%",flexBasis: "50%", float: "right"}}>Apply Online: </div><div style={{flexBasis: "50%"}}><a href={location.state.url} style={{fontWeight: "bold"}}>Click Here!</a></div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content' style={{display: "flex", paddingTop: "0px", paddingBottom: "0px"}}>
                            <div style={{paddingLeft: "30%",flexBasis: "50%", float: "right"}}>Notification: </div><div style={{flexBasis: "50%"}}><a href='https://www.google.com/' style={{fontWeight: "bold"}}>Click Here!</a></div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content' style={{display: "flex", paddingTop: "0px", paddingBottom: "15px"}}>
                            <div style={{paddingLeft: "30%",flexBasis: "50%", float: "right"}}>Official Website: </div><div style={{flexBasis: "50%"}}><a href={location.state.officialUrl} style={{fontWeight: "bold"}}>Click Here!</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        :
        <div>
            <Header/>
            <h2 style={{textAlign: "center"}}></h2>
            <div id="job-main-outside">
                <div id="jobpage-main">
                    <div id="job-content">
                        <div className='inner-job-content' style={{backgroundColor: "silver", fontSize: "30px"}}>
                            <div style={{textAlign: "center"}}>{newData.examName} Recuritment </div>
                        </div>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Post Name: </span> {newData.examName}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Exam Date: </span> {newData.postDate}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Last Date to apply: </span> {newData.postLastDateString}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Qualification: </span> {newData.qualification}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Job description: </span> {newData.jobDescription}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Application Fees</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}>For General Category :    <span style={{fontWeight: "bold"}}>   Rs.{newData.generalFee}/-</span></li>
                                    <li style={{ marginBottom: "5px"}}>For SC/ST/PWD :    <span style={{fontWeight: "bold"}}>   Rs.{newData.scFee}/-</span></li>
                                    <li style={{ marginBottom: "5px"}}>Payment Mode:    <span style={{fontWeight: "bold"}}>   Debit / Internet Banking</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Important Dates</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}>Starting Date to Apply :<span style={{fontWeight: "bold"}}>   {newData.postDateString}</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date to Apply :<span style={{fontWeight: "bold"}}>   {newData.postLastDateString}</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date for Payment of Fee through Online :<span style={{fontWeight: "bold"}}>{newData.lastDayForChallanString} by 23:00 Hrs</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date for Generation of office Challan :<span style={{fontWeight: "bold"}}>02/03/2021 by 23:00 Hrs</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date for Correction of Application Form :<span style={{fontWeight: "bold"}}>{newData.lastDayForCorrectionString} by 23:00 Hrs</span></li>
                                    {/* <li style={{ marginBottom: "5px"}}>Date of Computer Based Examination(Tier - 1) :<span style={{fontWeight: "bold"}}>May 2022</span></li>
                                    <li style={{ marginBottom: "5px"}}>Date of Tier II Exam :<span style={{fontWeight: "bold"}}>To be notified later</span></li> */}
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Age Limit</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}>Minimum Age :    <span style={{fontWeight: "bold"}}>   {newData.minimumAge}</span></li>
                                    <li style={{ marginBottom: "5px"}}>Maximum Age :    <span style={{fontWeight: "bold"}}>   {newData.maximumAge}</span></li>
                                    <li style={{ marginBottom: "5px"}}><span style={{fontWeight: "bold"}}>Age relaxation is applicable as per rules</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Educational Qualifications</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}><span style={{fontWeight: "bold"}}>Candidates must have passed {newData.qualification} from a recognized Board/ University</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red",marginBottom: "15px", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Vacancy Details</span></div>
                            <div id="grid-vacancy">
                                <table>
                                    <thead>
                                        <tr>
                                            <td style={{color: "#AA336A", fontWeight: "bold"}}>SI No</td>
                                            <td style={{color: "#AA336A", fontWeight: "bold"}}>Category Name</td>
                                            <td style={{color: "#AA336A", fontWeight: "bold"}}>Vacancy</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>General</td>
                                            <td>{newData.generalVacancy}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>SC</td>
                                            <td>{newData.scVacancy}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>ST</td>
                                            <td>{newData.stVacancy}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding links' style={{paddingBottom: "1px"}}>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Important Links</span></div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content' style={{display: "flex", paddingTop: "0px", paddingBottom: "0px"}}>
                            <div style={{paddingLeft: "30%",flexBasis: "50%", float: "right"}}>Apply Online: </div><div style={{flexBasis: "50%"}}><a href={newData.url} style={{fontWeight: "bold"}}>Click Here!</a></div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content' style={{display: "flex", paddingTop: "0px", paddingBottom: "15px"}}>
                            <div style={{paddingLeft: "30%",flexBasis: "50%", float: "right"}}>Official Website: </div><div style={{flexBasis: "50%"}}><a href={newData.officialUrl} style={{fontWeight: "bold"}}>Click Here!</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
    </>
    );
};

export default StateJob;
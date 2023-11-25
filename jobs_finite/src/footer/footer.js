import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./footer.css"
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaYoutube } from "react-icons/fa"

const Footer = (props) => {
    const [feedback, setFeedback] = useState("");
    const [boolfeed,setboolfeed] = useState(false)
    const [boolfail, setboolfail] = useState(false)

    
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const changeFeedback = () => {
        setFeedback(document.getElementById("txt-feedback").value);
    }
    const handleFeedback = (event, reason) => {
        setboolfeed(false)
        setboolfail(false)
    }
    const resetMessage = () => {
        if(document.getElementById("txt-feedback").value == ""){ setboolfail(true) }
            else {
            axios.post("https://jobs-finite.herokuapp.com/sendFeedback", {feedback})
            .then((res) => {
                setboolfeed(true)
                // console.log(res)
                   document.getElementById("txt-feedback").value = "";
            }).catch((e) => {
                console.log(e)
                   document.getElementById("txt-feedback").value = "";
            })
        }
     
    }
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                { window.location.pathname === "/privatePortal" && props.value ? <li><a href="/excelUpload/Admin">Admin</a></li> : null }
                                <li><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                        <Snackbar
                            open={boolfeed}
                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                            autoHideDuration={2000}
                            onClose={handleFeedback}
                          >

                            <Alert onClose={handleFeedback} severity="success" sx={{ width: "100%" }}>
                              Feedback sent
                            </Alert>

                          </Snackbar>
                        <Snackbar open={boolfail} anchorOrigin={{ vertical: "top", horizontal: "center" }}
                           autoHideDuration={2000} onClose={handleFeedback}>
                            <Alert onClose={handleFeedback} severity="error" sx={{ width: "100%" }}>
                              Enter the feedback
                            </Alert>
                          </Snackbar>
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Feedback</a></li>
                                <li><textarea type="text" id="txt-feedback" onChange={changeFeedback} style={{marginRight: "3px"}}></textarea>
                                <button id='submit' onClick={resetMessage} style={{display:"block", verticalAlign: "center", color: "white", backgroundColor: "#e91e63", cursor: "pointer"}}>Submit</button></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Navigate</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/stategovtportal">State Government Jobs</a></li>
                                <li><a href="/centralgovtPortal">Central Government Jobs</a></li>
                                <li><a href="/privatePortal">IT Jobs</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"><FaFacebook/></i></a>
                                {/*<a href="#"><i className="fab fa-twitter"><FaTwitter/></i></a>*/}
                                <a href="#"><i className="fab fa-instagram"><FaInstagram/></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"><FaLinkedin/></i></a>
                                <a href="#"><i className="fab fa-youtube-in"><FaYoutube/></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
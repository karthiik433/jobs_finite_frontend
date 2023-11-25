import govtLogo from "../images/govtIcon.png";
import privateLogo from "../images/corporateIcon.png";
import transparentPrivateLogo from "../images/transparentCorp.png";
// import { useNavigate } from "react-router";
import "./homePage.css";

function HomePage(){

    // let history = useNavigate();
    return (
            <div id="homepage-main-outside">
                <div id="homepage-main">
                    <div className="hovering-effect" onClick={()=> window.location = "/governmentportal"} >
                        <div className="zoom">
                            <img src={govtLogo} ></img>
                            <b className="job-category" style={{color: "#CB1515"}}>Government Jobs</b>
                        </div>
                    </div>
                    <div className="hovering-effect" onClick={()=>window.location = "/privatePortal"}>
                        <div className="zoom">
                            <img src={transparentPrivateLogo} ></img>
                            <b className="job-category" style={{color: "royalblue"}}>Private Jobs</b>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HomePage;
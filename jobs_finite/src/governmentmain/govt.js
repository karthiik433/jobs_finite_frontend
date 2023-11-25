import govtLogo from "../images/govtIcon.png";
import privateLogo from "../images/corporateIcon.png";
import Header from "../header/header.js";
import Footer from "../footer/footer.js";
import transparentPrivateLogo from "../images/transparentCorp.png";
// import { useNavigate } from "react-router";
import "../homePage/homePage.css";

function Govt(){

    // let history = useNavigate();
    return (
        <>
         <Header/>
            <div id="homepage-main-outside" style={{marginTop: "40px"}}>
                <div id="homepage-main">
                    <div className="hovering-effect" onClick={()=> window.location = "/centralgovtPortal"} >
                        <div className="zoom">
                            <img src={govtLogo} ></img>
                            <b className="job-category-govt" style={{color: "#CB1515"}}>Central Government Jobs</b>
                        </div>
                    </div>
                    <div className="hovering-effect" onClick={()=>window.location = "/stategovtportal"}>
                        <div className="zoom">
                            <img src={transparentPrivateLogo} ></img>
                            <b className="job-category-govt" style={{color: "royalblue"}}>State Government Jobs</b>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Govt;
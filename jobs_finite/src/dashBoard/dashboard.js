import Header from "../header/header";
import SwipeableTextMobileStepper from "../carousal/carousal";
import HomePage from '../homePage/homePage';
import Footer from "../footer/footer";

function DashBoard(){

    return (
        <>
        <div>
            <Header/>
        </div>
        <div style={{marginTop:"40px"}}>
          <SwipeableTextMobileStepper/>
        </div>
            <HomePage/>
            <Footer />
        </>
    )
}

export default DashBoard;
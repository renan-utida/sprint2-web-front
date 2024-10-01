import { MainFormulaE } from "./formulae-styled"
import AccordionInfo from "./AccordionInfo"
import VideoBg from "../../assets/video/video-formulae.mp4"
import ABBFormulaE from "../../assets/images/abb-formulae-logo.png"
import { Link } from "react-router-dom"

const FormulaE = () => {

    return(
        <MainFormulaE>
            <video src={VideoBg} autoPlay loop muted/>
            <Link to="/">
                <img src={ABBFormulaE} alt="Logo da ABB Formula E" />
            </Link>
            <AccordionInfo />
        </MainFormulaE>
    )
}

export default FormulaE
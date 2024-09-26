import { MainFormulaE } from "./formulae-styled"
import AccordionInfo from "./AccordionInfo"
import VideoBg from "../../video/video-formulae.mp4"
import ABBFormulaE from "../../assets/abb-formulae-logo.png"

const FormulaE = () => {

    return(
        <MainFormulaE>
            <video src={VideoBg} autoPlay loop muted/>
            <a href="https://www.fiaformulae.com/pt-br" target="_blank">
                <img src={ABBFormulaE} alt="Logo da ABB Formula E" />
            </a>
            <AccordionInfo />
        </MainFormulaE>
    )
}

export default FormulaE
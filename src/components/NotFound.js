import React from "react";
import SecondaryHeroSection from "./SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";

function NotFound() {
    const { translations } = useLanguage();
    const goBack = () => {
        window.history.back();
    };
    return (
        <>
            <SecondaryHeroSection title={translations.oops}/>
            <div className={"fc f-c"}>
                <img src="404.png" alt="404" style={{width: "100%", maxWidth:"800px", aspectRatio:"1/1"}}/>
                <button type={"button"} onClick={goBack} className={"button skew"}>{translations.back}</button>
            </div>
            <br/>
            <br/>
        </>

    );

}
export default NotFound;
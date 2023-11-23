import React from "react";
import SecondaryHeroSection from "./SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";

function NotFound() {
    const { translations } = useLanguage();

    return (
        <>
            <SecondaryHeroSection title={translations.oops}/>
            <div className={"fc f-c"}>
                <img src="404.png" alt="404" style={{width: "100%", maxWidth:"500px", aspectRatio:"1/1"}}/>
            </div>
        </>

    );

}
export default NotFound;
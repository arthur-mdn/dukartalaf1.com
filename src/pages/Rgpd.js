import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import ReglementSection from "./fragments/Reglement/ReglementSection";

function Rgpd() {
    const { translations } = useLanguage();

    return (
        <>
            <SecondaryHeroSection title={translations.rgpd}/>
            {translations.rgpdContent}
        </>

    );

}
export default Rgpd;
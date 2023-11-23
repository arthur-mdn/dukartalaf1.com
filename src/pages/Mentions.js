import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import ReglementSection from "./fragments/Reglement/ReglementSection";

function Mentions() {
    const { translations } = useLanguage();

    return (
        <>
            <SecondaryHeroSection title={translations.mentions}/>
            {translations.mentionsContent}
        </>

    );

}
export default Mentions;
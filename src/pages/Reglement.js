import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import ReglementSection from "./fragments/Reglement/ReglementSection";

function Reglement() {
    const { translations } = useLanguage();

    return (
        <>
            <SecondaryHeroSection title={translations.rules}/>
            <ReglementSection/>
        </>

    );

}
export default Reglement;
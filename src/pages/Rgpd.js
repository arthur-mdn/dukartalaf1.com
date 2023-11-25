import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import ReglementSection from "./fragments/Reglement/ReglementSection";

function Rgpd() {
    const { translations } = useLanguage();

    return (
        <>
            <SecondaryHeroSection title={translations.rgpd}/>
            <section>
                <article dangerouslySetInnerHTML={{__html: translations.rgpdContent}}></article>
            </section>
            <br/>
            <br/>
            <br/>
        </>

    );

}
export default Rgpd;
import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import ReglementSection from "./fragments/Reglement/ReglementSection";

function Contact() {
    const { translations } = useLanguage();

    return (
        <>
            <SecondaryHeroSection title={translations.contact}/>
            <article style={{padding:'2rem'}}>
                <form className={"fc f-c"}>
                    <label>
                        {translations.name} :
                        <input type="text" name="name" />
                    </label>
                    <label>
                        {translations.firstName} :
                        <input type="text" name="name" />
                    </label>
                    <label>
                        {translations.email} :
                        <input type="text" name="name" />
                    </label>
                    <label>
                        {translations.message} :
                        <textarea name="name" />
                    </label>
                    <input type="submit" className={"button"} value="Envoyer" />
                </form>
            </article>
        </>

    );

}
export default Contact;
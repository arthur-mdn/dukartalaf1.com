import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import {FaEnvelope} from "react-icons/fa6";

function Contact() {
    const { translations } = useLanguage();

    return (
        <>
            <SecondaryHeroSection title={translations.contact}/>
            <section>
                <article style={{padding:' 0 2rem 2rem 2rem'}} className={"fc ai-c"}>
                    <ContactForm/>
                </article>
            </section>

        </>

    );

}

function ContactForm() {
    const { translations } = useLanguage();
    return (
        <>
            <br/>
            <a className={"button fr ai-c g1"} href={"mailto:event@agsracing.com"}>
                <FaEnvelope/>
                {translations.contactUsByMail}
            </a>
            <br/>
            <p>Adresse Email : <a href={"mailto:event@agsracing.com"}>event@agsracing.com</a></p>
            <br/>
        </>

    );
}
export default Contact;
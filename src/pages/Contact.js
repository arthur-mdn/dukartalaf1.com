import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import ReglementSection from "./fragments/Reglement/ReglementSection";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const { translations } = useLanguage();

    return (
        <>
            <SecondaryHeroSection title={translations.contact}/>
            <article style={{padding:'2rem'}}>
                <ContactForm/>
            </article>
        </>

    );

}

function ContactForm() {
    const { translations } = useLanguage();
    const [state, handleSubmit] = useForm("mayggnyk");
    if (state.succeeded) {
        return <p>{translations.thankForYourMessage}</p>;
    }
    return (
        <form onSubmit={handleSubmit} className={"f-c fc"}>
            <label htmlFor="name">
                {translations.name}
            </label>
            <input
                id="name"
                type="text"
                name="name"
            />
            <ValidationError
                prefix={translations.firstName}
                field="name"
                errors={state.errors}
            />

            <label htmlFor="firstName">
                {translations.firstName}
            </label>
            <input
                id="firstName"
                type="text"
                name="name"
            />
            <ValidationError
                prefix={translations.firstName}
                field="firstName"
                errors={state.errors}
            />

            <label htmlFor="email">
                {translations.email}
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />


            <label htmlFor="message">
                {translations.message}
            </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix={translations.message}
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                {translations.send}
            </button>
        </form>
    );
}
export default Contact;
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
            <section>
                <article style={{padding:'2rem'}}>
                    <ContactForm/>
                </article>
            </section>

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
            <div className={"fr f-c w100 g1"} style={{maxWidth:'500px'}}>


                <input
                    placeholder={translations.firstName}
                    id="firstName"
                    type="text"
                    name="name"
                    required={true}
                />
                <ValidationError
                    prefix={translations.firstName}
                    field="firstName"
                    errors={state.errors}
                />

                <input
                    placeholder={translations.name}
                    id="name"
                    type="text"
                    name="name"
                    required={true}
                />
                <ValidationError
                    prefix={translations.name}
                    field="name"
                    errors={state.errors}
                />
            </div>


            <input
                placeholder={translations.email}
                id="email"
                type="email"
                name="email"
                required={true}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <input
                placeholder={translations.object}
                id="object"
                type="text"
                name="object"
                required={true}
            />
            <ValidationError
                prefix={translations.object}
                field="object"
                errors={state.errors}
            />

            <textarea
                placeholder={translations.message}
                id="message"
                name="message"
                required={true}
            />
            <ValidationError
                prefix={translations.message}
                field="message"
                errors={state.errors}
            />
            <button type="submit" className={"button skew"} disabled={state.submitting}>
                {translations.send}
            </button>
        </form>
    );
}
export default Contact;
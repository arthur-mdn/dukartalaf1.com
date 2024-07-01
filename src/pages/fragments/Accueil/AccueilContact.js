import React from "react";
import {useLanguage} from "../../../LanguageContext";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const { translations } = useLanguage();
    const [state, handleSubmit] = useForm("meojqobe");
    if (state.succeeded) {
        return <p>{translations.registered}</p>;
    }
    return (
        <form onSubmit={handleSubmit} className={"f-c fc g1"}>
            <div className={"fr f-c w100 g1"} style={{maxWidth: '500px'}}>

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
                placeholder={translations.address}
                id="address"
                type="text"
                name="address"
                required={true}
            />
            <ValidationError
                prefix={translations.address}
                field="address"
                errors={state.errors}
            />

            <div className={"fr g1"}>
                <div>
                    <input
                        placeholder={translations.zip}
                        id="zip"
                        type="text"
                        name="zip"
                        required={true}
                    />
                    <ValidationError
                        prefix={translations.zip}
                        field="zip"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <input
                        placeholder={translations.city}
                        id="city"
                        type="text"
                        name="city"
                        required={true}
                    />
                    <ValidationError
                        prefix={translations.city}
                        field="city"
                        errors={state.errors}
                    />
                </div>
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

            <select id={"category"} name={"category"} required={true}>
                <option value={translations.newEventDescription4ListElement1}>
                    {translations.newEventDescription4ListElement1}
                </option>
                <option value={translations.newEventDescription4ListElement2}>
                    {translations.newEventDescription4ListElement2}
                </option>
                <option value={translations.newEventDescription4ListElement3}>
                    {translations.newEventDescription4ListElement3}
                </option>
                <option value={translations.newEventDescription4ListElement4}>
                    {translations.newEventDescription4ListElement4}
                </option>
                <option value={translations.newEventDescription4ListElement5}>
                    {translations.newEventDescription4ListElement5}
                </option>
                <option value={translations.newEventDescription4ListElement6}>
                    {translations.newEventDescription4ListElement6}
                </option>
            </select>

            <button type="submit" className={"button skew"} disabled={state.submitting}>
                {translations.send}
            </button>
        </form>
    );
}

function AccueilContact() {
    const {translations} = useLanguage();

    return (
        <section style={styles.event_section} className={"fc f-c"} id={"AccueilContactForm"}>
            <h3 className={"expansiva-bold fs2 center"}>{translations.beInformed}</h3>
            <ContactForm/>
        </section>
    );
}

// Styles CSS en JavaScript
const styles = {
    event_section: {
        width: '100%',
        position: 'relative',
        paddingTop: '100px',
    },

};

export default AccueilContact;

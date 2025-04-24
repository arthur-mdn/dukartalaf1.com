import React from "react";
import {useLanguage} from "../../../LanguageContext";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const { translations } = useLanguage();
    const [state, handleSubmit] = useForm("xgvweyqw");
    if (state.succeeded) {
        return <p style={{color:"white"}}>{translations.registered}</p>;
    }
    return (
        <form onSubmit={handleSubmit} className={"f-c fr g0-5"} style={{backgroundColor:"white", height:"64px", borderRadius:"1rem"}}>
                <input
                    placeholder={"exemple@mail.com"}
                    id="email"
                    type="email"
                    name="email"
                    required={true}
                    style={{width: '250px', border:0,height:"100%",margin:0,paddingLeft:"1rem"}}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <button type="submit" className={"button"} disabled={state.submitting} style={{margin:0,border:0, marginRight:"0.35rem"}}>
                    {translations.register}
                </button>

        </form>
    );
}

function AccueilContact() {
    const {translations} = useLanguage();

    return (
        <section style={styles.event_section} className={"fc f-c"} id={"AccueilContactForm"}>
            <h3 className={"expansiva-bold fs2 center white"}>{translations.beInformed}</h3>
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

import React from "react";
import {useLanguage} from "../../../LanguageContext";

function ReglementSection() {
    const { translations } = useLanguage();

    return (
        <section style={styles.event_section} >
            <article>
                <div className={"fc"}>
                    <p className={"center_on_mobile"}>
                        {translations.rulesOfTheEvent1}
                    </p>
                </div>
                <div className={'fr f-c'}>
                    <a href="/docs/reglement_du_kart_a_la_f1_2024.pdf" download className={"button expansiva white center skew"}>{translations.seeRules}</a>
                </div>
            </article>
        </section>
    );
}

// Styles CSS en JavaScript
const styles = {
    event_section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        paddingBottom:'100px',
    }
};

export default ReglementSection;

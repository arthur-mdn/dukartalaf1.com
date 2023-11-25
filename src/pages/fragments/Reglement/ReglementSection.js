import React from "react";
import {useLanguage} from "../../../LanguageContext";

function ReglementSection() {
    const { translations } = useLanguage();

    return (
        <section style={styles.event_section} >
            <article>
                <h1 className={"expansiva"}>{translations.rulesOfTheEvent}</h1>
                <div className={"fc"}>
                    <p>
                        {translations.rulesOfTheEvent1}
                    </p>
                </div>
                <div className={'fr f-c'}>
                    <button className={"expansiva white center skew"}>{translations.seeRules}</button>
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
        paddingTop:'100px',
        paddingBottom:'100px',
    }
};

export default ReglementSection;

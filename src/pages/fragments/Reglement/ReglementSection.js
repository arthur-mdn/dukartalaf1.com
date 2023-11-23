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
    },
    damierBefore: {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height:"50px",
        backgroundColor: "#fff",
        backgroundImage: "linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%), linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%)",
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
        zIndex:"-1"
    },
    damierOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0, 0) 0%, rgba(0,0,0, 0) 40%, white 100%)',
        zIndex: 1,
    },
    carsContainer:{
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    carsSeparator:{
        minWidth: '20vw',
        height: '100%',
    },
    carsIllustration:{width: '100%', maxWidth: '40vh', aspectRatio: '1/1'}
};

export default ReglementSection;

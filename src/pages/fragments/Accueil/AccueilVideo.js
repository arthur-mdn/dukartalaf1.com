import React from "react";
import {useLanguage} from "../../../LanguageContext";

function AccueilVideo() {
    const { translations } = useLanguage();

    return (
        <section style={styles.event_section} >
            Vidéo

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
        paddingTop:'80px',
        paddingBottom:'80px',
    },

};

export default AccueilVideo;

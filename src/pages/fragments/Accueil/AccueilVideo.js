import React from "react";
import {useLanguage} from "../../../LanguageContext";

function AccueilVideo() {
    const { translations } = useLanguage();

    return (
        <section style={styles.event_section} className={"fc f-c"}>
                <div style={{aspectRatio:'16/9',width:'calc(100% - 4rem)',maxWidth:'600px', backgroundColor:'grey', borderRadius:'2rem', overflow:'hidden'}}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aVlMeOh6gHk?si=_C7PAQZ6OQTWprE5" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>


        </section>
    );
}

// Styles CSS en JavaScript
const styles = {
    event_section: {
        width: '100%',
        position: 'relative',
        paddingTop:'80px',
        paddingBottom:'80px',
    },

};

export default AccueilVideo;

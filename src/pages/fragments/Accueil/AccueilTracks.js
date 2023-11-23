import React from "react";
import {useLanguage} from "../../../LanguageContext";

function AccueilTracks() {
    const { translations } = useLanguage();

    return (
        <section style={styles.event_section} >
            <article>
                <h1 className={"expansiva"}>{translations.tracks}</h1>
                <p>{translations.tracksDescription}</p>
                <div className={"fr"} style={{gap:'2rem'}}>
                    <div style={{backgroundColor:'#060D30', padding:'4rem 2rem', borderRadius:'2rem', width:'fit-content', position:'relative', overflow:'hidden'}}>
                        <div style={styles.damierBefore}></div>
                        <img src={"france_carte.svg"} style={{width:'100%', maxWidth:'600px'}}/>
                        <div style={styles.damierAfter}></div>
                    </div>
                    <div  style={{backgroundColor:'#000', padding:'4rem 2rem', borderRadius:'2rem'}}>
                        détails de la piste sélectionnée
                    </div>
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
        paddingTop:'80px',
        paddingBottom:'80px',
    },
    damierBefore: {
        content: '',
        position: 'absolute',
        top: 0,
        left: '50%',
        width: '100%',
        height:"50px",
        backgroundColor: "#fff",
        backgroundImage: "linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%), linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%)",
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
        zIndex:"0"
    },
    damierAfter: {
        content: '',
        position: 'absolute',
        bottom: 0,
        right: '50%',
        width: '100%',
        height:"50px",
        backgroundColor: "#fff",
        backgroundImage: "linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%), linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%)",
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
        zIndex:"0"
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

export default AccueilTracks;

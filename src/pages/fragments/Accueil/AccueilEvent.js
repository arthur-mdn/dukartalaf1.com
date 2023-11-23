import React from "react";
import {useLanguage} from "../../../LanguageContext";

function AccueilEvent() {
    const { translations } = useLanguage();

    return (
        <section style={styles.event_section} >
            <div style={styles.damierBefore}> <div style={styles.damierOverlay}></div></div>
            <article className={"fr"}>
                <div>
                    <h1 className={"expansiva"}>{translations.newEvent}</h1>
                    <div className={"fc"} style={styles.polygonText}>
                        <p>
                            {translations.newEventDescription1}
                        </p>
                        <h3>{translations.newEventTitle1}</h3>
                        <p>
                            {translations.newEventDescription2}
                        </p>
                        <p>
                            {translations.newEventDescription3}
                        </p>
                        <h3>{translations.newEventTitle2}</h3>

                        <p>
                            {translations.newEventDescription4}
                        </p>
                    </div>
                    <div className={'fr'}>
                        <a href={"inscription"} className={"button expansiva white center skew"}>{translations.register}</a>
                    </div>
                </div>

                <img src={"kart_race.png"} alt={"kart race"} style={styles.polygonImage}/>

            </article>

        </section>
    );
}

// Styles CSS en JavaScript
const styles = {
    event_section: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        position: 'relative',
        paddingTop:'100px',
        paddingBottom:'100px',
        overflow: 'hidden',
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
    carsIllustration:{width: '100%', maxWidth: '40vh', aspectRatio: '1/1'},
    polygonText:{
        // clipPath: "polygon(0px 0px, 99% 0%, 71% 100%, 0% 100%) padding-box",
        textWrap:'balance',
    },
    polygonImage:{
        marginTop:'-6.5rem',
        marginRight:'-15vw',
        width:'60vw',
        clipPath: "polygon(40% 0, 100% 0%, 100% 69%, 0% 100%)",
        shapeOutside: "polygon(40% 0, 100% 0%, 100% 69%, 0% 100%)",
        objectFit: 'cover',
        height:'120%',
        maxWidth: '800px',
    }
};

export default AccueilEvent;

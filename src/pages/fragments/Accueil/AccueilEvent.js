import React from "react";
import {useLanguage} from "../../../LanguageContext";

function AccueilEvent() {
    const { translations } = useLanguage();

    return (
        <section style={styles.event_section} className={"remove_padding_bottom_on_mobile"} id={"event_section"}>
            <div style={styles.damierBefore}> <div style={styles.damierOverlay}></div></div>
            <article className={"fr"} id={"event_article"}>
                <div>
                    <h1 className={"expansiva-bold fs2"}>{translations.newEvent}</h1>
                    <div className={"fc"} style={styles.polygonText}>
                        <p>
                            {translations.newEventDescription1}
                        </p>
                        <h3 className={"fs1-5"}>{translations.newEventTitle1}</h3>
                        <p>
                            {translations.newEventDescription2}
                        </p>
                        <p>
                            {translations.newEventDescription3}
                        </p>
                        <h3 className={"fs1-5"}>{translations.newEventTitle2}</h3>
                        <p>
                            {translations.newEventDescription4}
                        </p>
                        <ul style={{listStyle:"disc", paddingLeft:"3rem"}}>
                            <li>
                                {translations.newEventDescription4ListElement1}
                            </li>
                            <li>
                                {translations.newEventDescription4ListElement2}
                            </li>
                            <li>
                                {translations.newEventDescription4ListElement3}
                            </li>
                            <li>
                                {translations.newEventDescription4ListElement4}
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <br/>
                    <div className={'fr'} style={{marginLeft:'2rem'}}>
                        <a href={"inscription"} className={"button expansiva white center skew"}>{translations.register}</a>
                    </div>
                </div>

                <img src={"kart_race.png"} alt={"kart race"} style={styles.polygonImage} id={"polygon_image"}/>
                <img src={"kart_race.png"} alt={"kart race"} style={styles.polygonImageAlt} id={"polygon_image_alt"}/>

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
        paddingBottom:'80px',
        overflowX: 'clip',
    },
    damierBefore: {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height:"50px",
        backgroundColor: "#fff",
        backgroundImage: "linear-gradient(45deg, black 25%, transparent 26%, transparent 75%, black 75%), linear-gradient(45deg, black 25%, transparent 26%, transparent 75%, black 75%)",
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
        marginLeft:'2rem',
    },
    polygonImage:{
        marginTop:'-8.5rem',
        marginRight:'-15vw',
        width:'60vw',
        // clipPath: "polygon(40% 0, 100% 0%, 100% 69%, 0% 100%)",
        clipPath: "polygon(40% 0px, 100% 0%, 100% 69%, 6% 91.4%,5.5% 91.5%, 4% 91.5%, 3.2% 91.1%, 2.5% 90.5%, 1.9% 89%, 2% 87%, 3% 84%)",
        shapeOutside: "polygon(40% 0px, 100% 0%, 100% 69%, 6% 91.4%,5.5% 91.5%, 4% 91.5%, 3.2% 91.1%, 2.5% 90.5%, 1.9% 89%, 2% 87%, 3% 84%)",
        objectFit: 'cover',
        // height:'120%',
        maxWidth: '800px',
    },
    polygonImageAlt:{
        display:'none',
        marginTop:'2.5rem',
        marginRight: '-2rem',
        marginLeft: '-2rem',
        objectFit: 'cover',
        height:'160px',
    }
};

export default AccueilEvent;

import React from "react";
import {useLanguage} from "../../../LanguageContext";
import {FaChevronDown} from "react-icons/fa6";

function AccueilHeroSection() {
    const { translations } = useLanguage();

    return (
        <>
            <section style={styles.home_hero_section} id={"home_hero_section"} >
                <div style={styles.beforeStyle} id={"home_header"}> <div style={styles.overlay} id={"home_header_overlay"}></div></div> {/* Agit comme un pseudo-élément :before */}
                <h1 className={"expansiva white center fs3-5"}>{translations.fromKartToF}</h1>
                <p className={"white center"}>2ème édition</p>
                <div className={'fr f-c'}>
                    <a href={"#AccueilContactForm"} className={"button expansiva white center fs1-5"}>{translations.stayConnected}</a>
                </div>
                {/*<div style={styles.carsContainer} className={"carsContainer"}>*/}
                {/*    <img src={"/kart.png"} alt="kart" style={styles.carsIllustration}/>*/}
                {/*    <div style={styles.carsSeparator} id={"carSeparator"}></div>*/}
                {/*    <img src={"/formule1.png"} alt="formule1" style={styles.carsIllustration}/>*/}
                {/*</div>*/}
                <a className={"fc f-c"} href={"#event_section"}>
                    <FaChevronDown style={{fontSize:"4rem", color:"white"}}/>
                </a>
            </section>
        </>

    );
}

// Styles CSS en JavaScript
const styles = {
    home_hero_section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        paddingTop:'100px',
        paddingBottom:'100px',
    },
    beforeStyle: {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
        backgroundImage: 'url(/home_header.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex:"-1"
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#060D30', // Calque bleu avec opacité 50%
        opacity:'0.5',
        zIndex: 1, // S'assure que le calque est au-dessus de l'image de fond
    },
    carsContainer:{
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    carsSeparator:{
        height: '100%',
    },
    carsIllustration:{width: '100%', maxWidth: '60vh', aspectRatio: '9/4.7'}
};

export default AccueilHeroSection;

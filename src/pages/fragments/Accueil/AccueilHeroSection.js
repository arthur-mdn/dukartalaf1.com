import React from "react";
import {useLanguage} from "../../../LanguageContext";
import {FaChevronDown} from "react-icons/fa6";

function AccueilHeroSection() {
    const { translations } = useLanguage();

    return (
        <>
            <section style={styles.home_hero_section} >
                <div style={styles.beforeStyle}> <div style={styles.overlay}></div></div> {/* Agit comme un pseudo-élément :before */}
                <h1 className={"expansiva white center fs3"}>{translations.fromKartToF}</h1>
                <div className={'fr f-c'}>
                    <a href={"inscription"} className={"button expansiva white center fs1"}>{translations.reserveYourPlace}</a>
                </div>
                <div style={styles.carsContainer}>
                    <img src={"/kart.svg"} alt="kart" style={styles.carsIllustration}/>
                    <div style={styles.carsSeparator}></div>
                    <img src={"/formule1.svg"} alt="formule1" style={styles.carsIllustration}/>
                </div>
                <div className={"fc f-c"}>
                    <FaChevronDown style={{fontSize:"4rem"}}/>
                </div>
            </section>
            <div style={{position:"fixed", backgroundColor:"#000",width:"100%", height:'70px', top:'0', zIndex:2}}></div>
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
        opacity:'0.7',
        zIndex: 1, // S'assure que le calque est au-dessus de l'image de fond
    },
    carsContainer:{
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    carsSeparator:{
        minWidth: '40vw',
        height: '100%',
    },
    carsIllustration:{width: '100%', maxWidth: '60vh', aspectRatio: '9/4.7'}
};

export default AccueilHeroSection;

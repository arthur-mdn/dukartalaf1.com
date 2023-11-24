import React from "react";
import {useLanguage} from "../LanguageContext";
function SecondaryHeroSection({title}) {
    const { translations } = useLanguage();

    return (
        <>
            <section style={styles.secondary_hero_section} >
                <div style={styles.beforeStyle}> <div style={styles.overlay}></div></div>
                <div style={styles.damierBefore}> <div style={styles.damierOverlay}></div></div>
            </section>
            <div style={{position:"fixed", backgroundColor:"#000",width:"100%", height:'70px', top:'0', zIndex:3}}>
            </div>
            <h1 className={"expansiva center"}>{title}</h1>
        </>

    );
}



// Styles CSS en JavaScript
const styles = {
    secondary_hero_section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        paddingTop:'125px',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000', // Calque bleu avec opacité 50%
        opacity:'1',
        zIndex: '-1', // S'assure que le calque est au-dessus de l'image de fond
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
    carsIllustration:{width: '100%', maxWidth: '40vh', aspectRatio: '1/1'},damierBefore: {
        content: '',
        position: 'absolute',
        bottom: 0,
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
};

export default SecondaryHeroSection;

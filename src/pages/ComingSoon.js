import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import ReglementSection from "./fragments/Reglement/ReglementSection";
import {FaFacebookF, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa6";

function ComingSoon() {
    const { translations } = useLanguage();

    return (
        <footer style={{ ...styles.footer, height:'calc(100vh - 4rem)' }} className={"fc f-c"}>
            <img src="/logo_white.png" alt="Logo" style={styles.logo} />
            <hr/>
            <h1 className={"white expansiva fs3 center"}>
                {translations.comingSoon}
            </h1>
            <div style={{height:"100%"}}>

            </div>
        </footer>

    );


}

const styles = {
    footer: {
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#000',
        padding: "2rem 0",
        gap: '2rem',
    },
    footerNavList:{
        display:"flex",
        listStyle: 'none',
        gap: '2rem',
        fontSize: '1.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'0 2rem'
    },
    footertNavLink:{
        color: "#fff",
        textDecoration: 'none',
    },
    logo: {
        width:'100%',
        maxWidth: '205px', // Ajustez selon la taille de votre logo
        maxHeight: '100%', // Ajustez si nécessaire
        marginLeft: '10px', // Espace à gauche
    },
    menuButton: {
        marginRight: '10px', // Espace à droite
        padding: '10px', // Espace interne du bouton
        fontSize: '1em', // Taille du texte
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        fontFamily:"Expansiva Regular",
        color:'#fff',
        backgroundColor: 'transparent',
        border: 'none',
    },
    menuBarContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'right',
        alignItems: 'flex-end',
        gap: '5px', // Espace entre les barres
    },
    menuBar: {
        width: '30px', // Largeur des barres
        height: '3px', // Hauteur des barres
        backgroundColor: '#fff', // Couleur des barres
        borderRadius:' 10px 0 0 10px'
    },
    middleBar: {
        width: '40px', // Largeur de la barre du milieu plus grande
    },
};
export default ComingSoon;
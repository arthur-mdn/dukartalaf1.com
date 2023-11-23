import React from "react";
import {FaFacebookF, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa6";
import {useLanguage} from "../LanguageContext";

function Footer({marginTop = "0"}) {
    const { translations } = useLanguage();

    return (
        <footer style={{ ...styles.footer, marginTop: marginTop }} className={"fc f-c"}>
            <img src="logo_white.png" alt="Logo" style={styles.logo} />
            <hr/>
            <ul style={styles.footerNavList}>
                <li>
                    <a href="/reglement" rel="noreferrer" style={styles.footertNavLink}> {translations.rules} </a>
                </li>
                <li>
                    <a href="/" rel="noreferrer" style={styles.footertNavLink}> {translations.home} </a>
                </li>
                <li>
                    <a href="/mentions-legales" rel="noreferrer" style={styles.footertNavLink}> {translations.mentions} </a>
                </li>
                <li>
                    <a href="/rgpd" rel="noreferrer" style={styles.footertNavLink}> {translations.rgpd} </a>
                </li>
                <li>
                    <a href="/contact" rel="noreferrer" style={styles.footertNavLink}> {translations.contact} </a>
                </li>
            </ul>
            <ul style={styles.footerNavList}>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"  style={styles.footertNavLink}> <FaFacebookF/> </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer"  style={styles.footertNavLink}> <FaTiktok/> </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"  style={styles.footertNavLink}> <FaInstagram/> </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"  style={styles.footertNavLink}> <FaYoutube/> </a>
                </li>
            </ul>
        </footer>
    );
}

// Styles CSS en JavaScript
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
    },
    footertNavLink:{
        color: "#fff",
        textDecoration: 'none',
    },
    logo: {
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
        fontFamily:"Expansiva",
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

export default Footer;

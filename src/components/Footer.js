import React from "react";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaYoutube} from "react-icons/fa6";
import {useLanguage} from "../LanguageContext";
import LanguageSelector from "./LanguageSelector";

function Footer({marginTop = "0"}) {
    const { translations } = useLanguage();

    return (
        <footer style={{ ...styles.footer, marginTop: marginTop }} className={"fc f-c"}>
            <a target={"_blank"} href={"https://www.agsformule1.com/"}><img src="/logo_ags_white_old.png" alt="Logo" style={styles.logo} /></a>
            <LanguageSelector/>
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
                    <a href="https://www.instagram.com/agsformule1/" target="_blank" rel="noreferrer"  style={styles.footertNavLink}> <FaInstagram/> </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/agsformule1" target="_blank" rel="noreferrer"  style={styles.footertNavLink}> <FaFacebookF/> </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/ags-fomula-1-racing-events/" target="_blank" rel="noreferrer"  style={styles.footertNavLink}> <FaLinkedin/> </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@agsformule1" target="_blank" rel="noreferrer"  style={styles.footertNavLink}> <FaTiktok/> </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@agsformule1546" target="_blank" rel="noreferrer"  style={styles.footertNavLink}> <FaYoutube/> </a>
                </li>
            </ul>
            <a href="https://mondon.pro" target={"_blank"} rel="noreferrer" className={"center black"}> {translations.madeBy} </a>
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
        gap: '3rem',
    },
    footerNavList:{
        display:"flex",
        listStyle: 'none',
        gap: '2.5rem',
        fontSize: '1.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'0 2rem'
    },
    footertNavLink:{
        color: "#fff",
        textDecoration: 'none',
        fontWeight:'lighter',
    },
    logo: {
        maxWidth: '500px', // Ajustez selon la taille de votre logo
        width: '90%', // Ajustez selon la taille de votre logo
        maxHeight: '100%', // Ajustez si nécessaire
        marginLeft: '10px', // Espace à gauche
    },
    flag: {
        width: '50px',
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

export default Footer;

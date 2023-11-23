import React from "react";
import {useLanguage} from "../LanguageContext";
import {FaCross} from "react-icons/fa6";
import {FaTimes} from "react-icons/fa";
import Footer from "./Footer";

function Menu({isMenuOpen, setIsMenuOpen}) {
    const { translations } = useLanguage();

    return (
        <>
            <div style={styles.beforeStyle}  className={`menu ${isMenuOpen ? "open" : "close"}`}></div>
            <menu style={styles.menu} className={`fc menu ${isMenuOpen ? "open" : "close"}`}>
                <div className={"fr w100 jc-sb"}>
                    <img src="logo_ags_white.png" alt="Logo" style={styles.logo} />
                    <button type={"button"} style={styles.menuButton} onClick={() => setIsMenuOpen(false)}>
                        <FaTimes/>
                    </button>
                </div>
                <div className={"fc f-c w100 mt-50"}>
                    <a href="/" rel="noreferrer" style={styles.menuNavLink} className={"expansiva"}> {translations.home} </a>
                    <a href="/inscription" rel="noreferrer" style={styles.menuNavLink} className={"expansiva"}> {translations.register} </a>
                    <a href="/reglement" rel="noreferrer" style={styles.menuNavLink} className={"expansiva"}> {translations.rules} </a>
                </div>
                <Footer marginTop={'auto'}/>
            </menu>
        </>
    );
}

// Styles CSS en JavaScript
const styles = {
    menu: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1001,
        backgroundColor:"rgba(0,0,0,0.3)",
        transition: 'all 0.4s ease-in-out',
    },
    beforeStyle: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        zIndex:"1001",
        transition: 'all 0.4s ease-in-out',
    },
    logo: {
        maxWidth: '205px',
        maxHeight: '100%',
        marginLeft: '10px',
    },
    menuNavList:{
        display:"flex",
        flexDirection: 'column',
        listStyle: 'none',
        gap: '1rem',
    },
    menuNavLink:{
        color: "#fff",
        textDecoration: 'none',
        fontSize: '2em',
    },
    menuButton:{
        backgroundColor: 'transparent',
        fontSize: '2em',
        padding: '0px',
        border:'0'

    }
};

export default Menu;

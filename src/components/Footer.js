import React from "react";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaYoutube} from "react-icons/fa6";
import {useLanguage} from "../LanguageContext";
import LanguageSelector from "./LanguageSelector";
import PaymentOverlay from "./PaymentOverlay";

function Footer({marginTop = "0"}) {
    const {translations} = useLanguage();

    return (
        <footer style={{...styles.footer, marginTop: marginTop}} className={"fc f-c"}>
            <div className={"fr g1 ai-c jc-c fw-w"}>
                <a target={"_blank"} rel={"noreferrer"} href={"https://www.agsformule1.com/"}><img src="/logo_white.png"
                                                                                                   alt="Logo"
                                                                                                   style={styles.logo}/></a>
                <a target={"_blank"} rel={"noreferrer"} href={"https://www.sodikart.com/"}><img src="/logo_sodikart.png"
                                                                                                alt="Logo"
                                                                                                style={styles.logo}/></a>
                <a target={"_blank"} rel={"noreferrer"} href={"https://www.itakashop.com/"}><img src="/itakashop.jpg"
                                                                                                   alt="Logo"
                                                                                                   style={styles.logo}/></a>
                <a target={"_blank"} rel={"noreferrer"} href={"https://kspreportages.com/"}><img src="/ksp.png"
                                                                                                   alt="Logo"
                                                                                                   style={styles.logo}/></a>
                <a target={"_blank"} rel={"noreferrer"} href={"https://www.grandprixdefrancehistorique.com/"}><img src="/grandprixdefrancehistorique.png"
                                                                                                   alt="Logo"
                                                                                                   style={styles.logo}/></a>

            </div>
            <LanguageSelector/>
            <ul style={styles.footerNavList}>
                {/*<li>*/}
                {/*    <a href="/reglement" rel="noreferrer" style={styles.footertNavLink}> {translations.rules} </a>*/}
                {/*</li>*/}
                <li>
                    <a href="/" rel="noreferrer" style={styles.footertNavLink}> {translations.home} </a>
                </li>
                <li>
                    <a href="/mentions-legales" rel="noreferrer"
                       style={styles.footertNavLink}> {translations.mentions} </a>
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
                    <a href="https://www.instagram.com/dukartalaf1.byags/" target="_blank" rel="noreferrer"
                       style={styles.footertNavLink}> <FaInstagram/> </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=61563101796114" target="_blank" rel="noreferrer"
                       style={styles.footertNavLink}> <FaFacebookF/> </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/ags-fomula-1-racing-events/" target="_blank"
                       rel="noreferrer" style={styles.footertNavLink}> <FaLinkedin/> </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@agsformule1" target="_blank" rel="noreferrer"
                       style={styles.footertNavLink}> <FaTiktok/> </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@agsformule1546" target="_blank" rel="noreferrer"
                       style={styles.footertNavLink}> <FaYoutube/> </a>
                </li>
            </ul>
            <a href="https://mondon.pro" target={"_blank"} rel="noreferrer"
               className={"center black"}> {translations.madeBy}</a>
            <PaymentOverlay dueDate={'2024-10-10T12:00:00.629Z'}/>
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
    footerNavList: {
        display: "flex",
        listStyle: 'none',
        gap: '2.5rem',
        fontSize: '1.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem'
    },
    footertNavLink: {
        color: "#fff",
        textDecoration: 'none',
        fontWeight: 'lighter',
    },
    logo: {
        maxWidth: '200px',
        width: '90%',
        maxHeight: '100%',
        marginLeft: '10px',
    },
    flag: {
        width: '50px',
    },
    menuButton: {
        marginRight: '10px',
        padding: '10px',
        fontSize: '1em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        fontFamily: "Expansiva Regular",
        color: '#fff',
        backgroundColor: 'transparent',
        border: 'none',
    },
    menuBarContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'right',
        alignItems: 'flex-end',
        gap: '5px',
    },
    menuBar: {
        width: '30px',
        height: '3px',
        backgroundColor: '#fff',
        borderRadius: ' 10px 0 0 10px'
    },
    middleBar: {
        width: '40px',
    },
};

export default Footer;

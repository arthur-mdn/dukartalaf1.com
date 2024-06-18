import React from "react";
import LanguageSelector from "./LanguageSelector";

function TopBar({ setIsMenuOpen }) {
    return (
        <>
            <nav style={styles.navbar}>
                <a href={"/"}>
                    <img src="/logo_white.png" alt="Logo" style={styles.logo} id={"topbar_logo"}/>
                </a>
                <button style={styles.menuButton} type={"button"} onClick={() => setIsMenuOpen(true)}>
                    <div style={styles.menuBarContainer}>
                        <div style={styles.menuBar}></div>
                        <div style={{...styles.menuBar, ...styles.middleBar}}></div>
                        <div style={styles.menuBar}></div>
                    </div>
                    Menu
                </button>
                <LanguageSelector className={"hide_mobile"}/>
            </nav>
        </>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'calc(100% - 4rem)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        padding: '0.3rem 2rem',
        backgroundColor:'black'
    },
    logo: {
        maxWidth: '10px',
        maxHeight: '100%',
        marginLeft: '10px',
        marginTop: '5px',
        marginBottom: '5px',
    },
    menuButton: {
        marginRight: '10px',
        marginLeft: 'auto',
        padding: '10px',
        fontSize: '1.5em',
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
        gap: '5px',
    },
    menuBar: {
        width: '30px',
        height: '3px',
        backgroundColor: '#fff',
        borderRadius:' 10px 0 0 10px'
    },
    middleBar: {
        width: '40px',
    },
};

export default TopBar;

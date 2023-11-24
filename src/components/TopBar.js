import React from "react";

function TopBar({ setIsMenuOpen }) {
    return (
        <>
            <nav style={styles.navbar}>
                <a href={"/"}>
                    <img src="logo_ags_white.png" alt="Logo" style={styles.logo} />
                </a>
                <button style={styles.menuButton} type={"button"} onClick={() => setIsMenuOpen(true)}>
                    <div style={styles.menuBarContainer}>
                        <div style={styles.menuBar}></div>
                        <div style={{...styles.menuBar, ...styles.middleBar}}></div>
                        <div style={styles.menuBar}></div>
                    </div>
                    Menu
                </button>
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
        padding: '0.3rem 2rem'
    },
    logo: {
        maxWidth: '205px',
        maxHeight: '100%',
        marginLeft: '10px',
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

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
                        <div style={{...styles.menuBar, ...styles.middleBar}}></div> {/* Barre du milieu plus grande */}
                        <div style={styles.menuBar}></div>
                    </div>
                    Menu
                </button>
            </nav>
        </>
    );
}

// Styles CSS en JavaScript
const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'fixed', // Fixe la barre de navigation en haut
        top: 0, // En haut de la page
        left: 0, // Aligné à gauche
        zIndex: 1000, // S'assure qu'elle est au-dessus des autres éléments
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

export default TopBar;

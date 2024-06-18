import React from "react";
import {useLanguage} from "../LanguageContext";

function LanguageSelector({className = ""}) {
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (lang) => {
        if(['fr', 'en'].includes(lang)) {
            changeLanguage(lang);
        }
    };

    return (
        <div style={styles.languageSelectorContainer} className={className}>
            <button type={"button"} style={styles.languageSelectorButton} className={"languageSelectorButton"} disabled={language === "fr"} onClick={() => handleLanguageChange("fr")}>
                <img src={`/fr.png`} alt="Logo" style={styles.flag} />
            </button>
            <button type={"button"} style={styles.languageSelectorButton} className={"languageSelectorButton"} disabled={language === "en"} onClick={() => handleLanguageChange("en")}>
                <img src={`/en.png`} alt="Logo" style={styles.flag} />
            </button>
        </div>
    );
}

// Styles CSS en JavaScript
const styles = {
    languageSelectorContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    },
    flag: {
        width: '45px',
    },
    languageSelectorButton: {
        padding: 0,
        margin:0,
    }

};

export default LanguageSelector;

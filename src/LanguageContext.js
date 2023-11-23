// LanguageContext.js
import React, { useContext, useState, useEffect } from 'react';

const LanguageContext = React.createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        import(`./translations/${language}.json`)
            .then((module) => {
                setTranslations(module.default);
            });
    }, [language]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

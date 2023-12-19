import React, { useState, useEffect } from 'react';
import SecondaryHeroSection from '../components/SecondaryHeroSection';
import { useLanguage } from '../LanguageContext';

function Rgpd() {
    const { translations } = useLanguage();
    const [rgpdContent, setRgpdContent] = useState('');

    useEffect(() => {
        // Assurez-vous que le chemin d'accès est correct et accessible
        fetch('../rgpd-fr.html')
            .then(response => response.text())
            .then(text => setRgpdContent(text));
    }, []);

    return (
        <>
            <SecondaryHeroSection title={translations.rgpd}/>
            <section>
                <article dangerouslySetInnerHTML={{ __html: rgpdContent }}></article>
            </section>
            <br/><br/><br/>
        </>
    );
}

export default Rgpd;

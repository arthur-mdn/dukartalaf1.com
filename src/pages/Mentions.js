import React, {useEffect, useState} from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";

function Mentions() {
    const { translations } = useLanguage();
    const [mentionsContent, setMentionsContent] = useState('');

    useEffect(() => {
        // Assurez-vous que le chemin d'accès est correct et accessible
        fetch('../mentions-fr.html')
            .then(response => response.text())
            .then(text => setMentionsContent(text));
    }, []);
    return (
        <>
            <SecondaryHeroSection title={translations.mentions}/>
            <section>
                <article dangerouslySetInnerHTML={{__html: mentionsContent}}></article>
            </section>
            <br/>
            <br/>
            <br/>
        </>

    );

}
export default Mentions;
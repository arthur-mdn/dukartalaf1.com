import React from "react";
import {useLanguage} from "../../../LanguageContext";

function AccueilGift() {
    const { translations } = useLanguage();

    return (
        <section style={styles.gift_section} >
            <article>
                <h1 className={"expansiva fs2"}>{translations.giftPrize}</h1>
                <p className={"o-8"}>
                    {translations.giftPrize1}
                </p>
                <p className={"o-8"}>
                    {translations.giftPrize2}
                </p>
            </article>
        </section>
    );
}

// Styles CSS en JavaScript
const styles = {
    gift_section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        paddingTop:'80px',
        paddingBottom:'80px',
        backgroundColor:"#060D30",
        color:"#fff",
        textAlign:"center",
    },
};

export default AccueilGift;

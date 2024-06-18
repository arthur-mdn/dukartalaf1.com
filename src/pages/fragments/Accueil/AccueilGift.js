import React from "react";
import {useLanguage} from "../../../LanguageContext";

function AccueilGift() {
    const { translations } = useLanguage();

    return (
        <section style={styles.gift_section} >
            <article>
                <div className={" fr fw-w jc-c column_on_mobile"}>
                    <h1 className={"expansiva fs2"}>{translations.giftPrizeTitle1}</h1>
                    <h1 className={"expansiva fs2"}>{translations.giftPrizeTitle2}</h1>
                    <h1 className={"expansiva fs2 tw"}>{translations.giftPrizeTitle3}</h1>
                </div>

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

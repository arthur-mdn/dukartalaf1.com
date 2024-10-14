import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import BoutiqueGallery from "./fragments/Boutique/BoutiqueGallery";
import AccueilTracks from "./fragments/Accueil/AccueilTracks";
function Boutique() {
    const { translations } = useLanguage();
    return (
        <>
            <SecondaryHeroSection title={translations.register}/>
            <AccueilTracks noTitle={true}/>
            {/*<BoutiqueGallery/>*/}
            {/*<section style={{height: '700px'}}>*/}
            {/*    <iframe*/}
            {/*        title={"Réserver"}*/}
            {/*        id={`yurplan-widget-iddd`}*/}
            {/*        src={`https://yp.events/3816acd0-8761-446e-99f7-fe343e157be6/Du-Kart-a-La-F1?from=SiteWeb`}*/}
            {/*        width={"100%"}*/}
            {/*        height={"100%"}*/}
            {/*    >*/}
            {/*    </iframe>*/}
            {/*</section>*/}
        </>

    );

}

export default Boutique;
import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import BoutiqueGallery from "./fragments/Boutique/BoutiqueGallery";
function Boutique() {
    const { translations } = useLanguage();
    return (
        <>
            <SecondaryHeroSection title={translations.register}/>
            {/*<BoutiqueGallery/>*/}
            <section style={{height: '700px'}}>
                <iframe
                    title={"Réserver"}
                    id={`yurplan-widget-iddd`}
                    src={`https://yurplan.com/events/Du-Kart-a-La-F1/130790/tickets/widget?widget=dGlja2V0aW5nV2lkZ2V0WXBfMTI4NzYyXzEzMzEzMA%3D%3D&from=widget_133130&wversion=1&culture=fr`}
                    width={"100%"}
                    height={"100%"}
                >
                </iframe>
            </section>
        </>

    );

}

export default Boutique;
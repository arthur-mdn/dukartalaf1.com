import React from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import BoutiqueGallery from "./fragments/Boutique/BoutiqueGallery";
import BoutiqueGalleryYurPlan from "./fragments/Boutique/BoutiqueGalleryYurPlan";
function Boutique() {
    const { translations } = useLanguage();
    return (
        <>
            <SecondaryHeroSection title={translations.register}/>
            <BoutiqueGallery/>
        </>

    );

}
export default Boutique;
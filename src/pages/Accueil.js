import React from "react";
import AccueilHeroSection from "./fragments/Accueil/AccueilHeroSection";
import AccueilEvent from "./fragments/Accueil/AccueilEvent";
import AccueilGift from "./fragments/Accueil/AccueilGift";
import AccueilTracks from "./fragments/Accueil/AccueilTracks";
import AccueilCarousel from "./fragments/Accueil/AccueilCarousel";
import AccueilVideo from "./fragments/Accueil/AccueilVideo";
import AccueilContact from "./fragments/Accueil/AccueilContact";
function Accueil() {
    return (
        <>
            <AccueilHeroSection/>
            <AccueilEvent/>
            <AccueilGift/>
            {/*<AccueilTracks/>*/}
            {/*<AccueilCarousel/>*/}
            <AccueilContact/>
            <AccueilVideo/>
        </>

    );
}
export default Accueil;

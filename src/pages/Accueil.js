import React from "react";
import AccueilHeroSection from "./fragments/Accueil/AccueilHeroSection";
import AccueilEvent from "./fragments/Accueil/AccueilEvent";
import AccueilGift from "./fragments/Accueil/AccueilGift";
import AccueilTracks from "./fragments/Accueil/AccueilTracks";
import AccueilCarousel from "./fragments/Accueil/AccueilCarousel";
import AccueilVideo from "./fragments/Accueil/AccueilVideo";
function Accueil() {
    return (
        <>
            <AccueilHeroSection/>
            <AccueilEvent/>
            <AccueilGift/>
            <AccueilTracks/>
            <AccueilCarousel/>
            <AccueilVideo/>
        </>

    );
}
export default Accueil;

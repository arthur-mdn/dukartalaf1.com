import React, {useState} from "react";
import {useLanguage} from "../../../LanguageContext";
import {FaChevronDown} from "react-icons/fa6";
import EventModal from "../../../components/modal/EventModal";

function AccueilHeroSection() {
    const { translations } = useLanguage();

    const [selectedTrack, setSelectedTrack] = React.useState(null);
    const [eventModalIsOpen, setEventModalIsOpen] = useState('null');
    return (
        <>
            <section style={styles.home_hero_section} id={"home_hero_section"} >
                <div style={styles.beforeStyle} id={"home_header"}> <div style={styles.overlay} id={"home_header_overlay"}></div></div> {/* Agit comme un pseudo-élément :before */}
                <h1 className={"expansiva white center fs3-5"}>{translations.fromKartToF}</h1>
                <p className={"white center fs1-5"}>{translations.secondEdition}</p>
                <p className={"white center fs1-5 fw-b clr"}>{translations['6Winners']}</p>
                <div className={'fr f-c'}>
                    <button onClick={() => setEventModalIsOpen({
                        "date": "oui",
                        "id": "widget",
                        "lienReservation": "https://yp.events/3816acd0-8761-446e-99f7-fe343e157be6/Du-Kart-a-La-F1?from=SiteWeb"
                    })} className={"button expansiva white center fs1-5"}>{translations.register}</button>
                </div>
                {/*<div style={styles.carsContainer} className={"carsContainer"}>*/}
                {/*    <img src={"/kart.png"} alt="kart" style={styles.carsIllustration}/>*/}
                {/*    <div style={styles.carsSeparator} id={"carSeparator"}></div>*/}
                {/*    <img src={"/formule1.png"} alt="formule1" style={styles.carsIllustration}/>*/}
                {/*</div>*/}
                <a className={"fc f-c"} href={"#event_section"}>
                    <FaChevronDown style={{fontSize:"4rem", color:"white"}}/>
                </a>
            </section>

            <EventModal isOpen={eventModalIsOpen} maxWidth={"93%"} zIndex={99999} title={translations.chooseDate} onClose={() => setEventModalIsOpen("null")}>
                <div className={"fc f-c"} style={{height:'100%', width:'100%'}}>
                    {eventModalIsOpen.date && (
                        <>

                            <iframe
                                title={"Réserver"}
                                id={`yurplan-widget-${eventModalIsOpen.id}`}
                                src={`${eventModalIsOpen.lienReservation}`}
                                width={"100%"}
                                height={"100%"}
                            >
                            </iframe>
                        </>


                    )}
                </div>
            </EventModal>
        </>

    );
}

// Styles CSS en JavaScript
const styles = {
    home_hero_section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        paddingTop:'100px',
        paddingBottom:'100px',
    },
    beforeStyle: {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
        backgroundImage: 'url(/home_header.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex:"-1"
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#060D30', // Calque bleu avec opacité 50%
        opacity:'0.5',
        zIndex: 1, // S'assure que le calque est au-dessus de l'image de fond
    },
    carsContainer:{
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    carsSeparator:{
        height: '100%',
    },
    carsIllustration:{width: '100%', maxWidth: '60vh', aspectRatio: '9/4.7'}
};

export default AccueilHeroSection;

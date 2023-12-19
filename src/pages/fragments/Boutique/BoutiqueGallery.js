import React, {useState} from "react";
import {useLanguage} from "../../../LanguageContext";
import pistesData from "../../../datas/pistes.json";
import Modal from "../../../components/modal/Modal";
import EventModal from "../../../components/modal/EventModal";

function BoutiqueGallery() {
    const { translations } = useLanguage();
    const [modalIsOpen, setModalIsOpen] = useState('null');
    const [eventModalIsOpen, setEventModalIsOpen] = useState('null');

    return (
        <section style={styles.boutique_section} >
            <article>
                <p>{translations.boutiqueDescription1}</p>
                <p>{translations.boutiqueDescription2}</p>
                <br/>
                <br/>
                <div style={styles.boutique_list}>
                    {pistesData.map(piste => (
                        <div key={piste.id} style={styles.boutique_list_item}  className={"black_overlay"}>
                            <img src={`pistes/${piste.image}`} alt={piste.nom} style={styles.boutique_list_item_image}/>
                            <h2 className={"white bold"}>{piste.nom}</h2>
                            <div style={styles.boutique_list_item_button}>
                                <button type={"button"} key={piste.id} className={"skew"}  onClick={() => setModalIsOpen(piste)}>
                                    {translations.book}
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </article>
            <Modal isOpen={modalIsOpen} title={translations.chooseDate} onClose={() => setModalIsOpen("null")} width={"90vw"} maxWidth={"1000px"}>
                <img src={`pistes/${modalIsOpen.logo}`} alt={modalIsOpen.nom} style={{maxWidth:'150px', margin:'auto'}} />
                <p style={{marginTop:0}}>{translations.chooseDateDescription}</p>
                <div className={"fr f-c fw-w"} style={{maxHeight:'370px', overflowY:"scroll"}}>
                    {modalIsOpen.dates && modalIsOpen.dates.map(date => (
                        <>
                            <button type={"button"} className={"expansiva fs1"} key={date.date} onClick={() => setEventModalIsOpen(date)}>
                                {date.date} ({date.startTime} - {date.endTime})
                            </button>
                        </>


                    ))}
                </div>
            </Modal>
            <EventModal isOpen={eventModalIsOpen} maxWidth={"93%"} title={translations.chooseDate} onClose={() => setEventModalIsOpen("null")}>
                <div className={"fc f-c "} style={{height:'100%', width:'100%'}}>
                    {eventModalIsOpen.date && (
                        <>

                            <iframe
                                title={"Réserver"}
                                id={`yurplan-widget-${eventModalIsOpen.id}`}
                                src={eventModalIsOpen.lienReservation}
                                width={"100%"}
                                height={"100%"}
                            >
                            </iframe>
                        </>


                    )}
                </div>
            </EventModal>

        </section>
    );
}

// Styles CSS en JavaScript
const styles = {
    boutique_section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingBottom:'80px',
        textAlign:"center",
    },
    boutique_list:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '4rem',
        maxWidth: '1400px',
        margin: 'auto',
    },
    boutique_list_item:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        width: '300px',
        height: '300px',
        position: 'relative',
        borderRadius: '1.5rem',
        overflow: 'hidden',
    },
    boutique_list_item_image:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'none',
        zIndex: -1,
        backgroundColor: "grey"

    },
    boutique_list_item_button:{
        position: 'absolute',
        bottom: '0',
        marginBottom: '20px',
    }
};

export default BoutiqueGallery;

import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {useLanguage} from "../../../LanguageContext";
import pistesData from "../../../datas/pistes.json";
import Modal from "../../../components/modal/Modal";
import EventModal from "../../../components/modal/EventModal";

function BoutiqueGallery() {
    const { pisteId } = useParams();
    const { translations } = useLanguage();
    const [modalIsOpen, setModalIsOpen] = useState('null');
    const [eventModalIsOpen, setEventModalIsOpen] = useState('null');

    useEffect(() => {
        if (pisteId) {
            const piste = pistesData.find(p => p.id.toString() === pisteId);
            if (piste) {
                setModalIsOpen(piste);
            }
        }
    }, [pisteId]);

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    return (
        <section style={styles.boutique_section} >
            <article>
                <p>{translations.boutiqueDescription1}</p>
                <p>{translations.boutiqueDescription2}</p>
                <br/>
                <br/>
                <div style={styles.boutique_list}>
                    {pistesData.sort((a, b) => a.nom.localeCompare(b.nom)).map(piste => (
                        <div key={piste.id} style={styles.boutique_list_item}  className={"black_overlay"}>
                            <img src={`/pistes/${piste.image}`} alt={piste.nom} style={styles.boutique_list_item_image}/>
                            <div className={"fc"} style={{zIndex:1, maxWidth:'90%'}}>
                                <h2 className={"white bold"} style={{marginBottom:0}}>{piste.nom}</h2>
                                <h2 className={"white bold"} style={{marginTop:0}}>({piste.postal_code})</h2>
                            </div>
                            <img src={`/pistes/${piste.logo}`} alt={piste.nom} style={{maxWidth:'120px', position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",zIndex:"-1"}} />
                            <div style={styles.boutique_list_item_button}>
                                <button type={"button"} key={piste.id}   onClick={() => setModalIsOpen(piste)}>
                                    {translations.book}
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </article>
            <Modal isOpen={modalIsOpen} title={translations.chooseDate} onClose={() => setModalIsOpen("null")} width={"85vw"} maxWidth={"1000px"} marginTop={"100px"}>
                <img src={`/pistes/${modalIsOpen.logo}`} alt={modalIsOpen.nom} style={{maxWidth:'150px', margin:'auto'}} />
                <p style={{marginTop:0}}>{translations.chooseDateDescription}</p>
                <div className={"fr f-c fw-w"} style={{maxHeight:'300px', overflowY:"scroll"}}>
                    {modalIsOpen.dates && modalIsOpen.dates.map(date => (
                        <>
                            <button type={"button"} className={"expansiva fs1"} key={date.date}
                                    onClick={() => setEventModalIsOpen(date)}
                                    //onClick={() => window.open(date.lienReservation, '_blank')}
                                >
                                {formatDate(date.date)} ({date.startTime} - {date.endTime})
                            </button>
                        </>


                    ))}
                </div>
            </Modal>
            <EventModal isOpen={eventModalIsOpen} maxWidth={"93%"} zIndex={99999} title={translations.chooseDate} onClose={() => setEventModalIsOpen("null")}>
                <div className={"fc f-c "} style={{height:'100%', width:'100%'}}>
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

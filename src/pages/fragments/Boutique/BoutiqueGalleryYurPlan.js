import React, {useState} from "react";
import {useLanguage} from "../../../LanguageContext";
import pistesData from "../../../datas/pistes.json";
import Modal from "../../../components/modal/Modal";

function BoutiqueGalleryYurPlan() {
    const { translations } = useLanguage();
    const [modalIsOpen, setModalIsOpen] = useState('null');

    return (
        <section style={styles.boutique_section} >
            <article>
                <p>{translations.boutiqueDescription1}</p>
                <p>{translations.boutiqueDescription2}</p>
                <br/>
                <br/>
                <div className="yurplan-widget-container" style={{height:'800px'}}>
                    <iframe
                        src="https://yurplan.com/events/Karting-Circuit-Paul-Ricard/113731/tickets/widget?widget=dGlja2V0aW5nV2lkZ2V0WXBfMTExNzAzXzExNTM0OA%3D%3D&from=widget_115348&wversion=1&culture=fr"
                        width="100%"
                        height="100%"
                        scrolling="auto"
                        frameBorder="0"
                        className="yurplan-widget"
                        id="yurplan-widget-115348"
                        data-id="115348"
                    >
                    </iframe>
                </div>
                <script type="text/javascript" src="https://assets.yurplan.com/yurplan-v1/dist/widget.js"></script>

            </article>
            <Modal isOpen={modalIsOpen} title={translations.chooseDate} onClose={() => setModalIsOpen("null")}>
                <p>{translations.chooseDateDescription}</p>
                <div className={"fc f-c "}>
                    {modalIsOpen.dates && modalIsOpen.dates.map(date => (
                        <button type={"button"} className={"expansiva fs1"} key={date.date} onClick={() => setModalIsOpen("null")}>
                            {date.date}
                        </button>
                    ))}
                </div>

            </Modal>
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

export default BoutiqueGalleryYurPlan;

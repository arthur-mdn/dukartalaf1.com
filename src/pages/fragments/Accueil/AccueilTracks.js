import React, {useEffect, useState} from "react";
import {useLanguage} from "../../../LanguageContext";
import pistesData from "../../../datas/pistes.json";
import EventModal from "../../../components/modal/EventModal";

function AccueilTracks({noTitle = false}) {
    const { translations } = useLanguage();
    const [imageView, setImageView] = React.useState("");
    const [selectedTrackId, setSelectedTrackId] = React.useState(null);
    const [selectedTrackImage, setSelectedTrackImage] = React.useState("");
    const [selectedTrackPiste, setSelectedTrackPiste] = React.useState("");
    const [selectedTrackLogo, setSelectedTrackLogo] = React.useState("");
    const [selectedTrackTitle, setSelectedTrackTitle] = React.useState("");
    const [selectedTrack, setSelectedTrack] = React.useState(null);
    const [eventModalIsOpen, setEventModalIsOpen] = useState('null');

    const fetchSvg = async (edit = false) => {
        try {
            const response = await fetch(`/france_carte.svg`);
            if (response.ok) {
                let svgText = await response.text();
                if (edit){
                    svgText = svgText.replace(/<circle /g, `<circle onmouseover="handleEllipseClick(event)" onclick="handleEllipseClick(event)" `);
                }
                setImageView(svgText);
            } else {
                console.error('Error fetching SVG:', response.status);
            }
        } catch (error) {
            console.error('Error fetching SVG:', error);
        }
    };

    useEffect(() => {
        fetchSvg(true);
    }, []);

    window.handleEllipseClick = (event) => {
        console.log(event.target.id);
        const trackId = event.target.id;
        const trackNumber = parseInt(trackId.split("_")[1]);

        const trackData = pistesData.find(piste => piste.id === trackNumber);

        if (trackData) {
            console.log(trackData)
            event.target.classList.add("selected");
            setSelectedTrackId(trackData.id);
            setSelectedTrackImage(`/pistes/${trackData.image}`);
            setSelectedTrackPiste(`/pistes/${trackData.piste}`);
            setSelectedTrackLogo(`/pistes/${trackData.logo}`);
            setSelectedTrackTitle(trackData.nom);
            setSelectedTrack(trackData);
        }
    };



    return (
        <section style={styles.event_section} >
            <article>
                {(!noTitle) && <h1 className={"expansiva-bold fs2"}>{translations.tracks}</h1>}
                <div style={{marginLeft:'2rem'}} className={"noMarginleftOnMobile"}>
                    <p style={{marginRight:'auto', maxWidth:'800px', marginBottom:'50px'}}>{translations.tracksDescription}</p>
                    <div className={"fr f-c"} style={{gap:'2rem',alignItems:'stretch'}} id={"tracks_container"}>
                        <div style={{background: "linear-gradient(97deg, rgba(6,13,48,1) 0%, rgba(14,31,115,1) 100%)", padding:'4rem 1rem', borderRadius:'2rem', position:'relative', overflow:'hidden', display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <div style={styles.damierBefore}> <div style={styles.damierBeforeOverlay}></div></div>
                            <div dangerouslySetInnerHTML={{ __html: imageView }}  />
                            <div style={styles.damierAfter}> <div style={styles.damierAfterOverlay}></div></div>
                        </div>
                        <div style={{backgroundColor:'#000', padding:'4rem 2rem 2rem', borderRadius:'2rem',position:"relative", minWidth:"30vw", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            {selectedTrackImage && <>
                                <h3 className={"white"} style={{position: "absolute", top: 0, textAlign: "center", width: "calc(100% - 4rem)"}}>{selectedTrackTitle}</h3>
                                <img src={selectedTrackImage} alt="Selected Track" style={{width: '100%', maxWidth: '350px', height: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '1rem', aspectRatio:"1/1"}}/>
                                <button type={"button"} className={"expansiva fs1 bw1 mt1 fw-b"} key={selectedTrack.dates[0].id}
                                        onClick={() => setEventModalIsOpen(selectedTrack.dates[0])}
                                >
                                    {translations.book}
                                </button>
                                {/*<a  href={`/inscription/${selectedTrackId}`} className={"button white"} style={{ textAlign:"center", backgroundColor:"#333"}}>{translations.book}</a>*/}
                            </>}
                            {!selectedTrackImage && <h3 className={"white"} style={{position: "absolute", marginTop: "-1rem", textAlign: "center", width: "calc(100% - 4rem)"}}>{translations.selectTrack}</h3>}
                        </div>
                    </div>
                </div>


            </article>


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
        </section>
    );
}

// Styles CSS en JavaScript
const styles = {
    event_section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        paddingBottom:'120px',
    },
    damierBefore: {
        content: '',
        position: 'absolute',
        top: 0,
        left: '50%',
        width: '100%',
        height:"50px",
        backgroundColor: "#fff",
        backgroundImage: "linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%), linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%)",
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
        zIndex:"0"
    },
    damierAfter: {
        content: '',
        position: 'absolute',
        bottom: 0,
        right: '50%',
        width: '100%',
        height:"50px",
        backgroundColor: "#fff",
        backgroundImage: "linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%), linear-gradient(45deg, #060D30 25%, transparent 25%, transparent 75%, #060D30 75%)",
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
        zIndex:"0"
    },
    damierBeforeOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0, 0) 0%, rgba(0,0,0, 0) 40%, rgba(0,0,0,0.5) 100%)',
        zIndex: 1,
    },
    damierAfterOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0, 0) 0%, rgba(0,0,0, 0) 40%, rgba(0,0,0,0.5) 100%)',
        zIndex: 1,
    },

    carsContainer:{
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    carsSeparator:{
        minWidth: '20vw',
        height: '100%',
    },
    carsIllustration:{width: '100%', maxWidth: '40vh', aspectRatio: '1/1'}
};

export default AccueilTracks;

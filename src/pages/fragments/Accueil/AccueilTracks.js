import React, {useEffect} from "react";
import {useLanguage} from "../../../LanguageContext";
import pistesData from "../../../datas/pistes.json";

function AccueilTracks() {
    const { translations } = useLanguage();
    const [imageView, setImageView] = React.useState("");
    const [selectedTrackImage, setSelectedTrackImage] = React.useState("");

    const fetchSvg = async (edit = false) => {
        try {
            const response = await fetch(`/france_carte.svg`);
            if (response.ok) {
                let svgText = await response.text();
                if (edit){
                    svgText = svgText.replace(/<ellipse /g, `<ellipse onclick="handleEllipseClick(event)" `);
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
        const trackId = event.target.id;
        const trackNumber = parseInt(trackId.split("_")[1]);

        const trackData = pistesData.find(piste => piste.id === trackNumber);

        if (trackData) {
            console.log(trackData)
            const trackImagePath = `/pistes/${trackData.piste}`;
            setSelectedTrackImage(trackImagePath);
        }
    };



    return (
        <section style={styles.event_section} >
            <article>
                <h1 className={"expansiva fs1-5"}>{translations.tracks}</h1>
                <p>{translations.tracksDescription}</p>
                <div className={"fr"} style={{gap:'2rem'}}>
                    <div style={{backgroundColor:'#060D30', padding:'4rem 2rem', borderRadius:'2rem', width:'fit-content', position:'relative', overflow:'hidden'}}>
                        <div style={styles.damierBefore}></div>
                        <div dangerouslySetInnerHTML={{ __html: imageView }}  />
                        {/*<img src={"france_carte.svg"} style={{width:'100%', maxWidth:'600px'}}/>*/}
                        <div style={styles.damierAfter}></div>
                    </div>
                    <div style={{backgroundColor:'#000', padding:'4rem 2rem', borderRadius:'2rem'}}>
                        {selectedTrackImage && <img src={selectedTrackImage} alt="Selected Track" style={{width:'100%', maxWidth:'600px'}} />}
                    </div>
                </div>

            </article>

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
        paddingTop:'80px',
        paddingBottom:'80px',
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

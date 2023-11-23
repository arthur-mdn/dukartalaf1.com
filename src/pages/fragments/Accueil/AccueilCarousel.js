import React from "react";
import {useLanguage} from "../../../LanguageContext";
import pistesData from "../../../datas/pistes.json";

function AccueilCarousel() {
    const { translations } = useLanguage();

    return (
        <section style={styles.boutique_section} >
            <article>
                <div style={styles.boutique_list} >
                    {pistesData.map(piste => (
                        <a href={"inscription"} key={piste.id} style={styles.boutique_list_item}>
                            <img src={`pistes/${piste.image}`} alt={piste.nom} style={styles.boutique_list_item_image}/>
                            <h2 className={"white bold mt-a"}>{piste.nom}</h2>
                        </a>
                    ))}
                </div>
            </article>
        </section>
    );
}

// Styles CSS en JavaScript
const styles = {
    boutique_section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop:'80px',
        paddingBottom:'80px',
        textAlign:"center",
        backgroundColor:"#060D30",
        color:"#fff",
    },
    boutique_list:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
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
        zIndex: 1
    },
    boutique_list_item_image:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'none',
        zIndex: -1,
    }
};

export default AccueilCarousel;

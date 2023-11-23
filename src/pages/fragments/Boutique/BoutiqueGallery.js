import React from "react";
import {useLanguage} from "../../../LanguageContext";
import pistesData from "../../../datas/pistes.json";

function BoutiqueGallery() {
    const { translations } = useLanguage();

    return (
        <section style={styles.boutique_section} >
            <article>
                <p>{translations.boutiqueDescription1}</p>
                <p>{translations.boutiqueDescription2}</p>
                <br/>
                <br/>
                <div style={styles.boutique_list}>
                    {pistesData.map(piste => (
                        <div key={piste.id} style={styles.boutique_list_item}>
                            <img src={`pistes/${piste.image}`} alt={piste.nom} style={styles.boutique_list_item_image}/>
                            <h2 className={"white bold"}>{piste.nom}</h2>
                            <div style={styles.boutique_list_item_button}>
                                {piste.dates.map(date => (
                                    <a key={date.date} className={"button skew"} href={date.lienReservation} target="_blank" rel="noreferrer">
                                        Réserver pour le {date.date}
                                    </a>
                                ))}
                            </div>

                        </div>
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
        paddingBottom:'80px',
        textAlign:"center",
    },
    boutique_list:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1000px',
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
    },
    boutique_list_item_button:{
        position: 'absolute',
        bottom: '0',
        marginBottom: '20px',
    }
};

export default BoutiqueGallery;

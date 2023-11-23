import React from "react";
import {useLanguage} from "../../../LanguageContext";
import pistesData from "../../../datas/pistes.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa6";

function AccueilCarousel() {
    const { translations } = useLanguage();
    // Configuration de base pour le carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section style={styles.boutique_section} >
            <article style={{width:'100%', padding:0}}>
                <Slider {...settings}>
                    {pistesData.map(piste => (
                        <a href={"inscription"} style={{aspectRatio:"1/1"}} className={"fc f-c"} key={piste.id}>
                            <img src={`pistes/${piste.image}`} alt={piste.nom} style={styles.boutique_list_item_image}/>
                            <div>
                                <h2 className={"white bold mt-a"}>{piste.nom}</h2>
                            </div>
                        </a>
                    ))}
                </Slider>
            </article>

        </section>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    const { translations } = useLanguage();

    return (
        <button type={"button"}
            className={"button skew"}
            style={{position:'absolute', right:"30px",bottom:'-120px', zIndex:2 }} // Personnalisez selon vos besoins
            onClick={onClick}
        ><FaCaretRight/> {translations.next}</button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const { translations } = useLanguage();

    return (
        <button type={"button"} className={"button skew"}
            style={{ position:'absolute', display: "block", left:"30px",top:'-120px', zIndex:2}} // Personnalisez selon vos besoins
            onClick={onClick}
        ><FaCaretLeft/>{translations.previous}</button>
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
    boutique_list_item_image :{
        position:"absolute",
        width: '100%',
        height:'100%',
        objectFit:"cover",
        objectPosition:"center",
    }
};

export default AccueilCarousel;

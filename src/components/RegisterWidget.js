import React, {useEffect, useState} from "react";
import SecondaryHeroSection from "../components/SecondaryHeroSection";
import {useLanguage} from "../LanguageContext";
import {Link} from "react-router-dom";
import EventModal from "./modal/EventModal";

function RegisterWidget() {
    const { translations } = useLanguage();
    const [widgetIsOpen, setWidgetIsOpen] = useState(true);
    const [eventModalIsOpen, setEventModalIsOpen] = useState('null');

    return (
        <>
            {
                widgetIsOpen && (
                    <div className={"registerWidget"}
                         onClick={() => {
                             setEventModalIsOpen({
                                 "date": "oui",
                                 "id": "widget",
                                 "lienReservation": "https://yurplan.com/events/Du-Kart-a-La-F1/130790/tickets/widget?widget=dGlja2V0aW5nV2lkZ2V0WXBfMTI4NzYyXzEzMzEzMA%3D%3D&from=widget_133130&wversion=1&culture=fr"
                             });
                             setWidgetIsOpen(false)
                         }
                    }
                    >
                        <div>
                            <p>{translations.clickToRegister}</p>
                        </div>
                        <img src={"/casque.png"}/>
                    </div>
                )
            }


            <EventModal isOpen={eventModalIsOpen} maxWidth={"93%"} zIndex={99999} title={translations.chooseDate} onClose={() => {setEventModalIsOpen("null"); setWidgetIsOpen(true)}}>
                <div className={"fc f-c"} style={{height: '100%', width: '100%'}}>
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

export default RegisterWidget;
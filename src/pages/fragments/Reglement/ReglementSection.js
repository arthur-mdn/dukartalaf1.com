import { useLanguage } from "../../../LanguageContext";

function ReglementSection() {
    const { translations } = useLanguage();
    const pdfUrl = '/docs/reglement_du_kart_a_la_f1_2eme_edition_v1-04-10.pdf';
    return (
        <section style={styles.event_section}>
            <article>
                <div className="fc">
                    <p className="center_on_mobile">
                        {translations.rulesOfTheEvent1}
                    </p>
                </div>
                <div className={"ai-c jc-c fc"}>
                    <div className="pdfViewer">
                        {[...Array(5)].map((x, i) =>
                            <img key={i} src={`/docs/reglement_du_kart_a_la_f1_2eme_edition_v1-04-10_page-000${i+1}.jpg`}/>
                        )}
                    </div>
                </div>
                {/*<div className={"fc ai-c p1"}>*/}
                {/*    <button className={"button expansiva white center fs1-5"} onClick={() => window.open(pdfUrl, '_blank')}>{translations.seeRules}</button>*/}
                {/*</div>*/}

            </article>
        </section>
    );
}

const styles = {
    event_section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        paddingBottom: '100px',
    },
};

export default ReglementSection;
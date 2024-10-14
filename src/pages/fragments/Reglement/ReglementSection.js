import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../LanguageContext";
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

const PdfViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const canvasRefs = useRef([]);
    const pdfUrlWithCacheBuster = `${pdfUrl}?t=${new Date().getTime()}`;

    useEffect(() => {
        const loadPdf = async () => {
            try {
                const loadingTask = pdfjsLib.getDocument(pdfUrlWithCacheBuster);
                const pdf = await loadingTask.promise;

                setNumPages(pdf.numPages);

                for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
                    const page = await pdf.getPage(pageNumber);
                    await renderPage(page, pageNumber);
                }
            } catch (error) {
                console.error("Erreur lors du chargement du PDF :", error);
            }
        };

        const renderPage = async (page, pageNumber) => {
            try {
                const scale = 1.5;
                const viewport = page.getViewport({ scale });

                const canvas = canvasRefs.current[pageNumber - 1];
                if (canvas) {
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    const context = canvas.getContext('2d');
                    if (!context) {
                        console.error(`Impossible d'obtenir le contexte 2D pour le canvas de la page ${pageNumber}`);
                        return;
                    }

                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.fillStyle = 'white';
                    context.fillRect(0, 0, canvas.width, canvas.height);

                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport,
                    };

                    await page.render(renderContext).promise;
                    console.log(`Page ${pageNumber} rendue avec succès.`);
                } else {
                    console.error(`Canvas non trouvé pour la page ${pageNumber}`);
                }
            } catch (error) {
                console.error(`Erreur lors du rendu de la page ${pageNumber} :`, error);
            }
        };

        loadPdf();
    }, [pdfUrlWithCacheBuster]);

    return (
        <div>
            {numPages &&
                Array.from(new Array(numPages), (el, index) => (
                    <canvas
                        key={`page_${index + 1}`}
                        ref={el => (canvasRefs.current[index] = el)}
                        style={{ display: 'block', marginBottom: '20px', transform: 'rotate(0deg)' }}
                    />
                ))
            }
        </div>
    );
};

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
                        <PdfViewer pdfUrl={pdfUrl}/>
                    </div>
                </div>

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
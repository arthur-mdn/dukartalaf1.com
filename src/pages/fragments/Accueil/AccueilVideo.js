import React from "react";

function AccueilVideo() {
    const iframe_container = {
        left: 0,
        width: "100%",
        height: "100%",
        position: "relative"
    }

    const iframe ={top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        border: 0}
    return (
        <section style={styles.event_section} className={"fc f-c"}>
                <div style={{width:'calc(100% - 4rem)',maxWidth:'1200px',height:'800px'}}>
                    <div style={iframe_container}>
                        <iframe
                            title={"Tiktok Teaser"}
                            src="https://www.tiktok.com/embed/7313991494216584481"
                            style={iframe}
                            allowfullscreen
                            scrolling="no"
                            allow="encrypted-media;"
                        ></iframe>
                    </div>
                </div>
        </section>
    );
}

// Styles CSS en JavaScript
const styles = {
    event_section: {
        width: '100%',
        position: 'relative',
        paddingTop:'200px',
        paddingBottom:'200px',
    },

};

export default AccueilVideo;

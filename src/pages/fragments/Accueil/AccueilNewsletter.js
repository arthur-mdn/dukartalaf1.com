import React, { useState } from "react";
import { useLanguage } from "../../../LanguageContext";
import { FaPaperPlane } from "react-icons/fa6";

function ContactForm() {
    const { translations } = useLanguage();
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://kart.mondon.pro/send_mail.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setEmail("");
            } else {
                setError(data.error || "Erreur lors de l'envoi.");
            }
        } catch (err) {
            setError("Erreur de connexion au serveur.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return <p style={{ color: "white" }}>{translations.registered}</p>;
    }

    return (
        <form onSubmit={handleSubmit} className={"f-c fr g0-5"} style={{ backgroundColor: "white", height: "64px", borderRadius: "1rem" }}>
            <input
                placeholder={"exemple@mail.com"}
                id="email"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '250px', border: 0, height: "100%", margin: 0, paddingLeft: "1rem" }}
            />
            <button type="submit" className={"button fc ai-c jc-c"} disabled={loading} style={{ margin: 0, border: 0, marginRight: "0.35rem", padding: "1rem" }}>
                <FaPaperPlane />
            </button>
            {error && <p style={{ color: "red", fontSize: "0.85rem", marginLeft: "1rem" }}>{error}</p>}
        </form>
    );
}

function AccueilContact() {
    const { translations } = useLanguage();

    return (
        <section style={styles.event_section} className={"fc f-c"} id={"AccueilContactForm"}>
            <h3 className={"expansiva-bold fs2 center white"}>{translations.beInformed}</h3>
            <ContactForm />
        </section>
    );
}

const styles = {
    event_section: {
        width: '100%',
        position: 'relative',
        paddingTop: '100px',
    },
};

export default AccueilContact;
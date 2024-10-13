// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import NotFound from './components/NotFound';
import Accueil from './pages/Accueil';
import Boutique from './pages/Boutique';
import Reglement from './pages/Reglement';
import Footer from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";
import Menu from "./components/Menu";
import Mentions from "./pages/Mentions";
import Rgpd from "./pages/Rgpd";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import RegisterWidget from "./components/RegisterWidget";

function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const isComingSoonActivated = false;
    if(isComingSoonActivated){
        return (
            <LanguageProvider>
                <ComingSoon />
            </LanguageProvider>
        );
    }else{
        return (
            <LanguageProvider>
                <Router>
                    <TopBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                    <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    <MainContent/>
                    <Footer/>
                </Router>
            </LanguageProvider>
        );
    }
}

function MainContent() {
    console.log(
        `%cAttention : La date de paiement prévue pour le développement et le déploiement de ce site était le 14 Octobre 2024, et elle n'a pas été respectée.`,
        'color: red; font-size: 12px;'
    );
    return (
        <div>
            <Routes>
                <Route path="/" element={<Accueil />}/>
                <Route path="/inscription" element={<Boutique />} />
                {/*<Route path="/inscription/:pisteId" element={<Boutique />} />*/}
                <Route path="/reglement" element={<Reglement />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<Mentions />} />
                <Route path="/rgpd" element={<Rgpd />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <RegisterWidget/>
        </div>
    );
}

export default App;

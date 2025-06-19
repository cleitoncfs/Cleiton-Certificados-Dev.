import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import { certificatesData } from "./components/data/certificates.js";
import "./assets/styles/global.css";

function App() {
    const [filtro, setFiltro] = useState("Todos");

    // Filtrar certificados por seção
    const certificadosFiltradosPorSecao = certificatesData
        .map((section) => {
            const filtrados = section.certificates.filter((cert) =>
                filtro === "Todos" ? true : cert.categoria === filtro
            );

            return filtrados.length > 0
                ? { ...section, certificates: filtrados }
                : null;
        })
        .filter(Boolean);

    return (
        <div id="container">
            <Header />
            <main>
                <FilterButtons onFilter={setFiltro} />
                {certificadosFiltradosPorSecao.map((section, index) => (
                    <Section
                        key={index}
                        title={section.title}
                        subtitle={section.subtitle}
                        certificates={section.certificates}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default App;

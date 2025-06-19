import "./Section.css";
import Certificate from "../Certificate/Certificate";

const Section = ({ title, subtitle, certificates }) => {
    return (
        <section>
            <h2>{title}</h2>
            {subtitle && <h4>{subtitle}</h4>}
            <div className="certificates-gallery">
                {certificates.map((cert, index) => (
                    <Certificate key={index} {...cert} />
                ))}
            </div>
        </section>
    );
};

export default Section;

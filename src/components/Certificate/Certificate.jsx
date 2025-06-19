import "./Certificate.css";

const Certificate = ({ title, image, link, buttonText, inProgress }) => {
    return (
        <div className="certificate">
            <h3>{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={`Certificado de ${title}`} />
                {inProgress ? (
                    <p>Em curso...</p>
                ) : (
                    <button>{buttonText}</button>
                )}
            </a>
        </div>
    );
};

export default Certificate;

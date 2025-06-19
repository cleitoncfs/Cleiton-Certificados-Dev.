import "./Footer.css";
import { FaGithub, FaArrowUp, FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-copyright">
                © {new Date().getFullYear()} Certificados “Formação Dev” – Todos
                os direitos reservados.
            </p>

            <p className="footer-credits">
                Desenvolvido por{" "}
                <a
                    href="https://portfolio-cleiton.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                >
                    Cleiton Santos <FaExternalLinkAlt className="link-icon" />
                </a>
            </p>

            <div className="footer-actions">
                <a href="#container" className="footer-link">
                    <FaArrowUp className="link-icon" /> Voltar ao topo
                </a>
                <a
                    href="https://github.com/cleitoncfs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="Perfil no GitHub"
                >
                    <FaGithub className="link-icon" /> GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;

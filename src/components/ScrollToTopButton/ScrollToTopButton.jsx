import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`tooltipContainer ${isVisible ? "show" : ""}`}>
            <button
                className="scrollTop"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Voltar ao topo"
            >
                <FaArrowUp />
            </button>
            <span className="tooltipText">Topo</span>
        </div>
    );
};

export default ScrollToTopButton;

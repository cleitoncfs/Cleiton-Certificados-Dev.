import "./FilterButtons.css";
import { useState } from "react";

const categorias = ["Todos", "Front-end", "Back-end", "Mobile", "Full-stack"];

const FilterButtons = ({ onFilter }) => {
    const [active, setActive] = useState("Todos");

    const handleClick = (categoria) => {
        setActive(categoria);
        onFilter(categoria);
    };

    return (
        <div className="filter-buttons">
            {categorias.map((cat) => (
                <button
                    key={cat}
                    className={`filter-btn ${active === cat ? "active" : ""}`}
                    onClick={() => handleClick(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;

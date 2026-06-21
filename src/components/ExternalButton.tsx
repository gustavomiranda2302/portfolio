import React from "react";
import "../styles/externalButton.css"
interface ExternalButtonProps {
    href: string;
    svgUrl: string;
    label: string;

}

export const ExternalButton: React.FC<ExternalButtonProps> = ({ href, svgUrl, label }) => {
    return (
        <a href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="external-button"
        >
            <img src={svgUrl} alt="icone do ${label}" />
            {label}
        </a>
    )
}
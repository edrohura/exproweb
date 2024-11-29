import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    // Mostrar el botón cuando se haya hecho scroll hacia abajo
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300); // Mostrar si se baja más de 300px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-2 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 z-50"
                aria-label="Ir al top"
            >
                ↑
            </button>
        )
    );
};

export default ScrollToTopButton;

import React from "react";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/51990302262?text=¡Hola!%20Quisiera%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 z-50"
            aria-label="WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="48"
                height="48"
            >
                <path d="M12 0C5.371 0 0 5.372 0 12c0 2.089.535 4.152 1.553 5.957L0 24l6.309-1.615C8.195 23.465 10.081 24 12 24c6.629 0 12-5.372 12-12S18.629 0 12 0zm0 22.5c-1.746 0-3.484-.453-5.004-1.305l-.355-.196-3.742.957.964-3.658-.217-.375A10.41 10.41 0 011.5 12C1.5 6.211 6.208 1.5 12 1.5S22.5 6.211 22.5 12 17.792 22.5 12 22.5zm6.044-6.537c-.33-.165-1.952-.964-2.254-1.074-.3-.11-.518-.165-.736.165-.217.33-.849 1.074-1.042 1.292-.192.217-.384.243-.714.078-.33-.165-1.395-.513-2.658-1.635-.981-.874-1.642-1.957-1.837-2.287-.192-.33-.02-.51.145-.675.149-.148.33-.385.495-.578.165-.192.218-.33.33-.55.11-.217.055-.412-.027-.578-.082-.165-.736-1.782-1.01-2.446-.265-.637-.535-.548-.736-.548H7.982c-.2 0-.528.077-.802.385-.273.308-1.05 1.024-1.05 2.5 0 1.476 1.075 2.902 1.225 3.102.149.192 2.115 3.243 5.124 4.548.717.309 1.277.495 1.713.633.72.23 1.374.198 1.893.12.577-.085 1.952-.796 2.23-1.562.275-.767.275-1.426.192-1.562-.082-.137-.3-.22-.63-.385z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
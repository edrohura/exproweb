import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const careerData = [
    {
        id: 1,
        title: "Gastronomía",
        description: "Aprende a dominar el arte culinario y gestiona servicios de alta cocina.",
        duration: "3 años",
        modalidad: "Presencial",
        icon: "🍳",
        link: "/carreras/gastronomia",
    },
    {
        id: 2,
        title: "Administración de Servicios de Hotelería",
        description: "Prepárate para liderar y gestionar servicios en la industria hotelera.",
        duration: "3 años",
        modalidad: "Presencial / Virtual",
        icon: "🏨",
        link: "/carreras/hoteleria",
    },
    {
        id: 3,
        title: "Administración de Empresas y Negocios Internacionales",
        description: "Desarrolla habilidades para gestionar negocios globales y locales.",
        duration: "3 años",
        modalidad: "Presencial / Virtual",
        icon: "🌍",
        link: "/carreras/administracion",
    },
    {
        id: 4,
        title: "Contabilidad y Finanzas",
        description: "Especialízate en la planificación financiera y auditoría empresarial.",
        duration: "3 años",
        modalidad: "Presencial / Virtual",
        icon: "💼",
        link: "/carreras/contabilidad",
    },
];

const admissionDates = [
    "15 de enero 2024",
    "01 de marzo 2024",
    "20 de mayo 2024",
    "10 de agosto 2024",
];

function Careers() {
    const [selectedCareer, setSelectedCareer] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 py-8"
        >
            {/* Imagen superior */}
            <div className="relative mb-10 w-full h-auto">
                <img
                    src="/assets/images/estudiante.jpg"
                    alt="Estudiante"
                    className="w-full h-96 object-cover md:h-[400px] lg:h-[500px] rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white text-center px-4">
                        ¡Descubre Tu Futuro Profesional!
                    </h1>
                </div>
            </div>

            {/* Título */}
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-bold text-expro-blue mb-8 text-center"
            >
                Nuestras Carreras Profesionales
            </motion.h2>

            {/* Carreras */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            delayChildren: 0.3,
                            staggerChildren: 0.2,
                        },
                    },
                }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {careerData.map((career) => (
                    <motion.div
                        key={career.id}
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: { type: "spring", stiffness: 100 },
                            },
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCareer(career)}
                        className="bg-white shadow-lg rounded-lg p-6 cursor-pointer transition-all"
                    >
                        <div className="text-5xl mb-4 text-center">{career.icon}</div>
                        <h3 className="text-2xl font-semibold text-expro-blue mb-2 text-center">
                            {career.title}
                        </h3>
                        <p className="text-gray-600 text-center">{career.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Fechas de admisión */}
            <section className="mt-12">
                <h3 className="text-3xl font-bold text-expro-blue text-center mb-6">
                    Próximas Fechas de Admisión
                </h3>
                <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {admissionDates.map((date, index) => (
                        <li
                            key={index}
                            className="bg-expro-blue text-white rounded-lg py-4 text-center text-lg font-semibold"
                        >
                            {date}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedCareer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="bg-white rounded-lg p-8 max-w-md w-full"
                        >
                            <div className="text-6xl text-center mb-4">{selectedCareer.icon}</div>
                            <h2 className="text-3xl font-bold text-expro-blue mb-4 text-center">
                                {selectedCareer.title}
                            </h2>
                            <p className="text-gray-700 mb-4 text-center">
                                {selectedCareer.description}
                            </p>
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">Duración:</span>
                                <span>{selectedCareer.duration}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="font-semibold">Modalidad:</span>
                                <span>{selectedCareer.modalidad}</span>
                            </div>
                            <div className="flex justify-between space-x-2">
                                <motion.button
                                    onClick={() => setSelectedCareer(null)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400"
                                >
                                    Cerrar
                                </motion.button>
                                <motion.a
                                    href={selectedCareer.link}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 bg-expro-blue text-white py-2 rounded-lg hover:bg-opacity-90 text-center"
                                >
                                    Ver detalles
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Careers;

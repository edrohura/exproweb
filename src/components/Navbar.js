import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Agrega AnimatePresence
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 120
            }
        }
    };

    /*const carreras = [
        { name: 'Administración', path: '/carreras/administracion' },
        { name: 'Hotelería', path: '/carreras/hoteleria' },
        { name: 'Gastronomía', path: '/carreras/gastronomia' },
        { name: 'Contabilidad', path: '/carreras/contabilidad' },
    ];*/


    const linkVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-expro-blue text-white p-4 sticky top-0 z-50"
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo y Nombre */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex items-center"
                >
                    <Link to="/" className="flex items-center">
                        <img src="/assets/images/logoexprorbg.png" alt="Logo EXPRO" className="h-10 w-auto mr-3" />
                        <span className="text-2xl font-bold">EXPRO</span>
                    </Link>
                </motion.div>

                {/* Menú para escritorio */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="hidden md:flex space-x-6"
                >
                    {['Inicio', 'Carreras', 'Admisiones', 'Nosotros'].map((item, index) => {
                        const path = item === 'Inicio' ? '/' :
                            item === 'Carreras' ? '/carreras' :
                                item === 'Admisiones' ? '/admisiones' :
                                    '/nosotros';

                        return (
                            <motion.div
                                key={index}
                                variants={linkVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={path}
                                    className="hover:text-expro-gold transition-colors"
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Botón de Menú móvil */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                >
                    {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </motion.button>

                {/* Menú móvil */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="md:hidden absolute top-full left-0 w-full bg-expro-blue"
                        >
                            {['Inicio', 'Carreras', 'Admisiones', 'Nosotros'].map((item, index) => {
                                const path = item === 'Inicio' ? '/' :
                                    item === 'Carreras' ? '/carreras' :
                                        item === 'Admisiones' ? '/admisiones' :
                                            '/nosotros';

                                return (
                                    <motion.div
                                        key={index}
                                        variants={linkVariants}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Link
                                            to={path}
                                            className="block p-4 hover:bg-blue-700 transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Navbar;

import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid md:grid-cols-3 gap-8">
                {/* Columna 1 */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">EXPRO</h4>
                    <p className="text-sm">
                        Transformamos el futuro con educación de calidad.
                        Nuestro compromiso es con el desarrollo integral de nuestros estudiantes.
                    </p>
                </div>

                {/* Columna 2 */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                    <ul className="space-y-2">
                        <li><a href="/carreras" className="hover:underline">Carreras</a></li>
                        <li><a href="/admisiones" className="hover:underline">Admisiones</a></li>
                        <li><a href="/nosotros" className="hover:underline">Nosotros</a></li>
                        <li><a href="/contacto" className="hover:underline">Contacto</a></li>
                    </ul>
                </div>

                {/* Columna 3 */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                    <ul className="space-y-2">
                        <li><span>📍 Av. Javier Prado 330, San Isidro</span></li>
                        <li><span>📞 (01) 219-5700/ (01) 219-5701</span></li>
                        <li><span>✉️ informes@expro.edu.pe</span></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
                © 2024 EXPRO. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;

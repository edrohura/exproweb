import React, { useState } from 'react';

function Admh() {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
    });
    const [errors, setErrors] = useState({});

    // Validar los datos del formulario
    const validateForm = (data) => {
        const validationErrors = {};
        if (!data.nombres.trim()) validationErrors.nombres = 'El nombre es requerido.';
        if (!data.apellidos.trim()) validationErrors.apellidos = 'El apellido es requerido.';
        if (!data.email.trim()) validationErrors.email = 'El correo es requerido.';
        else if (!/\S+@\S+\.\S+/.test(data.email)) validationErrors.email = 'Correo no válido.';
        if (!data.telefono.trim()) validationErrors.telefono = 'El teléfono es requerido.';
        else if (!/^\d+$/.test(data.telefono)) validationErrors.telefono = 'El teléfono debe contener solo números.';
        return validationErrors;
    };

    // Manejador de envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length === 0) {
            // Generar mensaje para WhatsApp
            const message = `Hola, me gustaría recibir información sobre la carrera de Administración de Servicios de Hotelería.
- Nombres: ${formData.nombres}
- Apellidos: ${formData.apellidos}
- Email: ${formData.email}
- Teléfono: ${formData.telefono}`;
            const whatsappLink = `https://wa.me/51990302262?text=${encodeURIComponent(message)}`;

            // Abrir WhatsApp
            window.open(whatsappLink, '_blank');
        } else {
            setErrors(validationErrors);
        }
    };

    // Manejador para actualizar los datos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <img
                    src='../assets/images/administracion_hotelera_portada.jpg'
                    alt="Portada de Administración de Servicios de Hotelería"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
            {/* Título principal */}
            <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                Administración de Servicios de Hotelería
            </h1>

            {/* Menú interno de navegación (tabla 1x5) */}
            <nav className="bg-gray-100 rounded-md p-4 mb-8 shadow-md">
                <div className="grid grid-cols-5 gap-4 text-center">
                    <a
                        href="#requisitos"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Requisitos
                    </a>
                    <a
                        href="#curricula"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Currícula
                    </a>
                    <a
                        href="#sede"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Sedes
                    </a>
                    <a
                        href="#que-obtienes"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Qué obtienes
                    </a>
                    <a
                        href="#solicita-informacion"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Solicita Información
                    </a>
                </div>
            </nav>

            {/* Sección: Requisitos */}
            <section id="requisitos" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Requisitos</h2>
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed">
                    <li>Documento Nacional de Identidad (DNI).</li>
                    <li>Certificado de estudios secundarios completos.</li>
                    <li>Ficha de inscripción debidamente llenada.</li>
                    <li>Pago por derecho de matrícula.</li>
                </ol>
            </section>

            {/* Sección: Currícula */}
            <section id="curricula" class="bg-cover bg-center py-16" >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Malla Curricular</h2>
                <div class="container mx-auto px-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">1</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo I</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Lenguaje  I.</li>
                                <li>Economía Aplicada al Turismo y Hotelería.</li>
                                <li>Arte y Cultura Universal.</li>
                                <li>Matemática I.</li>
                                <li>Inglés Técnico I.</li>
                                <li>Administración General.</li>
                                <li>Legislación Turística.</li>
                                <li>Teoría y Técnica del Turismo.</li>
                                <li>Computación Aplicada (Excel).</li>
                                <li>Gestión de Alojamiento (Recepción y Reservas).</li>
                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">2</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo II</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Comunicación Corporativa</li>
                                <li>Análisis de la Realidad Peruana.</li>
                                <li>Matemáticas Financiera.</li>
                                <li>Métodos de Estudio y de Investigación Científica.</li>
                                <li>Arte y Cultura  Peruana.</li>
                                <li>Inglés  Técnico II.</li>
                                <li>Geografía Turística del Perú y del Mundo.</li>
                                <li>Administración de Empresas Hoteleras y Turísticas.</li>
                                <li>Técnicas Básicas de Cocina.</li>

                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">3</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo III</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Psicología Social y Motivacional</li>
                                <li>Zonas y Circuitos Turísticos Nacionales e Internacionales.</li>
                                <li>Legislación Laboral.</li>
                                <li>Contabilidad General.</li>
                                <li>Proyectos de Inversión Hotelera y Turistica.</li>
                                <li>Seguridad industrial, Mantenimiento de Equipos y Primeros Auxilios.</li>
                                <li>Inglés Técnico III.</li>
                                <li>Gestión de Calidad y Servicios al Cliente.</li>
                                <li>Francés  Técnico I.</li>
                                <li>Taller de Folklore I.</li>
                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">4</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo IV</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Relaciones Públicas e Imagen Institucional.</li>
                                <li>Contabilidad Hotelera.</li>
                                <li>Administración de Pisos House Keeping.</li>
                                <li>Inglés Téncio IV.</li>
                                <li>Estadística aplicada al Turismo.</li>
                                <li>Gestión de Producción en AA.VV.</li>
                                <li>Técnicas de Bar y Comedor, Enología.</li>
                                <li>Francés Técnico II.</li>
                                <li>Técnicas de servicio de Sala comedor.</li>
                                <li>Historia y Geografía Gastronómica.</li>
                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">5</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo V</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Publicidad y Diseño Publicitario.</li>
                                <li>Dirección de Empresas Hoteleras.</li>
                                <li>Control de Costos y  Presupuestos Hoteleros.</li>
                                <li>Inglés Técnico V.</li>
                                <li>Gestión de AA & BB.</li>
                                <li>Ecoturismo y gestión de Conservación del Medio Ambiente.</li>
                                <li>Francés  Técnico III.</li>
                                <li>Pastelería.</li>
                                <li>Sistemas Informáticos turísticos y hoteleros.</li>
                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">6</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo VI</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Relaciones Industriales.</li>
                                <li>Cruceros y Casinos.</li>
                                <li>Marketing Estratégico.</li>
                                <li>Etiqueta y Protocolo.</li>
                                <li>Patrimonio Turístico Nacional y Mundial.</li>
                                <li>Inglés Técnico VI.</li>
                                <li>Logística Hotelera.</li>
                                <li>Técnicas de Guiado y campismo.</li>
                                <li>Organización de Congresos, Eventos y Catering.</li>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección: Sedes */}
            <section id="sede" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sede</h2>
                <div className="w-full h-80 bg-gray-300">
                    {/* Aquí deberías incluir el componente del mapa con ubicaciones */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26245.24455986469!2d-77.0381166781566!3d-12.086189679372364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8675b3f4031%3A0x207d274565b30ead!2sEXPRO%20Instituto%20de%20Educaci%C3%B3n%20Superior%20Tecnol%C3%B3gico%20Privado!5e0!3m2!1sen!2spe!4v1732774737825!5m2!1sen!2spe"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        title="Mapa de Sedes"
                        className="rounded-md shadow-md"
                    ></iframe>
                </div>
            </section>

            {/* Sección: Qué obtienes */}
            <section id="que-obtienes" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Qué obtienes</h2>
                <p className="text-gray-700 leading-relaxed">
                    Al culminar esta carrera, obtendrás el Título Profesional a Nombre de la Nación del Ministerio de Educación: Profesional Técnico en Administración de Servicios de Hostelería.
                </p>
            </section>

            {/* Sección: Solicita Información */}
            <section id="solicita-informacion" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Solicita Información</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleChange}
                        placeholder="Nombres"
                        className="w-full p-3 border rounded-md shadow-sm"
                    />
                    {errors.nombres && <p className="text-red-500 text-sm">{errors.nombres}</p>}

                    <input
                        type="text"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        placeholder="Apellidos"
                        className="w-full p-3 border rounded-md shadow-sm"
                    />
                    {errors.apellidos && <p className="text-red-500 text-sm">{errors.apellidos}</p>}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Correo Electrónico"
                        className="w-full p-3 border rounded-md shadow-sm"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Número de Teléfono"
                        className="w-full p-3 border rounded-md shadow-sm"
                    />
                    {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
                    >
                        Enviar por WhatsApp
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Admh;

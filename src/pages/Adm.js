import React, { useState } from 'react';


function Adm() {

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
            const message = `Hola, me gustaría recibir información sobre la carrera de Administración de Empresas y Negocios Internacionales.
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
            {/* Imagen de portada */}
            <div className="mb-6">
                <img
                    src='../assets/images/administracion_portada.jpg'
                    alt="Portada de Administración de Empresas y Negocios Internacionales"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Título principal */}
            <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                Administración de Empresas y Negocios Internacionales
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
                                <li>Matemática Básica.</li>
                                <li>Comprensión y Redacción I.</li>
                                <li>Tecnología de la Información I.</li>
                                <li>Fundamentos de la  Administración.</li>
                                <li>Gestión Comercial.</li>
                                <li>Fundamentos de Logística.</li>
                                <li>Taller de Gestión Comercial y Logística.</li>
                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">2</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo II</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Estadística General.</li>
                                <li>Comprensión y Redacción II.</li>
                                <li>Tecnología de la Información II.</li>
                                <li>Logística Laboral.</li>
                                <li>Fundamentos de Marketing.</li>
                                <li>Diseños de Estructuras y procesos.</li>
                                <li>Desarrollo Organizacional.</li>
                                <li>Gestión de Logística Internacional I.</li>

                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">3</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo III</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Estadística Aplicada a los Negocios.</li>
                                <li>Matemática Financiera.</li>
                                <li>Ingles I .</li>
                                <li>Legislación Comercial y Tributaria.</li>
                                <li>Gestión de Logística Internacional II.</li>
                                <li>Gestión de Capital Humano.</li>
                                <li>Dirección de Equipos de Trabajo.</li>
                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">4</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo IV</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Ingles II.</li>
                                <li>Marketing de Retail  y Servicios.</li>
                                <li>Control de Costos y Presupuestos.</li>
                                <li>Administración de la Producción y Operaciones.</li>
                                <li>Gestión de Ventas y Política de Precios.</li>
                                <li>Aduanas.</li>
                                <li>Oportunidad de Negocios internacionales.</li>
                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">5</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo V</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Ecología y Responsabilidad Social.</li>
                                <li>Análisis de Estados Financieros.</li>
                                <li>Contabilidad de Costos.</li>
                                <li>Planeamiento Estratégico de Negocios.</li>
                                <li>Gestión de la Calidad.</li>
                                <li>Negociación y Resolución de conflictos.</li>
                                <li>Análisis de Mercados internacionales.</li>
                            </p>
                        </div>


                        <div class="bg-white shadow-lg p-6 rounded-lg">
                            <span class="text-blue-500 text-xl font-bold">6</span>
                            <h4 class="text-lg font-semibold mt-2">Ciclo VI</h4>
                            <p class="mt-2 text-gray-600">
                                <li>Contabilidad Comercial.</li>
                                <li>Formulación y Evaluación de Proyectos.</li>
                                <li>Tópicos de E Comercial BI y BSC.</li>
                                <li>Administración Financiera.</li>
                                <li>Plan de Marketing y Comercio Internacional.</li>
                                <li>Sistema de Gestión Empresarial ERP.</li>
                                <li>Gestión de Empresas Emergentes.</li>
                                <li>Taller. Diseño de Nuevos Negocios.</li>
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
                    Al culminar esta carrera, obtendrás el Título Profesional a Nombre de la Nación del Ministerio de Educación: Profesional Técnico en Administración de Empresas y Negocios Internacionales.
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

export default Adm;

import React, { useState } from 'react';

function Admissions() {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
        carrera: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting] = useState(false);

    const validateForm = (values) => {
        const newErrors = {};

        if (!values.nombres.trim()) {
            newErrors.nombres = 'Los nombres son obligatorios';
        } else if (values.nombres.trim().length < 2) {
            newErrors.nombres = 'Nombres deben tener al menos 2 caracteres';
        }

        if (!values.apellidos.trim()) {
            newErrors.apellidos = 'Los apellidos son obligatorios';
        } else if (values.apellidos.trim().length < 2) {
            newErrors.apellidos = 'Apellidos deben tener al menos 2 caracteres';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.email.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!emailRegex.test(values.email)) {
            newErrors.email = 'Correo electrónico inválido';
        }

        const phoneRegex = /^[0-9]{9,10}$/;
        if (!values.telefono.trim()) {
            newErrors.telefono = 'El teléfono es obligatorio';
        } else if (!phoneRegex.test(values.telefono)) {
            newErrors.telefono = 'Número de teléfono inválido (9-10 dígitos)';
        }

        if (!values.carrera) {
            newErrors.carrera = 'Debe seleccionar una carrera';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length === 0) {
            // Generar mensaje para WhatsApp
            const message = `Hola, me gustaría recibir información sobre la carrera seleccionada.
            - Nombres: ${formData.nombres}
            - Apellidos: ${formData.apellidos}
            - Email: ${formData.email}
            - Teléfono: ${formData.telefono}
            - Carrera: ${formData.carrera}`;

            const whatsappLink = `https://wa.me/51990302262?text=${encodeURIComponent(message)}`;

            // Abrir WhatsApp
            window.open(whatsappLink, '_blank');
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Sección de imagen */}
                <div className="md:w-1/2 w-full">
                    <img
                        src="/assets/images/estudianteb.jpg"
                        alt="Estudiante"
                        className="rounded-lg shadow-lg w-full object-cover h-full"
                    />
                </div>

                {/* Sección del formulario */}
                <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-expro-blue mb-6 text-center">
                        Déjanos tus datos
                    </h2>
                    <p className="text-gray-700 mb-4 text-center">
                        Completa el formulario y recibe información sobre nuestras carreras.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="nombres"
                                placeholder="Nombres"
                                value={formData.nombres}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-lg focus:outline-none ${errors.nombres
                                    ? 'border-red-500 focus:ring-2 focus:ring-red-300'
                                    : 'focus:ring-2 focus:ring-expro-blue'}`}
                            />
                            {errors.nombres && (
                                <p className="text-red-500 text-sm mt-1">{errors.nombres}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                name="apellidos"
                                placeholder="Apellidos"
                                value={formData.apellidos}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-lg focus:outline-none ${errors.apellidos
                                    ? 'border-red-500 focus:ring-2 focus:ring-red-300'
                                    : 'focus:ring-2 focus:ring-expro-blue'}`}
                            />
                            {errors.apellidos && (
                                <p className="text-red-500 text-sm mt-1">{errors.apellidos}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo Electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-lg focus:outline-none ${errors.email
                                    ? 'border-red-500 focus:ring-2 focus:ring-red-300'
                                    : 'focus:ring-2 focus:ring-expro-blue'}`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="tel"
                                name="telefono"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-lg focus:outline-none ${errors.telefono
                                    ? 'border-red-500 focus:ring-2 focus:ring-red-300'
                                    : 'focus:ring-2 focus:ring-expro-blue'}`}
                            />
                            {errors.telefono && (
                                <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                            )}
                        </div>

                        <div>
                            <select
                                name="carrera"
                                value={formData.carrera}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-lg focus:outline-none ${errors.carrera
                                    ? 'border-red-500 focus:ring-2 focus:ring-red-300'
                                    : 'focus:ring-2 focus:ring-expro-blue'}`}
                            >
                                <option value="">Selecciona una carrera</option>
                                <option value="Gastronomia">Gastronomía</option>
                                <option value="Administracion_h">
                                    Administración de Servicios de Hotelería
                                </option>
                                <option value="Administracion">
                                    Administración de Empresas y Negocios Internacionales
                                </option>
                                <option value="Contabilidad">Contabilidad y Finanzas</option>
                            </select>
                            {errors.carrera && (
                                <p className="text-red-500 text-sm mt-1">{errors.carrera}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 rounded-lg text-white transition-all duration-300 ${isSubmitting
                                ? 'bg-gray-500 cursor-not-allowed'
                                : 'bg-expro-blue hover:bg-opacity-90'}`}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admissions;

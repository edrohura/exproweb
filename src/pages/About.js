import React from 'react';

function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-4xl font-bold text-expro-blue mb-6">
                        Nuestra Historia
                    </h1>
                    <p className="text-gray-700 mb-4">
                        EXPRO nació con la visión de transformar vidas a través de la educación
                        de calidad. Desde nuestra fundación, nos hemos comprometido a formar
                        profesionales competentes y éticos.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Nuestra institución se distingue por un enfoque práctico, docentes
                        altamente capacitados y una constante actualización de nuestros planes
                        de estudio.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-expro-blue">+20</h3>
                            <p className="text-gray-600">Años de Experiencia</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-expro-blue">+5000</h3>
                            <p className="text-gray-600">Estudiantes</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-expro-blue">+30</h3>
                            <p className="text-gray-600">Programas</p>
                        </div>
                    </div>
                </div>

                <div className="bg-expro-blue p-8 rounded-lg text-white">
                    <h2 className="text-2xl font-bold mb-4">Misión</h2>
                    <p className="mb-6">
                        Formar profesionales altamente competentes, con sólidos valores éticos,
                        capaces de contribuir significativamente al desarrollo de la sociedad.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Visión</h2>
                    <p>
                        Ser una institución líder en educación superior, reconocida por la
                        excelencia académica, la innovación y el compromiso con el desarrollo
                        integral de nuestros estudiantes.
                    </p>
                </div>
            </div>

            <section className="mt-16">
                <h2 className="text-3xl font-bold text-expro-blue text-center mb-8">
                    Nuestro Equipo Directivo
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: 'Juan Perez', role: 'Coordinador Académico', color: 'bg-expro-blue' },
                        { name: 'Antonio López', role: 'Director Académico', color: 'bg-expro-gold' },
                        { name: 'Juan Perez', role: 'Promotor Educativo', color: 'bg-expro-blue' }
                    ].map((person, index) => (
                        <div
                            key={index}
                            className={`${person.color} text-white text-center p-6 rounded-lg`}
                        >
                            <div className="w-32 h-32 mx-auto rounded-full bg-white mb-4 flex items-center justify-center text-4xl">
                                {person.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-semibold">{person.name}</h3>
                            <p>{person.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;
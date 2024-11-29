import React from 'react';

const CareerPage = ({ title, description, image, courses, duration, requirements }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Sección de imagen */}
                <div className="md:w-1/2 w-full">
                    <img
                        src={image}
                        alt={title}
                        className="rounded-lg shadow-lg w-full object-cover h-full"
                    />
                </div>

                {/* Sección de contenido */}
                <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-expro-blue mb-6">{title}</h1>
                    <p className="text-gray-700 mb-6">{description}</p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cursos Principales:</h2>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        {courses.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Duración:</h2>
                    <p className="text-gray-700 mb-4">{duration}</p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Requisitos:</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CareerPage;

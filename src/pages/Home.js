import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mx-auto p-6">
            {/* Swiper de Carreras */}
            <section className="mb-10 relative">
                <h2 className="text-4xl font-bold text-expro-blue mb-6">Descubre Nuestras Carreras</h2>
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    autoplay={{ delay: 5000 }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    pagination={false}
                >
                    {[
                        { title: 'Gastronomía', image: '/assets/images/careers/gastronomia.jpg', link: '/carreras/gastronomia' },
                        { title: 'Administración de Servicios de Hotelería', image: '/assets/images/careers/administracion_hotelera.jpg', link: '/carreras/hoteleria' },
                        { title: 'Administración de Empresas y Negocios Internacionales', image: '/assets/images/careers/administracion.jpg', link: '/carreras/administracion' },
                        { title: 'Contabilidad y Finanzas', image: '/assets/images/careers/contabilidad.jpg', link: '/carreras/contabilidad' }
                    ].map((career, index) => (
                        <SwiperSlide key={index}>
                            <Link to={career.link}>
                                <div className="relative group">
                                    <img
                                        src={career.image}
                                        alt={career.title}
                                        className="w-full h-96 object-cover rounded-lg transition-all duration-500 group-hover:scale-105 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">{career.title}</span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Botones personalizados */}
                <button
                    aria-label="Navegar al elemento anterior"
                    className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md opacity-70 hover:opacity-100 transition-opacity hover:bg-gray-100"
                >
                    <svg
                        className="w-5 h-5 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                </button>
                <button
                    aria-label="Navegar al siguiente elemento"
                    className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md opacity-70 hover:opacity-100 transition-opacity hover:bg-gray-100"
                >
                    <svg
                        className="w-5 h-5 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L12.17 12z" />
                    </svg>
                </button>
            </section>

            {/* Swiper de Aliados */}
            <section>
                <h2 className="text-4xl font-bold text-expro-blue mb-6">Nuestros Aliados</h2>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000 }}
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 }
                    }}
                    pagination={false}
                >
                    {[
                        '/assets/images/ally/ally1.png',
                        '/assets/images/ally/ally2.png',
                        '/assets/images/ally/ally3.png',
                        '/assets/images/ally/ally4.png',
                        '/assets/images/ally/ally5.png',
                        '/assets/images/ally/ally6.png',
                        '/assets/images/ally/ally7.png',
                        '/assets/images/ally/ally8.png'
                    ].map((ally, index) => (
                        <SwiperSlide key={index}>
                            <div className="overflow-hidden">
                                <img
                                    src={ally}
                                    alt={`Aliado ${index + 1}`}
                                    className="w-full h-20 object-contain grayscale transition-all duration-300 group-hover:filter-none"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
}

export default Home;

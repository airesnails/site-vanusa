"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/testimonials/1.webp",
    alt: "Depoimento de aluna - Curso Nail Designer Express VIP",
  },
  {
    id: 2,
    image: "/testimonials/2.webp",
    alt: "Depoimento de aluna - Curso Refinamento de Técnica",
  },
  {
    id: 3,
    image: "/testimonials/3.webp",
    alt: "Depoimento de aluna - Curso Refinamento de Técnica",
  },
];

export default function TestimonialsLightbox() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function lightboxNext() {
    setLightboxIndex((prev) => (prev + 1) % testimonials.length);
  }

  function lightboxPrev() {
    setLightboxIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }

  return (
    <>
      {/* ===== MARQUEE CAROUSEL ===== */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-6">
          {/* Duplicar 2x para loop contínuo */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index % testimonials.length)}
              className="group relative w-64 shrink-0 overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:scale-[1.02] focus:outline-none sm:w-72 md:w-80"
              aria-label="Clique para ampliar"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/20">
                <div className="translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    Clique para ampliar
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ===== LIGHTBOX ===== */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          {/* Fechar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-3 text-3xl text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none"
            aria-label="Fechar"
          >
            ✕
          </button>

          {/* Anterior */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none sm:left-4 sm:p-4 sm:text-3xl"
            aria-label="Anterior"
          >
            ←
          </button>

          {/* Próximo */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none sm:right-4 sm:p-4 sm:text-3xl"
            aria-label="Próximo"
          >
            →
          </button>

          {/* Imagem */}
          <div
            className="relative max-h-[90vh] w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[9/16] w-full sm:aspect-auto sm:h-[85vh]">
              <Image
                src={testimonials[lightboxIndex].image}
                alt={testimonials[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-sm text-white/80">
              {lightboxIndex + 1} / {testimonials.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

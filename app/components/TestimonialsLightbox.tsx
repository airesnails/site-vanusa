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
];

export default function TestimonialsLightbox() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openLightbox(index: number) {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function nextImage() {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }

  function prevImage() {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                fill
                className="object-cover"
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-3 text-3xl text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Fechar"
          >
            ✕
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:left-4 sm:p-4 sm:text-3xl"
            aria-label="Anterior"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:right-4 sm:p-4 sm:text-3xl"
            aria-label="Próximo"
          >
            →
          </button>

          {/* Image Container */}
          <div
            className="relative max-h-[90vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[9/16] w-full sm:aspect-auto sm:h-[85vh]">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Counter */}
            <div className="mt-4 text-center text-sm text-white/80">
              {currentIndex + 1} / {testimonials.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

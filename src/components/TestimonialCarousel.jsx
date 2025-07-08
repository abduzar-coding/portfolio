// src/components/TestimonialCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Startup Founder",
    quote: "Abduzar brought our vision to life with clean, responsive UI. Super communicative and quick to iterate. Highly recommend!",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Daniel V.",
    role: "Product Manager",
    quote: "We needed a fast MVP — he nailed it in record time with top-tier front-end quality. Design, UX, and performance — 10/10.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Leila M.",
    role: "Freelance Designer",
    quote: "I collaborated with Abduzar on a client site — his code quality and eye for detail made the project smooth and visually stunning.",
    avatar: "https://i.pravatar.cc/100?img=58",
  },
  {
    name: "Omar S.",
    role: "Agency Lead",
    quote: "He delivered a landing page faster than our internal dev team. Code was clean, performance was top notch. Will rehire.",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Amina R.",
    role: "Marketing Consultant",
    quote: "Working with Abduzar was seamless — from communication to execution, everything was sharp and timely.",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    name: "David N.",
    role: "Tech Recruiter",
    quote: "Impressed by his portfolio, we gave him a chance — and he delivered above expectations. Great frontend instincts.",
    avatar: "https://i.pravatar.cc/100?img=14",
  },
];


export default function TestimonialCarousel() {
  return (
   <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // 👈 3 at a time on desktop
        }}
        className="max-w-7xl mx-auto"
    >
      {testimonials.map((t, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialCard {...t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

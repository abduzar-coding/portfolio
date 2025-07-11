import TestimonialCarousel from "../components/TestimonialCarousel";


export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 sm:px-8 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-muted dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Here’s what clients and collaborators say about working with me — real feedback from real results.
        </p>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

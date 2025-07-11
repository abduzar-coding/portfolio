import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <ProjectCard
          title="Portfolio Website"
          description="A sleek, responsive portfolio with animations and dark mode."
          tags={["React", "Tailwind", "Framer Motion"]}
          liveLink="https://abduzar.dev"
          codeLink="https://github.com/abduzar-coding/portfolio"
        />
        <ProjectCard
          title="Weather App"
          description="Modern weather app using OpenWeatherMap API and responsive design."
          tags={["React", "API", "Vite"]}
          liveLink="https://weather.abduzar.dev"
          codeLink="https://github.com/abduzar-coding/react-weather-app"
        />
        <ProjectCard
          title="E-commerce UI"
          description="Front-end e-commerce layout with product cards and filters."
          tags={["React", "UI Design"]}
          liveLink="https://shop.abduzar.dev"
          codeLink="https://github.com/abduzar-coding/e-commerce-ui"
        />
        <ProjectCard
          title="Task Tracker"
          description="To-do app with localStorage persistence and filter options."
          tags={["JavaScript", "React"]}
          liveLink="https://task.abduzar.dev"
          codeLink="https://github.com/abduzar-coding/task-tracker"
        />
        <ProjectCard
          title="Crypto Tracker"
          description="Live crypto dashboard with charts and real-time updates."
          tags={["React", "API", "Chart.js"]}
          liveLink="https://crypto.abduzar.dev"
          codeLink="https://github.com/abduzar-coding/crypto-tracker"
        />
        <ProjectCard
          title="Currency Converter"
          description="Currency rates updated via external API."
          tags={["JavaScript", "API"]}
          liveLink="https://converter.abduzar.dev"
          codeLink="https://github.com/abduzar-coding/currency-converter"
        />
      </div>
    </section>
  );
}

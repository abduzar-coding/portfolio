export default function Card({ title, description }) {
    return (
      <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6 transition-colors duration-300">
        <h3 className="text-xl font-bold text-dark dark:text-white">{title}</h3>
        <p className="text-muted dark:text-gray-300 mt-2">{description}</p>
      </div>
    );
  }
  
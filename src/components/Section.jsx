// src/components/Section.jsx
export default function Section({ onFilterChange }) {
  return (
    <section className="bg-light-gray-3 py-1 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-dark-gray mb-4">
          Queima de estoque🔥
        </h1>
        <p className="text-dark-gray-2 text-lg mb-6">
          Aproveite os maiores preços da coleção passada e fique no estilo.
        </p>
      </div>
      <img
        src="https://th.bing.com/th/id/OIP.RppLvApTqd-d718Cue3pRwHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        width="300" height="200"
        alt="imagem"
        className="rounded-lg shadow-md"
      />
    </section>
  );
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore the world at your own price</h1>
      <button className="mb-10 px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition">
        View Destinations
      </button>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl justify-center">
        <a href="/europe" className="flex-1 bg-white shadow-md rounded-xl p-6 text-xl font-semibold hover:shadow-lg transition border border-orange-300">
          Europe
        </a>
        <a href="/world" className="flex-1 bg-white shadow-md rounded-xl p-6 text-xl font-semibold hover:shadow-lg transition border border-orange-300">
          Rest of the World
        </a>
      </div>
    </main>
  );
}

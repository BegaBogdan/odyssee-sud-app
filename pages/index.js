export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5a2a00] to-[#c85000] text-white px-6 py-8">
      <nav className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold tracking-widest">ODYSÉE SUD</div>
        <div className="flex space-x-6 text-sm">
          <a href="#">Destinations</a>
          <a href="#">About</a>
          <a href="#">Last Minute Flights</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <main className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Explore the world at your own price</h1>
        <div className="grid gap-4 md:grid-cols-3 mt-8">
          <input type="text" placeholder="Where are you going?" className="p-4 rounded bg-white text-black" />
          <input type="text" placeholder="Depart – Return" className="p-4 rounded bg-white text-black" />
          <input type="text" placeholder="1 adult · 0 children · Economy" className="p-4 rounded bg-white text-black" />
        </div>
        <button className="mt-6 px-8 py-3 bg-[#333] hover:bg-[#444] text-white rounded">Search</button>
        <div className="mt-10 flex justify-center gap-6">
          <button className="px-6 py-3 bg-[#b6451a] text-white rounded font-semibold">EUROPE</button>
          <button className="px-6 py-3 bg-[#b6451a] text-white rounded font-semibold">REST OF THE WORLD</button>
        </div>
      </main>
    </div>
  );
}

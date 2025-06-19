export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5a2a00] to-[#c85000] text-white p-10">
      <nav className="flex justify-between items-center mb-10">
        <div className="text-xl font-semibold">ODYSÉE SUD</div>
        <div className="flex gap-6 text-sm">
          <a href="#">Destinations</a>
          <a href="#">About</a>
          <a href="#">Last Minute Flights</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <main className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore the world at your own pace</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
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

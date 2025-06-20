
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#612c11] to-[#e97432] text-white px-4 py-8 flex flex-col items-center justify-center">
      <nav className="w-full max-w-6xl flex justify-between items-center mb-8 text-lg font-semibold text-[#f5e0c9]">
        <div className="flex gap-10">
          <a href="#">Destinations</a>
          <a href="#">About</a>
        </div>
        <div className="text-2xl font-bold border border-white rounded-full px-4 py-2">ODYSÉE SUD</div>
        <div className="flex gap-10">
          <a href="#">Last Minute Flights</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <h1 className="text-5xl md:text-6xl text-center font-extrabold leading-tight mb-4">Explore the world at your own pace</h1>

      <div className="mt-6 w-full max-w-3xl bg-[#2b1c0f] p-6 rounded-lg shadow-md space-y-4">
        <input type="text" placeholder="Where are you going?" className="w-full p-3 rounded-md bg-[#f5e0c9] text-black placeholder:text-gray-600" />
        <div className="flex gap-4">
          <input type="text" placeholder="Depart – Return" className="flex-1 p-3 rounded-md bg-[#f5e0c9] text-black" />
          <input type="text" placeholder="1 adult · 0 children · Economy" className="flex-1 p-3 rounded-md bg-[#f5e0c9] text-black" />
        </div>
        <button className="w-full bg-[#60451a] text-white py-3 rounded-md hover:bg-[#7a5b2a] transition">Search</button>
      </div>

      <div className="flex gap-6 mt-10">
        <button className="bg-[#b14814] px-6 py-3 rounded-md font-bold text-lg">EUROPE</button>
        <button className="bg-[#b14814] px-6 py-3 rounded-md font-bold text-lg">REST OF THE WORLD</button>
      </div>
    </main>
  );
}

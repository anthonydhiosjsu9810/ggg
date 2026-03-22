export default function CitySelect({ onSelect }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div onClick={onSelect} className="glass p-10 text-center max-w-xs cursor-pointer hover:scale-105 transition-all">
        <div className="text-7xl mb-6">🇵🇱</div>
        <h2 className="text-5xl font-bold neon-text">Варшава</h2>
        <p className="text-xl mt-4 opacity-80">12 станцій • 140+ кВт</p>
      </div>
    </div>
  );
}
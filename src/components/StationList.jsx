export default function StationList({ stations, onSelect }) {
  return (
    <div className="p-4 space-y-4">
      {stations.map(s => (
        <div key={s.id} onClick={() => onSelect(s)} className="card bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer">
          {s.photo && <img src={s.photo} className="w-full h-40 object-cover" />}
          <div className="p-5">
            <div className="font-bold text-xl">{s.name}</div>
            <div className="text-sm opacity-70">{s.address}</div>
            <div className="flex justify-between mt-4">
              <div className="text-green-400 font-bold">{s.available} доступно</div>
              <div className="text-[#00d4ff] font-bold">{s.power}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
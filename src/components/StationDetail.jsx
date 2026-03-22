import { motion } from 'framer-motion';
export default function StationDetail({ station, onActivate, onBack }) {
  return (
    <div className="p-4">
      <button onClick={onBack} className="mb-4 text-[#00d4ff]">← Назад</button>
      <div className="blue-header p-6 rounded-3xl text-black">
        <div className="text-3xl font-bold">{station.name}</div>
        <div className="text-lg">{station.address}</div>
      </div>

      <div className="mt-6 space-y-6">
        <div className="text-center">
          <motion.button onClick={() => onActivate(station)} whileHover={{scale:1.05}} className="w-full py-6 bg-gradient-to-r from-[#00d4ff] to-[#7b00ff] text-black text-3xl font-bold rounded-3xl neon-blue">ЗАПУСТИТЬ ЗАРЯДКУ</motion.button>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6">
          <div className="text-xl font-bold mb-4">Коннекторы</div>
          <div className="space-y-4">
            {[{name:"Connector 1", power:"140 kW", status:"Available"}, {name:"Connector 2", power:"22 kW", status:"Out Of Order"}].map((c,i) => (
              <div key={i} className="flex justify-between items-center border-b border-zinc-700 pb-4">
                <div>
                  <div className="font-bold">{c.name}</div>
                  <div className="text-sm opacity-70">{c.power}</div>
                </div>
                <div className={`font-bold ${c.status === 'Available' ? 'text-green-400' : 'text-red-400'}`}>{c.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

const blueIcon = new L.Icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png', shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41] });

export default function StationMap({ stations, onSelect }) {
  useEffect(() => { L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/'; }, []);
  return (
    <MapContainer center={[52.23, 21.01]} zoom={12} className="h-[calc(100vh-120px)] w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stations.map(s => (
        <Marker key={s.id} position={[s.lat, s.lng]} icon={blueIcon} eventHandlers={{ click: () => onSelect(s) }}>
          <Popup>
            <div className="font-bold">{s.name}</div>
            <button onClick={() => onSelect(s)} className="text-[#00d4ff]">Открыть детали</button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
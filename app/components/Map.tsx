/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export default function Map() {
  const [MapComponent, setMapComponent] = useState<React.ComponentType | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Koordinat batas wilayah Desa Petir (contoh koordinat, perlu diganti dengan koordinat sebenarnya)
  const desaPetirBoundary: [number, number][] = [
    [-7.474459, 109.583146], // kiri atas
    [-7.474461, 109.583182],
    [-7.473946, 109.584004],
    [-7.473933, 109.584158],
    [-7.473947, 109.584245],
    [-7.473989, 109.584342],
    [-7.475047, 109.584933],
    [-7.475347, 109.585182],
    [-7.475695, 109.585725],
    [-7.475722, 109.586033],
    [-7.475509, 109.586841],
    [-7.475299, 109.587259],
    [-7.474858, 109.587812],
    [-7.474576, 109.587900],
    [-7.472898, 109.587128], // detail terakhir bentar
    [-7.470308, 109.600977], // kanan atas
    [-7.501235, 109.615135], // kanan bawah
    [-7.512947, 109.571540], // kiri bawah

  ]

  useEffect(() => {
    // Ensure this only runs on the client
    setIsClient(true)
    import("react-leaflet").then(
      ({ MapContainer, TileLayer, Marker, Popup, Polygon }) => {
        const DynamicMap = () => (
          <div className="container mx-auto px-4 py-16 flex flex-col items-center w-full h-[500px]">
            <MapContainer
              className="w-full h-full"
              center={[-7.4835000, 109.5904000]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Marker Balai Desa Petir */}
              <Marker position={[-7.4835000, 109.5904000]}>
                <Popup>
                  Balai Desa Petir
                </Popup>
              </Marker>

              {/* Polygon area Desa Petir */}
              <Polygon 
                positions={desaPetirBoundary} 
                pathOptions={{ 
                  color: 'blue', 
                  fillColor: 'lightblue', 
                  fillOpacity: 0.3 
                }} 
              />
            </MapContainer>
          </div>
        )
        setMapComponent(() => DynamicMap)
      }
    ).catch((error) => {
      console.error("Failed to load Leaflet", error)
    })
  }, [])

  // Only render on client
  if (!isClient) return null
  return MapComponent ? <MapComponent /> : null
}
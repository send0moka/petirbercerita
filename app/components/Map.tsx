/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Map() {
  const [MapComponent, setMapComponent] = useState<React.ComponentType | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [activeMap, setActiveMap] = useState<'leaflet' | 'google'>('leaflet')

  // Koordinat batas wilayah Desa Petir
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
    [-7.472893, 109.587127],
    [-7.472680, 109.587129],
    [-7.472624, 109.587172],
    [-7.472680, 109.587341],
    [-7.473329, 109.587765],
    [-7.473579, 109.588189],
    [-7.473589, 109.588444],
    [-7.473552, 109.588607],
    [-7.473310, 109.588978],
    [-7.473071, 109.589101],
    [-7.472395, 109.589061],
    [-7.472308, 109.589098],
    [-7.472249, 109.589189],
    [-7.472065, 109.589699],
    [-7.471970, 109.590174],
    [-7.471991, 109.590319],
    [-7.472068, 109.590429],
    [-7.472818, 109.590708],
    [-7.473039, 109.590885],
    [-7.473057, 109.591035],
    [-7.473031, 109.591311],
    [-7.472425, 109.591998],
    [-7.472276, 109.592094],
    [-7.471938, 109.592564],
    [-7.471842, 109.592861],
    [-7.471935, 109.593738],
    [-7.472673, 109.595397],
    [-7.472683, 109.595541],
    [-7.472652, 109.595710],
    [-7.472427, 109.595957],
    [-7.472247, 109.596026],
    [-7.472075, 109.595960],
    [-7.471219, 109.595110],
    [-7.471028, 109.595110],
    [-7.470755, 109.595237],
    [-7.470423, 109.595926],
    [-7.470392, 109.596442],
    [-7.470429, 109.598589],
    [-7.470522, 109.600252],
    [-7.470308, 109.600977], // kanan atas
    [-7.470485, 109.601263],
    [-7.470658, 109.601366],
    [-7.470969, 109.601422],
    [-7.471797, 109.601403],
    [-7.471909, 109.601438],
    [-7.472092, 109.601604],
    [-7.474466, 109.602593],
    [-7.474991, 109.602590],
    [-7.475910, 109.602718],
    [-7.476443, 109.603009],
    [-7.476620, 109.603569],
    [-7.476766, 109.603779],
    [-7.477241, 109.604111],
    [-7.477486, 109.604167],
    [-7.478796, 109.603372],
    [-7.480171, 109.603003],
    [-7.480813, 109.603047],
    [-7.482070, 109.603438],
    [-7.482793, 109.603460],
    [-7.483215, 109.603382],
    [-7.485757, 109.602364],
    [-7.486380, 109.601810],
    [-7.487671, 109.602414],
    [-7.487886, 109.602684],
    [-7.489219, 109.605179],
    [-7.491273, 109.607054],
    [-7.492101, 109.606367],
    [-7.492601, 109.605516],
    [-7.492768, 109.605447],
    [-7.493308, 109.605638],
    [-7.496700, 109.605961],
    [-7.496987, 109.605689],
    [-7.497371, 109.605640],
    [-7.497611, 109.605495],
    [-7.497633, 109.605704],
    [-7.498519, 109.607219],
    [-7.498641, 109.607796],
    [-7.499047, 109.608618],
    [-7.499030, 109.613892],
    [-7.498875, 109.615095],
    [-7.499384, 109.614987],
    [-7.500403, 109.615285],
    [-7.501235, 109.615135], // kanan bawah
    [-7.501358, 109.615013],
    [-7.501491, 109.614380],
    [-7.501853, 109.613561],
    [-7.502528, 109.612854],
    [-7.503480, 109.612954],
    [-7.503772, 109.613438],
    [-7.503861, 109.613461],
    [-7.504244, 109.613170],
    [-7.504816, 109.611920],
    [-7.504422, 109.611406],
    [-7.504436, 109.611056],
    [-7.504842, 109.609039],
    [-7.504739, 109.608067],
    [-7.504761, 109.606999],
    [-7.505377, 109.606113],
    [-7.505569, 109.604989],
    [-7.505794, 109.604304],
    [-7.505983, 109.602484],
    [-7.506149, 109.602123],
    [-7.506806, 109.601795],
    [-7.508386, 109.600543],
    [-7.508844, 109.599139],
    [-7.510139, 109.598019],
    [-7.510475, 109.597326],
    [-7.510420, 109.596831],
    [-7.510575, 109.596798],
    [-7.511309, 109.594658],
    [-7.511446, 109.594509],
    [-7.511708, 109.594438],
    [-7.512376, 109.594520],
    [-7.512638, 109.594319],
    [-7.513409, 109.592990],
    [-7.513697, 109.591192],
    [-7.513830, 109.591129],
    [-7.513461, 109.589670],
    [-7.513586, 109.588728],
    [-7.513697, 109.588508],
    [-7.514099, 109.588300],
    [-7.514988, 109.587868],
    [-7.515575, 109.587120],
    [-7.515612, 109.586952],
    [-7.515531, 109.586856],
    [-7.514822, 109.586655],
    [-7.514092, 109.585988],
    [-7.513664, 109.584998],
    [-7.513553, 109.583502],
    [-7.513261, 109.582448],
    [-7.513317, 109.581633],
    [-7.513486, 109.579969],
    [-7.513235, 109.577930],
    [-7.513324, 109.572923],
    [-7.513243, 109.572119],
    [-7.512947, 109.571540], // kiri bawah
    [-7.510837, 109.570280],
    [-7.509984, 109.571177],
    [-7.507678, 109.572595],
    [-7.506161, 109.572625],
    [-7.505475, 109.572372],
    [-7.503024, 109.570444],
    [-7.501301, 109.570504],
    [-7.498703, 109.572428],
    [-7.495242, 109.576619],
    [-7.491595, 109.578574],
    [-7.489971, 109.580354],
    [-7.489047, 109.581139],
    [-7.488110, 109.581545],
    [-7.487110, 109.581720],
    [-7.486002, 109.582353],
    [-7.485726, 109.582360],
    [-7.483851, 109.583384],
    [-7.483345, 109.583406],
    [-7.481814, 109.583097],
    [-7.479640, 109.583153],
    [-7.478337, 109.583324],
    [-7.477479, 109.583805],
    [-7.476558, 109.583805],
  ]

  useEffect(() => {
    // Ensure this only runs on the client
    setIsClient(true)
    import("react-leaflet").then(
      ({ MapContainer, TileLayer, Marker, Tooltip, Polygon }) => {
        const DynamicMap = () => (
          <div className="container mx-auto px-4 py-16 flex flex-col items-center w-full h-[40rem]">
            <MapContainer
              className="w-full h-full"
              center={[-7.4895, 109.5904]}
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
                <Tooltip direction="bottom" offset={[-15, 25]} opacity={1} permanent>
                  Balai Desa Petir
                </Tooltip>
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

              <Marker position={[-7.487088, 109.578535]}>
                <Tooltip direction="left" offset={[-25, 0]} opacity={1} permanent>
                  Desa Kaliajir
                </Tooltip>
              </Marker>

              <Marker position={[-7.469387, 109.591667]}>
                <Tooltip direction="right" offset={[-5, 0]} opacity={1} permanent>
                  Desa Pucungbedug
                </Tooltip>
              </Marker>

              <Marker position={[-7.486067, 109.603855]}>
                <Tooltip direction="right" offset={[-5, 0]} opacity={1} permanent>
                  Kecamatan Bawang
                </Tooltip>
              </Marker>

              <Marker position={[-7.506490, 109.570638]}>
                <Tooltip direction="left" offset={[-25, 0]} opacity={1} permanent>
                  Desa Kalitengah
                </Tooltip>
              </Marker>

              <Marker position={[-7.515851, 109.588577]}>
                <Tooltip direction="bottom" offset={[-14, 25]} opacity={1} permanent>
                  Kabupaten Kebumen
                </Tooltip>
              </Marker>
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

  return (
    <div>
      {/* Map Toggle Buttons */}
      <div className="flex justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeMap === 'leaflet' 
              ? 'bg-blue-600 text-white cursor-not-allowed' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
          onClick={() => setActiveMap('leaflet')}
          disabled={activeMap === 'leaflet'}
        >
          Leaflet Maps
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeMap === 'google' 
              ? 'bg-blue-600 text-white cursor-not-allowed' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
          onClick={() => setActiveMap('google')}
          disabled={activeMap === 'google'}
        >
          Google Maps
        </motion.button>
      </div>

      {/* Conditional Rendering of Maps */}
      {activeMap === 'leaflet' && MapComponent ? <MapComponent /> : (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center w-full h-[40rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31645.993729454323!2d109.57218336569323!3d-7.492917471883096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aad428cc8e74d%3A0x5027a76e3552500!2sPetir%2C%20Purwanegara%2C%20Banjarnegara%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1733286172186!5m2!1sen!2sid&layer=s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  )
}
import React from "react"
import { motion } from "framer-motion"

interface LogoElementProps {
  imageSrc: string
  header: string
  description: string
}

const LogoElement: React.FC<LogoElementProps> = ({ 
  imageSrc, 
  header, 
  description 
}) => (
  <motion.div 
    className="flex items-center space-x-4 bg-gray-800/50 border rounded-xl p-4"
    whileHover={{ 
      scale: 1.03,
      transition: { duration: 0.2 }
    }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }}
    viewport={{ once: true }}
  >
    <motion.div 
      className="flex-shrink-0"
      whileHover={{ rotate: 5 }}
    >
      <img 
        src={imageSrc} 
        alt={header} 
        className="w-16 h-16 object-contain"
      />
    </motion.div>
    <div>
      <h3 className="text-lg font-semibold text-white">{header}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </motion.div>
)

export default function LogoPhilosophy() {
  const logoElements = [
    {
      imageSrc: "/petir.png",
      header: "Petir",
      description: "Melambangkan energi, dinamika, dan kekuatan perubahan",
    },
    {
      imageSrc: "/daun.png",
      header: "Daun",
      description: "Melambangkan pertumbuhan, keberlanjutan, dan kehidupan",
    },
    {
      imageSrc: "/garis.png",
      header: "Garis Lingkar",
      description: "Melambangkan kesatuan, kebersamaan, dan keberlanjutan",
    },
    {
      imageSrc: "/warna_biru.png",
      header: "Warna Biru",
      description: "Melambangkan kepercayaan, stabilitas, dan kedalaman",
    },
    {
      imageSrc: "/warna_putih.png",
      header: "Warna Putih",
      description:
        "Melambangkan kesucian niat, keikhlasan, dan transparansi dalam pengabdian",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-8"
      >
        Logo Release
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.6 }
        }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <img
          src="/logo_shine.png"
          alt="Logo Shine"
          className="mx-auto max-w-xs md:max-w-md"
        />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              delayChildren: 0.2,
              staggerChildren: 0.1 
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
      >
        {logoElements.map((element, index) => (
          <LogoElement
            key={index}
            imageSrc={element.imageSrc}
            header={element.header}
            description={element.description}
          />
        ))}
      </motion.div>
    </div>
  )
}
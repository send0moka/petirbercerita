/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function HeroCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const targetDate = new Date("2025-01-08T00:00:00+07:00")

  const padZero = (num: number) => {
    return num.toString().padStart(2, "0")
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
        const days = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        )
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        setTimeLeft({ months, days, hours, minutes, seconds })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = () => {
    const { months, days, hours, minutes, seconds } = timeLeft
    const totalDaysLeft = months * 30 + days

    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
    }

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      },
    }

    const renderTimeElements = (
      elements: { value: number; label: string }[]
    ) => {
      return elements.map((item, index) => (
        <div key={item.label} className="flex items-center">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <span className="text-xl md:text-6xl font-bold">
              {padZero(item.value)}
            </span>
            <span className="text-sm">{item.label}</span>
          </motion.div>
          {index < elements.length - 1 && (
            <span className="text-xl md:text-5xl ml-2 md:ml-4 mr-1 md:mr-3 -mt-4 md:-mt-6 font-black opacity-70">:</span>
          )}
        </div>
      ))
    }

    if (totalDaysLeft > 30) {
      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex items-center justify-center space-x-2 text-center"
        >
          {renderTimeElements([
            { value: months, label: "Bulan" },
            { value: days, label: "Hari" },
            { value: hours, label: "Jam" },
            { value: minutes, label: "Menit" },
            { value: seconds, label: "Detik" },
          ])}
        </motion.div>
      )
    } else {
      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex items-center justify-center space-x-2 text-center"
        >
          {renderTimeElements([
            { value: days, label: "Hari" },
            { value: hours, label: "Jam" },
            { value: minutes, label: "Menit" },
            { value: seconds, label: "Detik" },
          ])}
        </motion.div>
      )
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-4xl font-bold mb-8"
      >
        KKN UNSOED DESA PETIR 2025
      </motion.h1>
      {formatTime()}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-sm text-muted-foreground mt-6"
      >
        Tanggal dimulai 8 Januari 2025
      </motion.p>
    </div>
  )
}

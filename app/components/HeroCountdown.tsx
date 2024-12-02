/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

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
    if (totalDaysLeft > 30) {
      return (
        <div className="flex space-x-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-6xl font-bold">
              {padZero(timeLeft.months)}
            </span>
            <span className="text-sm">Bulan</span>
          </div>
          <span className="text-xl md:text-6xl font-bold opacity-50">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-6xl font-bold">{padZero(timeLeft.days)}</span>
            <span className="text-sm">Hari</span>
          </div>
          <span className="text-xl md:text-6xl font-bold opacity-50">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-6xl font-bold">
              {padZero(timeLeft.hours)}
            </span>
            <span className="text-sm">Jam</span>
          </div>
          <span className="text-xl md:text-6xl font-bold opacity-50">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-6xl font-bold">
              {padZero(timeLeft.minutes)}
            </span>
            <span className="text-sm">Menit</span>
          </div>
          <span className="text-xl md:text-6xl font-bold opacity-50">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-6xl font-bold">
              {padZero(timeLeft.seconds)}
            </span>
            <span className="text-sm">Detik</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex space-x-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-6xl font-bold">{padZero(days)}</span>
            <span className="text-sm">Hari</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-6xl font-bold">{padZero(hours)}</span>
            <span className="text-sm">Jam</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-6xl font-bold">{padZero(minutes)}</span>
            <span className="text-sm">Menit</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-6xl font-bold">{padZero(seconds)}</span>
            <span className="text-sm">Detik</span>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-xl md:text-4xl font-bold mb-8">KKN UNSOED DESA PETIR 2025</h1>
      {formatTime()}
      <p className="text-sm text-muted-foreground mt-6">
        Tanggal dimulai 8 Januari 2025
      </p>
    </div>
  )
}

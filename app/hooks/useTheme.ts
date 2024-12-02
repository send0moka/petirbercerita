import { useState, useEffect } from "react"

export function useTheme() {
  const [theme] = useState<"dark">("dark")

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light")
    root.classList.add("dark")
  }, [])

  return { theme }
}

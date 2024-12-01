import type { MetaFunction } from "@remix-run/node"
import HeroCountdown from "~/components/HeroCountdown"

export const meta: MetaFunction = () => {
  return [
    { title: "KKN UNSOED DESA PETIR JAN-FEB 2025" },
    { name: "description", content: "Petir Bercerita" },
  ]
}

export default function Index() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[80%] h-[80%] 
          bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent 
          rounded-full 
          blur-3xl 
          -translate-y-1/2 translate-x-1/4
        "></div>
      </div>

      <HeroCountdown />
    </div>
  )
}

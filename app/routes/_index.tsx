/* eslint-disable jsx-a11y/iframe-has-title */
import type { MetaFunction } from "@remix-run/node"
import HeroCountdown from "~/components/HeroCountdown"
import LogoPhilosophy from "~/components/LogoPhilosophy"

export const meta: MetaFunction = () => {
  return [
    { title: "KKN UNSOED DESA PETIR JAN-FEB 2025" },
    { name: "description", content: "Petir Bercerita" },
  ]
}

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero Section with Countdown */}
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Vignette Overlay - Gradasi yang lebih kuat */}
        <div
          className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b 
          from-[#030712] via-transparent to-[#030712]"
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-10">
          <div
            className="absolute top-1/2 right-0 w-[80%] h-[50%] 
            bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent 
            rounded-full 
            blur-3xl 
            -translate-y-1/2 translate-x-1/4
          "
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20">
          <HeroCountdown />
        </div>
      </div>

      {/* Logo Philosophy Section */}
      <section className="bg-background">
        <LogoPhilosophy />
      </section>
    </div>
  )
}
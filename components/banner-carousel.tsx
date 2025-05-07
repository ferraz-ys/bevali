"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const banners = [
  {
    id: 1,
    title: "Crédito Consignado",
    description: "As melhores taxas do mercado para você realizar seus sonhos",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Solicitar agora",
    link: "/contato",
  },
  {
    id: 2,
    title: "Antecipação de FGTS",
    description: "Antecipe seu saque-aniversário e tenha dinheiro na conta em 24h",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Saiba mais",
    link: "/produtos/antecipacao-fgts",
  },
  {
    id: 3,
    title: "Atendimento Personalizado",
    description: "Consultores especializados para encontrar a melhor solução para você",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Fale conosco",
    link: "/contato",
  },
]

export function BannerCarousel() {
  const [current, setCurrent] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Make sure we're running on the client before setting up intervals
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % banners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isClient])

  const next = () => {
    setCurrent((current + 1) % banners.length)
  }

  const prev = () => {
    setCurrent((current - 1 + banners.length) % banners.length)
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === current ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-0 bg-secondary-900/60 z-10" />
          <Image src={banner.image || "/placeholder.svg"} alt={banner.title} fill className="object-cover" priority />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">{banner.title}</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">{banner.description}</p>
            <Button asChild size="lg" className="text-base bg-primary hover:bg-primary-600">
              <Link href={banner.link}>{banner.cta}</Link>
            </Button>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-primary/70 hover:bg-primary text-white p-2 rounded-full transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-primary/70 hover:bg-primary text-white p-2 rounded-full transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn("w-3 h-3 rounded-full transition-colors", index === current ? "bg-primary" : "bg-white/50")}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

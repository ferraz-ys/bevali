"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar o botão após 2 segundos para não distrair o usuário imediatamente
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551833617726", "_blank", "noopener,noreferrer")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        onClick={handleWhatsAppClick}
        className="rounded-full h-14 w-14 p-0 bg-transparent hover:bg-transparent shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={50} height={50} className="h-14 w-14" />
        <span className="sr-only">Fale conosco pelo WhatsApp</span>
      </Button>
    </div>
  )
}

export default WhatsAppButton

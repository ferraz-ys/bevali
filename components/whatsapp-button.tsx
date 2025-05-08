"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551833617726", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="rounded-full h-14 w-14 p-0 bg-transparent hover:bg-transparent shadow-lg"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={50} height={50} className="h-14 w-14" />
      </Button>
    </div>
  )
}

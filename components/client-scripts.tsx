"use client"
import dynamic from "next/dynamic"

// Carregamento dinâmico do TikTok Pixel para melhorar performance
const TikTokPixel = dynamic(() => import("@/components/tiktok-pixel").then((mod) => mod.TikTokPixel), {
  ssr: false,
  loading: () => null,
})

// Carregamento dinâmico do WhatsApp Button
const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button").then((mod) => mod.WhatsAppButton), {
  ssr: false,
  loading: () => null,
})

export function ClientScripts() {
  return (
    <>
      <TikTokPixel />
      <WhatsAppButton />
    </>
  )
}

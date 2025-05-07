import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-secondary-800 mb-6">Quem Somos</h2>
            <p className="text-muted-foreground mb-6">
              A Bevali Promotora é uma empresa especializada em soluções financeiras, oferecendo as melhores condições
              de crédito consignado, antecipação de FGTS e outros produtos financeiros para nossos clientes.
            </p>
            <p className="text-muted-foreground mb-6">
              Com anos de experiência no mercado financeiro, nossa equipe de consultores está preparada para oferecer um
              atendimento personalizado e encontrar a melhor solução para suas necessidades.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p>Atendimento personalizado e humanizado</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p>As melhores taxas do mercado</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p>Aprovação rápida e sem burocracia</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p>Parceria com os principais bancos do país</p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
              <Link href="/quem-somos">Conheça nossa história</Link>
            </Button>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Equipe Bevali Promotora"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

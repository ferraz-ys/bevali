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
              Fundada em 2018 por uma ex-bancária, a Bevali nasceu com o propósito de oferecer crédito com boas
              condições para os brasileiros. Acreditamos que soluções financeiras adequadas podem transformar vidas e
              impulsionar sonhos.
            </p>
            <p className="text-muted-foreground mb-6">
              Com orgulho, já atendemos mais de 20.000 clientes e liberamos mais de R$ 20 milhões em crédito. Nossa
              missão é oferecer crédito com juros baixos e acessíveis, com total transparência.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p>Equipe altamente treinada para oferecer as melhores condições</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p>Certificado FEBRABAN</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p>Mais de 20.000 clientes atendidos</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p>Mais de R$ 20 milhões em crédito liberado</p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
              <Link href="/quem-somos">Conheça nossa história</Link>
            </Button>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x400/e2e8f0/1e293b?text=Equipe+Bevali"
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

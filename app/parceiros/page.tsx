import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Handshake } from "lucide-react"

const partners = [
  { id: 1, name: "Facta Financeira", logo: "/images/partners/facta-financeira.png" },
  { id: 2, name: "C6 Bank", logo: "/images/partners/c6-bank.png" },
  { id: 3, name: "Banco Pan", logo: "/images/partners/banco-pan.png" },
  { id: 4, name: "Novo Saque", logo: "/images/partners/novo-saque.png" },
]

export default function ParceirosPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Nossos Parceiros</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Trabalhamos com os principais bancos e instituições financeiras do mercado
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Instituições Parceiras</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa parceria com as principais instituições financeiras do país nos permite oferecer as melhores
              condições para nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <Card key={partner.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-4 bg-muted/50 rounded-lg w-full flex justify-center">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={160}
                        height={80}
                        className="max-h-16 w-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Parcerias</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Atualmente, a Bevali trabalha exclusivamente com parceiros selecionados para garantir a qualidade dos
              serviços oferecidos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Sobre Novas Parcerias</h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              No momento, não oferecemos a possibilidade de novas parcerias. Nosso foco está em fortalecer as relações
              com nossos parceiros atuais para garantir o melhor atendimento aos nossos clientes.
            </p>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/contato">Fale conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

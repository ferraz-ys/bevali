import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Handshake } from "lucide-react"

const partners = [
  { id: 1, name: "Banco 1", logo: "/placeholder.svg?height=80&width=160", description: "Parceiro desde 2015" },
  { id: 2, name: "Banco 2", logo: "/placeholder.svg?height=80&width=160", description: "Parceiro desde 2016" },
  { id: 3, name: "Banco 3", logo: "/placeholder.svg?height=80&width=160", description: "Parceiro desde 2017" },
  { id: 4, name: "Banco 4", logo: "/placeholder.svg?height=80&width=160", description: "Parceiro desde 2018" },
  { id: 5, name: "Banco 5", logo: "/placeholder.svg?height=80&width=160", description: "Parceiro desde 2019" },
  { id: 6, name: "Banco 6", logo: "/placeholder.svg?height=80&width=160", description: "Parceiro desde 2020" },
  { id: 7, name: "Banco 7", logo: "/placeholder.svg?height=80&width=160", description: "Parceiro desde 2021" },
  { id: 8, name: "Banco 8", logo: "/placeholder.svg?height=80&width=160", description: "Parceiro desde 2022" },
  { id: 9, name: "Banco 9", logo: "/placeholder.svg?height=80&width=160", description: "Parceiro desde 2023" },
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <p className="text-muted-foreground">{partner.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Seja um Parceiro</h2>
              <p className="text-muted-foreground mb-6">
                A Bevali Promotora está sempre em busca de novas parcerias para ampliar sua atuação e oferecer ainda
                mais opções para seus clientes.
              </p>
              <p className="text-muted-foreground mb-6">
                Se você representa uma instituição financeira e tem interesse em se tornar um parceiro, entre em contato
                conosco. Teremos prazer em discutir as possibilidades de parceria.
              </p>

              <div className="flex items-center mb-8">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Benefícios da Parceria</h3>
                  <p className="text-muted-foreground">
                    Amplie seu alcance e aumente suas operações com nossa rede de clientes.
                  </p>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contato">Fale conosco</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Parceria Bevali Promotora"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

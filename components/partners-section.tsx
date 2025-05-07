import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const partners = [
  { id: 1, name: "Banco 1", logo: "/placeholder.svg?height=80&width=160" },
  { id: 2, name: "Banco 2", logo: "/placeholder.svg?height=80&width=160" },
  { id: 3, name: "Banco 3", logo: "/placeholder.svg?height=80&width=160" },
  { id: 4, name: "Banco 4", logo: "/placeholder.svg?height=80&width=160" },
  { id: 5, name: "Banco 5", logo: "/placeholder.svg?height=80&width=160" },
  { id: 6, name: "Banco 6", logo: "/placeholder.svg?height=80&width=160" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Nossos Parceiros</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com os principais bancos e instituições financeiras do mercado para oferecer as melhores
            condições para você.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <Card key={partner.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center justify-center h-24">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/parceiros">Ver todos os parceiros</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

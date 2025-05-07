import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CreditCard, Calendar, Users, Landmark } from "lucide-react"

const products = [
  {
    id: 1,
    title: "Crédito Consignado",
    description: "Empréstimo com desconto em folha para servidores públicos, aposentados e pensionistas do INSS.",
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    link: "/produtos/credito-consignado",
  },
  {
    id: 2,
    title: "Consignado Privado",
    description: "Crédito consignado com as melhores taxas para trabalhadores CLT de empresas privadas.",
    icon: <Users className="h-10 w-10 text-primary" />,
    link: "/produtos/consignado-privado",
  },
  {
    id: 3,
    title: "Antecipação de FGTS",
    description: "Antecipe o saque-aniversário do seu FGTS e tenha acesso a recursos financeiros imediatos.",
    icon: <Calendar className="h-10 w-10 text-primary" />,
    link: "/produtos/antecipacao-fgts",
  },
  {
    id: 4,
    title: "Empréstimo Pessoal",
    description: "Crédito rápido e sem burocracia para você resolver imprevistos ou realizar projetos.",
    icon: <Users className="h-10 w-10 text-primary" />,
    link: "/produtos/emprestimo-pessoal",
  },
  {
    id: 5,
    title: "Financiamento",
    description: "Soluções para financiamento de veículos, imóveis e outros bens com taxas competitivas.",
    icon: <Landmark className="h-10 w-10 text-primary" />,
    link: "/produtos/financiamento",
  },
]

export function ProductsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Nossos Produtos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça todas as nossas soluções financeiras e encontre a opção ideal para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-secondary-800">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-auto border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href={product.link}>Saiba mais</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

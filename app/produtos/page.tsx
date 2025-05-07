import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CreditCard, Calendar, Users, Landmark, CheckCircle } from "lucide-react"

export default function ProdutosPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Nossos Produtos</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Conheça todas as nossas soluções financeiras e encontre a opção ideal para você.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {/* Crédito Consignado */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-secondary-800">Crédito Consignado</h2>
                <p className="text-muted-foreground mb-6">
                  O crédito consignado é um empréstimo com pagamento indireto, cujas parcelas são descontadas
                  automaticamente da folha de pagamento ou benefício. Por oferecer menos riscos às instituições
                  financeiras, esse tipo de empréstimo geralmente apresenta as menores taxas do mercado.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Taxas a partir de 1,70% ao mês</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Parcelas fixas descontadas em folha</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Aprovação rápida e sem burocracia</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Prazos de até 84 meses para pagamento</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Link href="/contato">Solicitar agora</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Crédito Consignado"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Antecipação de FGTS */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:order-1">
              <div className="md:order-2">
                <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-secondary-800">Antecipação de FGTS</h2>
                <p className="text-muted-foreground mb-6">
                  Antecipe o saque-aniversário do seu FGTS e tenha acesso a recursos financeiros sem comprometer sua
                  renda mensal. Com a antecipação do FGTS, você pode antecipar até 10 anos do seu saque-aniversário e
                  utilizar o dinheiro como quiser.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Antecipe até 10 anos do seu saque-aniversário</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Sem comprometer sua renda mensal</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Dinheiro na conta em até 24 horas</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Processo 100% digital e seguro</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Link href="/contato">Solicitar agora</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl md:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Antecipação de FGTS"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Empréstimo Pessoal */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-secondary-800">Empréstimo Pessoal</h2>
                <p className="text-muted-foreground mb-6">
                  Crédito rápido e sem burocracia para você resolver imprevistos ou realizar projetos. O empréstimo
                  pessoal é uma opção flexível para quem precisa de dinheiro para diferentes finalidades.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Aprovação rápida</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Taxas competitivas</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Parcelas que cabem no seu bolso</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Atendimento personalizado</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Link href="/contato">Solicitar agora</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Empréstimo Pessoal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Financiamento */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:order-1">
              <div className="md:order-2">
                <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
                  <Landmark className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-secondary-800">Financiamento</h2>
                <p className="text-muted-foreground mb-6">
                  Soluções para financiamento de veículos, imóveis e outros bens com taxas competitivas. Realize o sonho
                  da casa própria, do carro novo ou de outros bens com condições especiais.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Financiamento de imóveis com as melhores taxas</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Financiamento de veículos novos e usados</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Prazos estendidos para pagamento</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Consultoria especializada</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Link href="/contato">Solicitar agora</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl md:order-1">
                <Image src="/placeholder.svg?height=400&width=600" alt="Financiamento" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

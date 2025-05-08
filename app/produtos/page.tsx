import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CreditCard, Calendar, Users, CheckCircle } from "lucide-react"

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
                    <p>Taxas a partir de 1,80% ao mês (a partir de março de 2025)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Parcelas fixas descontadas em folha</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Prazos de até 96 meses para pagamento</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Público: Aposentados e servidores estaduais e federais</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Link href="/produtos/credito-consignado">Saiba mais</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/products/credito-consignado-2.png"
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
                    <p>Taxa mínima de 1,50% ao mês</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Dinheiro liberado em até 5 minutos</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Processo 100% digital e seguro</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Link href="/produtos/antecipacao-fgts">Saiba mais</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl md:order-1">
                <Image
                  src="/images/products/antecipacao-fgts-2.png"
                  alt="Antecipação de FGTS"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Consignado Privado */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-secondary-800">Consignado Privado</h2>
                <p className="text-muted-foreground mb-6">
                  Crédito consignado com as melhores taxas para trabalhadores CLT de empresas privadas. O consignado
                  privado é uma opção flexível para quem precisa de dinheiro com taxas mais acessíveis que empréstimos
                  convencionais.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Público: Trabalhadores com carteira assinada</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Taxa a partir de 3% ao mês (análise de cada banco)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Prazo de até 36 meses para pagamento</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>Requisitos: Carteira assinada</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Link href="/produtos/consignado-privado">Saiba mais</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/products/consignado-privado-2.png"
                  alt="Consignado Privado"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-secondary-800">Outros Produtos</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6">
              Atualmente, a Bevali está focada em oferecer os melhores serviços em Crédito Consignado, Antecipação de
              FGTS e Consignado Privado. Não oferecemos empréstimo pessoal ou financiamento no momento.
            </p>
            <p className="text-lg">
              Estamos constantemente avaliando novas oportunidades para melhor atender nossos clientes. Fique atento às
              novidades!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

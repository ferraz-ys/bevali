import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { BannerCarousel } from "@/components/banner-carousel"
import { CheckCircle, CreditCard, Calendar, Users } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex flex-col">
      <BannerCarousel />

      {/* Company Differentials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Por que escolher a Bevali?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Somos especialistas em soluções financeiras com atendimento personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-800">Atendimento Humanizado</h3>
                <p className="text-muted-foreground">
                  Oferecemos um atendimento totalmente humanizado, analisando todas as oportunidades para nossos
                  clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-800">+20.000 Clientes</h3>
                <p className="text-muted-foreground">
                  Mais de 20.000 clientes já confiaram em nossos serviços para suas necessidades financeiras.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  <CreditCard className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-800">+R$ 20 Milhões</h3>
                <p className="text-muted-foreground">
                  Mais de R$ 20 milhões em crédito liberado, ajudando nossos clientes a realizarem seus objetivos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Nossos Produtos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça nossas principais soluções e encontre a opção ideal para você
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  <CreditCard className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-800">Crédito Consignado</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Empréstimo com desconto em folha para servidores públicos, aposentados e pensionistas do INSS.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-auto border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/solucoes-financeiras/credito-consignado">Saiba mais</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-800">Antecipação de FGTS</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Antecipe o saque-aniversário do seu FGTS e tenha dinheiro na conta em até 5 minutos.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-auto border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/solucoes-financeiras/antecipacao-fgts">Saiba mais</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-800">Consignado Privado</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Crédito consignado com as melhores taxas para trabalhadores CLT de empresas privadas.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-auto border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/solucoes-financeiras/consignado-privado">Saiba mais</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para solicitar seu crédito?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Entre em contato conosco agora mesmo e garanta as melhores condições do mercado para o seu empréstimo.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contato">Falar com um consultor</Link>
          </Button>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}

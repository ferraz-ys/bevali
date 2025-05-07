import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Target } from "lucide-react"

export default function QuemSomosPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Quem Somos</h1>
          <p className="text-white/90 max-w-2xl mx-auto">Conheça a história e os valores da Bevali Promotora</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Nossa História</h2>
            <p className="text-muted-foreground mb-6">
              Fundada em 2018 por uma ex-bancária, a Bevali nasceu com o propósito de oferecer crédito com boas
              condições para os brasileiros. Nossa fundadora, com vasta experiência no setor bancário, identificou a
              necessidade de um serviço mais transparente e humanizado no mercado de crédito.
            </p>
            <p className="text-muted-foreground mb-6">
              Ao longo destes anos, construímos uma trajetória sólida baseada na confiança e no compromisso com nossos
              clientes. Com orgulho, já atendemos mais de 20.000 brasileiros e liberamos mais de R$ 20 milhões em
              crédito, cada cliente com sua história única e necessidades específicas.
            </p>
            <p className="text-muted-foreground mb-6">
              Nossa equipe de especialistas trabalha incansavelmente para oferecer as melhores condições e um
              atendimento verdadeiramente humanizado. Entendemos que por trás de cada solicitação de crédito existe um
              sonho, um projeto ou uma necessidade, e é com essa consciência que conduzimos nosso trabalho diário.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Missão, Visão e Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que norteiam nossas ações e relacionamento com clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Missão</h3>
              <p className="text-muted-foreground">
                Oferecer crédito com juros baixos e acessíveis, com total transparência, contribuindo para a realização
                dos objetivos financeiros de nossos clientes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visão</h3>
              <p className="text-muted-foreground">
                Ser reconhecida como a promotora de crédito mais confiável e transparente do Brasil, oferecendo as
                melhores condições do mercado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Valores</h3>
              <p className="text-muted-foreground">
                Transparência, ética, compromisso com o cliente, excelência no atendimento e equipe altamente treinada
                para oferecer as melhores condições.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Nossos Números</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <div className="text-4xl font-bold text-primary mb-2">+20.000</div>
                <h3 className="text-xl font-bold mb-2">Clientes Atendidos</h3>
                <p className="text-muted-foreground">
                  Mais de 20.000 clientes já confiaram em nossos serviços para suas necessidades financeiras.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <div className="text-4xl font-bold text-primary mb-2">+R$ 20 milhões</div>
                <h3 className="text-xl font-bold mb-2">Em Crédito Liberado</h3>
                <p className="text-muted-foreground">
                  Mais de R$ 20 milhões em crédito liberado, ajudando nossos clientes a realizarem seus objetivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para conhecer nossas soluções?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Entre em contato conosco agora mesmo e descubra como podemos ajudar você a realizar seus objetivos
            financeiros.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contato">Falar com um consultor</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

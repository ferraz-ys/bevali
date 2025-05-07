import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Award, Users, Clock, Target } from "lucide-react"

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Nossa História</h2>
              <p className="text-muted-foreground mb-6">
                A Bevali Promotora nasceu com o propósito de oferecer soluções financeiras personalizadas e acessíveis
                para todos os brasileiros. Fundada por profissionais com vasta experiência no mercado financeiro, nossa
                empresa se destaca pelo atendimento humanizado e pelas condições diferenciadas.
              </p>
              <p className="text-muted-foreground mb-6">
                Ao longo dos anos, construímos uma reputação sólida baseada na transparência, ética e compromisso com
                nossos clientes. Trabalhamos com os principais bancos e instituições financeiras do país para oferecer
                as melhores taxas e condições do mercado.
              </p>
              <p className="text-muted-foreground mb-6">
                Hoje, a Bevali Promotora é reconhecida como uma das principais empresas do segmento, atendendo clientes
                em todo o Brasil com soluções que realmente fazem a diferença na vida financeira das pessoas.
              </p>
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nossos Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que norteiam nossas ações e relacionamento com clientes e parceiros
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excelência</h3>
              <p className="text-muted-foreground">
                Buscamos a excelência em tudo o que fazemos, desde o atendimento até a oferta das melhores soluções
                financeiras.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Relacionamento</h3>
              <p className="text-muted-foreground">
                Construímos relacionamentos duradouros baseados na confiança, transparência e respeito mútuo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Agilidade</h3>
              <p className="text-muted-foreground">
                Valorizamos o tempo dos nossos clientes, oferecendo processos ágeis e desburocratizados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inovação</h3>
              <p className="text-muted-foreground">
                Estamos sempre em busca de inovações que possam melhorar a experiência dos nossos clientes e parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Diferenciais Bevali Promotora"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Nossos Diferenciais</h2>
              <p className="text-muted-foreground mb-6">
                Na Bevali Promotora, acreditamos que cada cliente é único e merece um atendimento personalizado. Por
                isso, trabalhamos para oferecer soluções que realmente façam sentido para cada situação.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Atendimento Personalizado</h3>
                    <p className="text-muted-foreground">
                      Consultores especializados para encontrar a melhor solução para você.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Melhores Taxas</h3>
                    <p className="text-muted-foreground">
                      Parceria com os principais bancos para oferecer as taxas mais competitivas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Processo Simplificado</h3>
                    <p className="text-muted-foreground">
                      Menos burocracia e mais agilidade na aprovação do seu crédito.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Suporte Contínuo</h3>
                    <p className="text-muted-foreground">Acompanhamento durante todo o processo e pós-contratação.</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contato">Fale com um consultor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

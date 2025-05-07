import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AntecipacaoFGTSPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Antecipação de FGTS</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Antecipe o saque-aniversário do seu FGTS e tenha dinheiro na conta em até 24 horas
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">O que é Antecipação de FGTS?</h2>
              <p className="text-muted-foreground mb-6">
                A antecipação do saque-aniversário do FGTS permite que você receba antecipadamente o valor que teria
                direito a sacar anualmente do seu Fundo de Garantia. Com essa modalidade, é possível antecipar até 10
                anos do seu saque-aniversário e utilizar o dinheiro como quiser.
              </p>

              <div className="space-y-3 mb-8">
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
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p>Sem consulta ao SPC/Serasa</p>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contato">Solicitar agora</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Antecipação de FGTS"
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
            <h2 className="text-3xl font-bold text-primary mb-4">Como funciona?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entenda o passo a passo para antecipar o saque-aniversário do seu FGTS
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Adesão ao Saque-Aniversário</h3>
              <p className="text-muted-foreground">
                Primeiro, você precisa aderir à modalidade de saque-aniversário do FGTS pelo aplicativo ou site da
                Caixa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Autorização de Consulta</h3>
              <p className="text-muted-foreground">
                Autorize a consulta ao seu saldo de FGTS pelo aplicativo ou site da Caixa para instituições financeiras.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Simulação e Contratação</h3>
              <p className="text-muted-foreground">
                Entre em contato conosco para simular e contratar a antecipação do seu saque-aniversário com as melhores
                taxas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Recebimento do Valor</h3>
              <p className="text-muted-foreground">
                Após a aprovação, o valor é depositado em sua conta em até 24 horas, e você pode utilizar como quiser.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre a antecipação do saque-aniversário do FGTS
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>O que é o saque-aniversário do FGTS?</AccordionTrigger>
                <AccordionContent>
                  O saque-aniversário é uma modalidade que permite ao trabalhador retirar parte do saldo do FGTS
                  anualmente, no mês do seu aniversário. Ao optar por essa modalidade, o trabalhador não poderá sacar o
                  saldo total da conta em caso de demissão sem justa causa, apenas a multa rescisória de 40%.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Quem pode antecipar o saque-aniversário?</AccordionTrigger>
                <AccordionContent>
                  Qualquer trabalhador que tenha aderido à modalidade de saque-aniversário e possua saldo disponível no
                  FGTS pode antecipar os valores. É necessário que a adesão tenha sido feita há pelo menos 30 dias.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Quantos anos posso antecipar?</AccordionTrigger>
                <AccordionContent>
                  É possível antecipar até 10 anos do saque-aniversário do FGTS, dependendo do seu saldo disponível e
                  das políticas da instituição financeira.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Posso voltar para o saque-rescisão depois?</AccordionTrigger>
                <AccordionContent>
                  Sim, é possível retornar à modalidade de saque-rescisão, mas é necessário aguardar um período de
                  carência de 24 meses a partir da data de adesão ao saque-aniversário. Durante esse período, caso haja
                  demissão sem justa causa, o trabalhador terá direito apenas à multa rescisória de 40%.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Quais documentos são necessários para contratar?</AccordionTrigger>
                <AccordionContent>
                  Para contratar a antecipação do saque-aniversário, geralmente são necessários: documento de identidade
                  com foto (RG/CNH), CPF, comprovante de residência atualizado e autorização de consulta ao FGTS pelo
                  aplicativo da Caixa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para antecipar seu FGTS?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Entre em contato conosco agora mesmo e garanta as melhores condições do mercado para a antecipação do seu
            saque-aniversário.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contato">Solicitar agora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

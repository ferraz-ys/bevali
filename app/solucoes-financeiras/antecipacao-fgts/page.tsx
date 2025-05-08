import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { VideoPlayer } from "@/components/video-player"

export default function AntecipacaoFGTSPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Antecipação de FGTS</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Antecipe o saque-aniversário do seu FGTS e tenha dinheiro na conta em até 5 minutos
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
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p>Sem consulta ao SPC/Serasa</p>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contato">Solicitar agora</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[225px] h-[400px] rounded-lg overflow-hidden shadow-xl">
                <VideoPlayer
                  src="/videos/fgts-video.mp4"
                  className="absolute inset-0"
                  autoPlay
                  loop
                  muted
                  showControls
                />
              </div>
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
                Após a aprovação, o valor é depositado em sua conta em até 5 minutos, e você pode utilizar como quiser.
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
                <AccordionTrigger>Como consultar o FGTS?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Para consultar seu FGTS, siga estas instruções:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Baixe o aplicativo FGTS na App Store ou Google Play</li>
                    <li>Faça o cadastro com seus dados pessoais</li>
                    <li>Confirme as informações de segurança</li>
                    <li>Acesse o menu principal e selecione "Extrato"</li>
                    <li>Visualize seu saldo disponível e histórico de operações</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Como aderir ao Saque-Aniversário?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Para aderir ao Saque-Aniversário pelo app FGTS:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Abra o aplicativo FGTS</li>
                    <li>Faça login com suas credenciais</li>
                    <li>Na tela inicial, toque em "Saque-Aniversário"</li>
                    <li>Leia os termos e condições</li>
                    <li>Confirme a opção "Optar pelo Saque-Aniversário"</li>
                    <li>Confirme a solicitação</li>
                  </ol>
                  <p className="mt-2">Após a adesão, aguarde 30 dias para poder antecipar os valores.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>O que é necessário para contratar a antecipação?</AccordionTrigger>
                <AccordionContent>
                  Para contratar a antecipação do saque-aniversário, você precisa:
                  <ol className="list-decimal pl-5 space-y-2 mt-2">
                    <li>Aderir ao Saque-Aniversário pelo app FGTS</li>
                    <li>Autorizar a consulta e bloqueio pelo app FGTS</li>
                    <li>Entrar em contato com a Bevali para finalizar o processo</li>
                  </ol>
                  Todo o processo é digital e você receberá o dinheiro em até 5 minutos após a aprovação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>É possível quitar antecipadamente?</AccordionTrigger>
                <AccordionContent>
                  Sim, é possível quitar antecipadamente a antecipação do saque-aniversário, com redução proporcional
                  dos juros. Para isso, entre em contato com nossa central de atendimento para solicitar o valor
                  atualizado para quitação.
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

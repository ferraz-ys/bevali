import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, FileText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CreditoConsignadoPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Crédito Consignado</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            As melhores taxas do mercado para aposentados e servidores estaduais e federais
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">O que é Crédito Consignado?</h2>
              <p className="text-muted-foreground mb-6">
                O crédito consignado é um empréstimo com pagamento indireto, cujas parcelas são descontadas
                automaticamente da folha de pagamento ou benefício. Por oferecer menos riscos às instituições
                financeiras, esse tipo de empréstimo geralmente apresenta as menores taxas do mercado.
              </p>

              <div className="space-y-3 mb-8">
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
                  <p>Aprovação rápida e sem burocracia</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p>Prazos de até 96 meses para pagamento</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p>Atendimento totalmente humanizado com análise de todas as oportunidades do cliente</p>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contato">Solicitar agora</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x400/e2e8f0/1e293b?text=Imagem+Consignado"
                alt="Crédito Consignado"
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
            <h2 className="text-3xl font-bold text-primary mb-4">Quem pode solicitar?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O crédito consignado está disponível para aposentados e servidores estaduais e federais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Servidores Públicos</h3>
              <p className="text-muted-foreground mb-4">Servidores públicos federais e estaduais com estabilidade.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Federais</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Estaduais</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Aposentados e Pensionistas</h3>
              <p className="text-muted-foreground mb-4">
                Aposentados e pensionistas do INSS com benefícios permanentes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Aposentados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Pensionistas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nosso Diferencial</h3>
              <p className="text-muted-foreground mb-4">
                Atendimento totalmente humanizado com análise de todas as oportunidades do cliente.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Análise personalizada</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Melhores condições do mercado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Atendimento humanizado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tire suas dúvidas sobre o crédito consignado</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Qual a taxa de juros do crédito consignado?</AccordionTrigger>
                <AccordionContent>
                  As taxas de juros do crédito consignado iniciam em 1,80% ao mês (a partir de março de 2025). Na Bevali
                  Promotora, trabalhamos para garantir as melhores condições para nossos clientes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Qual o prazo máximo para pagamento?</AccordionTrigger>
                <AccordionContent>
                  O prazo máximo para pagamento do crédito consignado pode chegar a até 96 meses (8 anos), dependendo do
                  convênio e da instituição financeira. Prazos mais longos resultam em parcelas menores, mas o custo
                  total do empréstimo pode ser maior.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Preciso ter conta no banco para contratar?</AccordionTrigger>
                <AccordionContent>
                  Não é necessário ter conta no banco para contratar o crédito consignado. O valor do empréstimo pode
                  ser depositado em qualquer conta bancária de sua titularidade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Posso antecipar o pagamento do empréstimo?</AccordionTrigger>
                <AccordionContent>
                  Sim, é possível antecipar o pagamento do empréstimo consignado a qualquer momento, com redução
                  proporcional dos juros. Consulte as condições específicas da instituição financeira.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Quais documentos são necessários para contratar?</AccordionTrigger>
                <AccordionContent>
                  Para contratar o crédito consignado, geralmente são necessários: documento de identidade com foto
                  (RG/CNH), CPF, comprovante de residência atualizado, contracheque ou extrato de benefício recente.
                  Documentos adicionais podem ser solicitados conforme o caso.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para solicitar seu crédito consignado?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Entre em contato conosco agora mesmo e garanta as melhores condições do mercado para o seu empréstimo
            consignado.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contato">Solicitar agora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Perguntas Frequentes</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Antecipação FGTS</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
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
                      Sim, é possível quitar antecipadamente a antecipação do saque-aniversário, com redução
                      proporcional dos juros. Para isso, entre em contato com nossa central de atendimento para
                      solicitar o valor atualizado para quitação.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Consignado Privado (CLT)</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Quem pode contratar?</AccordionTrigger>
                    <AccordionContent>
                      O consignado privado está disponível para trabalhadores CLT de empresas privadas e conveniadas. É
                      necessário ter carteira assinada e que sua empresa tenha convênio com as instituições financeiras
                      parceiras.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Quais documentos são necessários?</AccordionTrigger>
                    <AccordionContent>
                      <p>Para contratar o consignado privado, você precisará dos seguintes documentos:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>RG/CPF ou CNH</li>
                        <li>Comprovante de residência (últimos 90 dias)</li>
                        <li>Carteira de trabalho ou holerite</li>
                        <li>Dados bancários</li>
                      </ul>
                      <p className="mt-2">Todo o envio de documentação é 100% digital.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Qual o tempo de liberação?</AccordionTrigger>
                    <AccordionContent>
                      O processo de aprovação é rápido, podendo ocorrer em até 2 horas. Após a aprovação, o dinheiro é
                      liberado em sua conta em até 24 horas úteis.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Como funciona o desconto em folha?</AccordionTrigger>
                    <AccordionContent>
                      O valor da parcela é descontado diretamente do seu salário, antes mesmo que o dinheiro caia em sua
                      conta. Isso garante que você nunca esqueça de pagar e evita atrasos, o que contribui para as taxas
                      reduzidas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Qual valor posso solicitar?</AccordionTrigger>
                    <AccordionContent>
                      Você pode solicitar até 30% do seu salário (margem consignável). Este é o limite máximo que pode
                      ser comprometido com parcelas de empréstimo consignado, garantindo que você não comprometa
                      excessivamente sua renda.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>Posso quitar antes?</AccordionTrigger>
                    <AccordionContent>
                      Sim, é possível quitar o empréstimo antecipadamente, com desconto proporcional nos juros. Para
                      isso, basta entrar em contato com nossa central de atendimento e solicitar o valor atualizado para
                      quitação.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>E se eu for demitido?</AccordionTrigger>
                    <AccordionContent>
                      Em caso de demissão, existem duas possibilidades: o valor restante pode ser descontado das verbas
                      rescisórias ou você receberá boletos para continuar o pagamento. Algumas instituições oferecem
                      seguro opcional para cobrir essa situação.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Ainda tem dúvidas?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Entre em contato com nossa equipe de atendimento. Estamos prontos para esclarecer todas as suas dúvidas.
          </p>
          <Button asChild size="lg">
            <Link href="/contato">Fale conosco</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

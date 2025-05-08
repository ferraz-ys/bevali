"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calculator, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ConsignadoPrivadoPage() {
  const [valorDesejado, setValorDesejado] = useState("")

  // Modifique a função handleSimular para:
  const handleSimular = (e: React.FormEvent) => {
    e.preventDefault()

    // Redirecionar para a página de resultados
    window.location.href = `/resultados-simulacao?valor=${valorDesejado}`
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-secondary-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1600x800/1e293b/ffffff?text=Banner+Consignado+Privado"
            alt="Trabalhadores CLT"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-400">Consignado Privado</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">para trabalhadores CLT</h2>
              <p className="text-lg mb-8">
                Crédito consignado com as melhores taxas do mercado para trabalhadores com carteira assinada (CLT) de
                empresas privadas.
              </p>
              <Button
                size="lg"
                className="text-white font-bold bg-primary hover:bg-primary-600 px-8 py-6 text-lg rounded-full"
              >
                Quero Saber Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador Section */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSimular} className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full mr-4">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <span className="text-white font-bold text-lg">Simule agora mesmo! Informe seu valor desejado:</span>
            </div>
            <div className="flex w-full max-w-md">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                <Input
                  type="text"
                  value={valorDesejado}
                  onChange={(e) => setValorDesejado(e.target.value)}
                  className="pl-10 h-12 border-2 border-white bg-white/90"
                  placeholder="0,00"
                />
              </div>
              <Button type="submit" className="ml-2 bg-secondary text-white hover:bg-secondary-700 h-12 px-6">
                Simular <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-primary px-4 py-1 rounded-full text-white font-bold mb-6">ENTENDA</div>

            <h2 className="text-3xl font-bold mb-8 text-secondary-800">O consignado feito sob medida para você</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  O crédito consignado privado é um empréstimo com desconto em folha para trabalhadores CLT de empresas
                  privadas que possuem convênio com instituições financeiras.
                </p>
                <p className="text-lg mb-6">
                  Com taxas muito menores que as de empréstimos pessoais comuns, o consignado privado é uma excelente
                  opção para quem precisa de crédito com condições vantajosas.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Taxas a partir de 3% ao mês (análise de cada banco)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Parcelas descontadas diretamente da folha de pagamento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Prazos de até 36 meses para pagamento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Aprovação rápida e sem burocracia</span>
                  </li>
                </ul>

                <Button
                  size="lg"
                  className="text-white font-bold bg-primary hover:bg-primary-600 px-8 py-6 text-lg rounded-full"
                >
                  Solicitar agora
                </Button>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/products/consignado-privado.png"
                  alt="Trabalhadores CLT"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary-800">Vantagens do Consignado Privado</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os benefícios exclusivos do crédito consignado para trabalhadores CLT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-800">Taxas Reduzidas</h3>
              <p className="text-gray-600">
                Taxas de juros muito menores que as de empréstimos pessoais convencionais, permitindo economizar
                significativamente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M7 15h0M2 9.5h20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-800">Praticidade</h3>
              <p className="text-gray-600">
                Parcelas descontadas diretamente da folha de pagamento, sem preocupação com boletos ou atrasos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-800">Segurança</h3>
              <p className="text-gray-600">
                Processo seguro e regulamentado, com transparência total nas condições e sem surpresas no decorrer do
                contrato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre o consignado privado para trabalhadores CLT
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
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
                  Você pode solicitar até 30% do seu salário (margem consignável). Este é o limite máximo que pode ser
                  comprometido com parcelas de empréstimo consignado, garantindo que você não comprometa excessivamente
                  sua renda.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Posso quitar antes?</AccordionTrigger>
                <AccordionContent>
                  Sim, é possível quitar o empréstimo antecipadamente, com desconto proporcional nos juros. Para isso,
                  basta entrar em contato com nossa central de atendimento e solicitar o valor atualizado para quitação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>E se eu for demitido?</AccordionTrigger>
                <AccordionContent>
                  Em caso de demissão, existem duas possibilidades: o valor restante pode ser descontado das verbas
                  rescisórias ou você receberá boletos para continuar o pagamento. Algumas instituições oferecem seguro
                  opcional para cobrir essa situação.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para solicitar seu consignado privado?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Entre em contato conosco agora mesmo e garanta as melhores condições do mercado para o seu empréstimo
            consignado.
          </p>
          <Button
            asChild
            size="lg"
            className="text-white font-bold bg-primary hover:bg-primary-600 px-8 py-6 text-lg rounded-full"
          >
            <Link href="/contato">Falar com um consultor</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

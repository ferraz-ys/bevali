"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Clock,
  DollarSign,
  Percent,
  Calculator,
  Star,
} from "lucide-react"
import { TikTokPixel } from "@/components/tiktok-pixel"

export default function ConsignadoPrivadoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
    aceitaTermos: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Evento de conversão para o TikTok Pixel
      if (typeof window !== "undefined" && window.ttq) {
        window.ttq.track("SubmitForm")
      }

      // Reset do estado de sucesso após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      <TikTokPixel />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary-900 to-secondary-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                CRÉDITO PARA TRABALHADORES CLT
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empréstimo com <span className="text-primary">desconto em folha</span> para trabalhadores de empresas
                privadas
              </h1>
              <p className="text-lg mb-8">
                Taxas a partir de <span className="font-bold text-primary">2,99%</span> ao mês e aprovação em até 24
                horas!
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Taxas a partir de 2,99% ao mês</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Parcelas descontadas diretamente da folha</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Prazos de até 36 meses</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Aprovação rápida em até 24 horas</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white font-bold text-lg px-8 py-6 rounded-full"
                onClick={() => document.getElementById("formulario").scrollIntoView({ behavior: "smooth" })}
              >
                Solicitar agora <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/products/consignado-privado.png"
                alt="Trabalhador CLT"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simulador Section */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const valorDesejado = e.currentTarget.querySelector("input").value
              window.location.href = `/resultados-simulacao?valor=${valorDesejado}`
            }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full mr-4">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <span className="text-white font-bold text-lg">Simule agora mesmo! Informe seu valor desejado:</span>
            </div>
            <div className="flex w-full max-w-md">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                <Input type="text" className="pl-10 h-12 border-2 border-white bg-white/90" placeholder="0,00" />
              </div>
              <Button type="submit" className="ml-2 bg-secondary text-white hover:bg-secondary-700 h-12 px-6">
                Simular <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
              VANTAGENS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Por que escolher o Consignado Privado?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              O crédito consignado privado oferece diversas vantagens para trabalhadores CLT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Percent className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary-800">Taxas Reduzidas</h3>
              <p className="text-gray-600">
                Taxas de juros muito menores que as de empréstimos pessoais convencionais, a partir de 2,99% ao mês.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary-800">Prazos Estendidos</h3>
              <p className="text-gray-600">
                Prazos de até 36 meses para pagamento, permitindo parcelas que cabem no seu orçamento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary-800">Liberação Rápida</h3>
              <p className="text-gray-600">
                Dinheiro na conta em até 24 horas após a aprovação, sem burocracia e com processo 100% digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
              PROCESSO SIMPLES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Como funciona o Consignado Privado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entenda o processo simples para contratar seu consignado privado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-secondary-800">Solicitação</h3>
              <p className="text-gray-600">
                Preencha o formulário ou entre em contato conosco para solicitar seu empréstimo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-secondary-800">Análise</h3>
              <p className="text-gray-600">
                Nossa equipe analisa seu perfil e verifica as melhores condições para você.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-secondary-800">Aprovação</h3>
              <p className="text-gray-600">
                Após análise, seu crédito é aprovado em até 24 horas, com condições personalizadas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-secondary-800">Liberação</h3>
              <p className="text-gray-600">O dinheiro é liberado em sua conta em até 24 horas após a aprovação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Pode Solicitar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/products/consignado-privado.png"
                alt="Trabalhadores CLT"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
                ELEGIBILIDADE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                Quem pode solicitar o Consignado Privado?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                O consignado privado está disponível para trabalhadores CLT de empresas privadas que possuem convênio
                com instituições financeiras.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-secondary-800">Trabalhadores CLT</h4>
                    <p className="text-gray-600">
                      Funcionários com carteira assinada em empresas privadas conveniadas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-secondary-800">Tempo mínimo de empresa</h4>
                    <p className="text-gray-600">Geralmente é necessário ter pelo menos 6 meses na empresa atual.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-secondary-800">Margem consignável</h4>
                    <p className="text-gray-600">Disponibilidade de margem consignável (até 30% do salário).</p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white font-bold text-lg px-8 py-6 rounded-full"
                onClick={() => document.getElementById("formulario").scrollIntoView({ behavior: "smooth" })}
              >
                Verificar elegibilidade <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
              DEPOIMENTOS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">O que nossos clientes dizem</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja o que dizem as pessoas que já contrataram o Consignado Privado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">BP</span>
                </div>
                <div>
                  <h4 className="font-bold">Beneleandro Passos</h4>
                  <div className="flex text-yellow-400 mt-1">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Sempre que preciso de vcs, vcs me atendem muito bem, obrigado pela educação como vcs atendem as
                pessoas, se todos os lugares fossem assim, seria ótimo 🙌🙏"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">DR</span>
                </div>
                <div>
                  <h4 className="font-bold">Debora Rodrigues</h4>
                  <div className="flex text-yellow-400 mt-1">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Super recomendo o atendimento das meninas, fui até o escritório com dúvidas sobre como sacar o meu FGTS
                de forma rápida e eficaz e foi sanado todas as minhas dúvidas. O meu agradecimento em especial para a
                Iasmin que foi super atenciosa e cuidadosa comigo, tirando e esclarecendo todas as dúvidas que eu tinha
                com um pagamento super rápido em menos de 5 minutos já estava na conta."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">GF</span>
                </div>
                <div>
                  <h4 className="font-bold">Gabriela Fernandes</h4>
                  <div className="flex text-yellow-400 mt-1">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Fui muito bem atendida pela Maria, esclareceu todas minhas dúvidas e me deixou confiante! Sem dúvidas,
                um dos melhores atendimentos que já tive!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário Section */}
      <section id="formulario" className="py-16 bg-gradient-to-r from-secondary-900 to-secondary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                SOLICITE AGORA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Preencha o formulário e receba uma proposta personalizada
              </h2>
              <p className="text-lg mb-8">
                Nossa equipe entrará em contato em até 24 horas com as melhores condições para você.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Atendimento Rápido</h4>
                    <p>Retorno em até 24 horas úteis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Atendimento Personalizado</h4>
                    <p>Consultores especializados para te atender</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Processo 100% Digital</h4>
                    <p>Sem necessidade de deslocamento</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800">
              <h3 className="text-2xl font-bold text-secondary-800 mb-6 text-center">Solicite sua proposta</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome" className="text-gray-700">
                    Nome completo
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Digite seu nome completo"
                    className="mt-1 border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="telefone" className="text-gray-700">
                    Telefone com DDD
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="mt-1 border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="mt-1 border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="mensagem" className="text-gray-700">
                    Mensagem (opcional)
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conte-nos mais sobre sua necessidade"
                    className="mt-1 border-gray-300"
                    rows={3}
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="aceitaTermos"
                    name="aceitaTermos"
                    checked={formData.aceitaTermos}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, aceitaTermos: checked === true }))}
                    required
                  />
                  <Label htmlFor="aceitaTermos" className="text-sm text-gray-600 font-normal">
                    Concordo em receber contato por telefone, e-mail ou WhatsApp para receber minha proposta
                    personalizada.
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-600 text-white font-bold py-4 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar proposta agora"}
                </Button>
                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md text-sm">
                    Solicitação enviada com sucesso! Em breve entraremos em contato.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">Perguntas frequentes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o consignado privado para trabalhadores CLT
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary-800 mb-3">Quais documentos são necessários?</h3>
                <p className="text-gray-600">
                  Para contratar o consignado privado, você precisará de RG/CPF, comprovante de residência atualizado,
                  último holerite e dados bancários. Todo o processo é 100% digital.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary-800 mb-3">Qual o valor máximo que posso solicitar?</h3>
                <p className="text-gray-600">
                  Você pode solicitar até 30% do seu salário (margem consignável). Este é o limite máximo que pode ser
                  comprometido com parcelas de empréstimo consignado, garantindo que você não comprometa excessivamente
                  sua renda.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary-800 mb-3">
                  Quanto tempo demora para o dinheiro cair na conta?
                </h3>
                <p className="text-gray-600">
                  Após a aprovação, que pode ocorrer em até 24 horas, o dinheiro é liberado em sua conta em até 24 horas
                  úteis.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary-800 mb-3">E se eu for demitido?</h3>
                <p className="text-gray-600">
                  Em caso de demissão, o valor restante pode ser descontado das verbas rescisórias ou você receberá
                  boletos para continuar o pagamento. Algumas instituições oferecem seguro opcional para cobrir essa
                  situação.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary-800 mb-3">
                  Posso quitar o empréstimo antecipadamente?
                </h3>
                <p className="text-gray-600">
                  Sim, é possível quitar o empréstimo antecipadamente, com desconto proporcional nos juros. Para isso,
                  basta entrar em contato com nossa central de atendimento e solicitar o valor atualizado para quitação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para solicitar seu consignado privado?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Entre em contato conosco agora mesmo e garanta as melhores condições do mercado para o seu empréstimo
            consignado.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-full"
            onClick={() => document.getElementById("formulario").scrollIntoView({ behavior: "smooth" })}
          >
            Solicitar proposta agora <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}

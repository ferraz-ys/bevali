"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function ResultadosSimulacaoPage() {
  const searchParams = useSearchParams()
  const valorParam = searchParams.get("valor") || "0"
  const [valor, setValor] = useState(valorParam)

  // Safely parse the value
  const parseValue = (val: string) => {
    try {
      return Number.parseFloat(val.replace(/\D/g, "")) / 100 || 0
    } catch (e) {
      console.error("Error parsing value:", e)
      return 0
    }
  }

  const valorParcela36 = (parseValue(valor) * 0.035).toFixed(2)
  const valorParcela48 = (parseValue(valor) * 0.029).toFixed(2)
  const valorParcela60 = (parseValue(valor) * 0.026).toFixed(2)

  // Set the value once on component mount
  useEffect(() => {
    setValor(valorParam)
  }, [valorParam])

  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Resultado da Simulação</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Confira as opções de crédito consignado privado disponíveis para você
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 border border-primary-200 rounded-lg p-6 mb-8 flex items-center">
              <CheckCircle className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-primary-900">Simulação realizada com sucesso!</h2>
                <p className="text-primary-800">
                  Valor solicitado: <span className="font-bold">R$ {valor}</span>
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-secondary-800">Opções de parcelamento</h2>

            <div className="space-y-6 mb-8">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-secondary-800">36 parcelas</h3>
                  <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">Taxa: 1,89% a.m.</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Valor da parcela:</span>
                  <span className="text-2xl font-bold">R$ {valorParcela36}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-600 text-white">Solicitar esta opção</Button>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-secondary-800">48 parcelas</h3>
                  <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">Taxa: 1,95% a.m.</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Valor da parcela:</span>
                  <span className="text-2xl font-bold">R$ {valorParcela48}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-600 text-white">Solicitar esta opção</Button>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-secondary-800">60 parcelas</h3>
                  <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">Taxa: 2,05% a.m.</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Valor da parcela:</span>
                  <span className="text-2xl font-bold">R$ {valorParcela60}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-600 text-white">Solicitar esta opção</Button>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Observações importantes:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Os valores apresentados são simulações e podem variar conforme análise de crédito.</li>
                <li>• É necessário que sua empresa tenha convênio ativo para consignado privado.</li>
                <li>• Taxas sujeitas a alterações conforme política de crédito vigente.</li>
                <li>• Crédito sujeito à aprovação.</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <p className="mb-4 text-lg">Precisa de ajuda ou quer saber mais detalhes?</p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-700 text-white">
                <Link href="/contato">
                  Falar com um consultor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

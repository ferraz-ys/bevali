import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { BannerCarousel } from "@/components/banner-carousel"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex flex-col">
      <BannerCarousel />

      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Nossos Produtos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos as melhores soluções financeiras com taxas competitivas e atendimento personalizado.
          </p>
        </div>

        <Tabs defaultValue="consignado" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="consignado" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Crédito Consignado
            </TabsTrigger>
            <TabsTrigger value="fgts" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Antecipação de FGTS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="consignado">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-secondary-800">Crédito Consignado</h3>
                    <p className="mb-4">
                      O crédito consignado é um empréstimo com pagamento indireto, cujas parcelas são descontadas
                      automaticamente da folha de pagamento ou benefício.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="bg-primary rounded-full p-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        Taxas a partir de 1,70% ao mês
                      </li>
                      <li className="flex items-center">
                        <span className="bg-primary rounded-full p-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        Parcelas fixas descontadas em folha
                      </li>
                      <li className="flex items-center">
                        <span className="bg-primary rounded-full p-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        Aprovação rápida e sem burocracia
                      </li>
                    </ul>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
                      <Link href="/contato">Solicitar agora</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Crédito Consignado"
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="fgts">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-secondary-800">Antecipação de FGTS</h3>
                    <p className="mb-4">
                      Antecipe o saque-aniversário do seu FGTS e tenha acesso a recursos financeiros sem comprometer sua
                      renda mensal.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="bg-primary rounded-full p-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        Antecipe até 10 anos do seu saque-aniversário
                      </li>
                      <li className="flex items-center">
                        <span className="bg-primary rounded-full p-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        Sem comprometer sua renda mensal
                      </li>
                      <li className="flex items-center">
                        <span className="bg-primary rounded-full p-1 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        Dinheiro na conta em até 24 horas
                      </li>
                    </ul>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white">
                      <Link href="/contato">Solicitar agora</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Antecipação de FGTS"
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <ProductsSection />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  )
}

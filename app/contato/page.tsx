import { ContactSection } from "@/components/contact-section"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Entre em Contato</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Estamos prontos para atender você e oferecer as melhores soluções financeiras
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Informações de Contato</h2>
              <p className="text-muted-foreground mb-8">
                Entre em contato conosco por telefone, e-mail ou visite nosso escritório. Estamos à disposição para
                atender você e esclarecer todas as suas dúvidas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-muted-foreground">(18) 3361-7726</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <p className="text-muted-foreground">atendimento@bevali.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. Sete de Setembro N° 493 - Sala 1
                      <br />
                      CEP: 19700-013 - Paraguaçu Paulista - São Paulo
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-muted-foreground">Sábado: 9h às 13h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0176851661193!2d-50.57721492394825!3d-22.41233022290967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd7e8c8b8b8b9%3A0x9a9b8b8b8b8b8b8b!2sAv.%20Sete%20de%20Setembro%2C%20493%20-%20Centro%2C%20Paragua%C3%A7u%20Paulista%20-%20SP%2C%2019700-013!5e0!3m2!1spt-BR!2sbr!4v1683900095529!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="border-t pt-16">
            <ContactSection />
          </div>
        </div>
      </section>
    </div>
  )
}

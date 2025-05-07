import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white p-2 rounded-md inline-block">
                <Image src="/images/logo.png" alt="Bevali Promotora" width={150} height={40} />
              </div>
            </Link>
            <p className="text-sm mb-4">Soluções financeiras personalizadas com as melhores taxas do mercado.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-primary-400">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary-400">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-primary-400">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos/credito-consignado" className="text-sm hover:text-primary-400">
                  Crédito Consignado
                </Link>
              </li>
              <li>
                <Link href="/produtos/consignado-privado" className="text-sm hover:text-primary-400">
                  Consignado Privado
                </Link>
              </li>
              <li>
                <Link href="/produtos/antecipacao-fgts" className="text-sm hover:text-primary-400">
                  Antecipação de FGTS
                </Link>
              </li>
              <li>
                <Link href="/produtos/emprestimo-pessoal" className="text-sm hover:text-primary-400">
                  Empréstimo Pessoal
                </Link>
              </li>
              <li>
                <Link href="/produtos/financiamento" className="text-sm hover:text-primary-400">
                  Financiamento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quem-somos" className="text-sm hover:text-primary-400">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/parceiros" className="text-sm hover:text-primary-400">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm hover:text-primary-400">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-sm hover:text-primary-400">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Av. Exemplo, 1234, Sala 567
                  <br />
                  Bairro, Cidade - UF, 12345-678
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <Link href="tel:+551199999999" className="text-sm hover:text-primary-400">
                  (11) 9999-9999
                </Link>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <Link href="mailto:contato@bevali.com.br" className="text-sm hover:text-primary-400">
                  contato@bevali.com.br
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Bevali Promotora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

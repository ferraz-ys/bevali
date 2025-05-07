import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

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
              <Link
                href="https://www.facebook.com/bevalifinanceira/?locale=pt_BR"
                target="_blank"
                className="hover:text-primary-400"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/_bevali?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="hover:text-primary-400"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.tiktok.com/@bevalipromotora" target="_blank" className="hover:text-primary-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M15 8v8a4 4 0 0 1-4 4" />
                  <line x1="15" y1="4" x2="15" y2="12" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Soluções Financeiras</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solucoes-financeiras/credito-consignado" className="text-sm hover:text-primary-400">
                  Crédito Consignado
                </Link>
              </li>
              <li>
                <Link href="/solucoes-financeiras/consignado-privado" className="text-sm hover:text-primary-400">
                  Consignado Privado
                </Link>
              </li>
              <li>
                <Link href="/solucoes-financeiras/antecipacao-fgts" className="text-sm hover:text-primary-400">
                  Antecipação de FGTS
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
                  Av. Sete de Setembro N° 493 - Sala 1
                  <br />
                  CEP: 19700-013 - Paraguaçu Paulista - São Paulo
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <Link href="tel:+551833617726" className="text-sm hover:text-primary-400">
                  (18) 3361-7726
                </Link>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <Link href="mailto:atendimento@bevali.com.br" className="text-sm hover:text-primary-400">
                  atendimento@bevali.com.br
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-sm">
          <p className="mb-4">© {new Date().getFullYear()} Bevali Promotora. Todos os direitos reservados.</p>
          <div className="text-white/70 text-xs leading-relaxed space-y-2">
            <p>CNPJ: 31.871.646/0001-78 | Razão Social: BEVALI LTDA</p>
            <p>
              A Bevali LTDA não realiza operações de crédito diretamente. Atuamos como uma plataforma digital e
              correspondente bancária, seguindo as diretrizes do Banco Central do Brasil conforme a Resolução nº 3.954,
              de 24 de fevereiro de 2011. Avaliações de crédito são feitas segundo a política da instituição financeira
              escolhida pelo usuário. Toda informação sobre condições e produtos é fornecida de forma transparente.
              Correspondente Autorizado: FACTA FINANCEIRA S.A. (CNPJ: 15.581.638/0001-30).
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

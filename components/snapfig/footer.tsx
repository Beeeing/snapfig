"use client"

import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Facebook } from "lucide-react"

const navLinks = [
  { href: "#value-props", label: "SnapFigの特徴" },
  { href: "#use-cases", label: "利用シーン" },
  { href: "#pricing", label: "料金プラン" },
  { href: "#faq", label: "よくある質問" },
]

const legalLinks = [
    { href: "#", label: "プライバシーポリシー" },
    { href: "#", label: "特定商取引法に基づく表記" },
    { href: "#", label: "利用規約" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.substring(1)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="md:col-span-1">
            <Link href="/" passHref>
              <Image
                src="/snapfig-logo.png"
                alt="SnapFig Logo"
                width={120}
                height={34}
                className="brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              大切な思い出を、AIで世界にひとつのフィギュアに。
            </p>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="font-semibold text-white tracking-wider">サイトマップ</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="hover:text-brand-lime transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white tracking-wider">規約等</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-lime transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-white tracking-wider">フォローする</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-lime transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-lime transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-lime transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} SnapFig. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

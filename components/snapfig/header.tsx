"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const navLinks = [
  { href: "#value-props", label: "SnapFigの特徴" },
  { href: "#use-cases", label: "利用シーン" },
  { href: "#process-section", label: "ご利用の流れ" },
  { href: "#gallery-section", label: "製作事例" },
  { href: "#pricing", label: "料金プラン" },
  { href: "#faq", label: "よくある質問" },
]

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsSheetOpen(false); // Close sheet on link click
    const sectionId = href.substring(1) // Remove #
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80; // height of the sticky header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const handleOrderClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsSheetOpen(false);
    const section = document.getElementById("order-section")
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <a href="#" onClick={(e) => scrollToSection(e, "#")} className="hover:opacity-80 transition-opacity">
            <Image
              src="/snapfig-logo.png"
              alt="SnapFig ロゴ"
              width={140}
              height={40}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 hover:text-brand-turquoise transition-colors font-medium pb-1 relative group text-sm"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
               <Button
                onClick={handleOrderClick}
                className="bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-bold"
                size="sm"
               >
                 今すぐ注文
               </Button>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[320px]">
                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-6">メニュー</h3>
                  <nav>
                    <ul className="space-y-6">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-lg text-gray-800 hover:text-brand-turquoise transition-colors font-medium w-full block"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                      <li className="border-t pt-6">
                        <Button
                          onClick={handleOrderClick}
                          className="w-full bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-bold text-lg py-6"
                        >
                           今すぐ注文
                         </Button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}

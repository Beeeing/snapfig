"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Sparkles, ShoppingCart } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-turquoise/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Floating circles */}
        <div className="absolute top-[5%] left-[10%] w-24 h-24 bg-brand-lime/30 rounded-full animate-float blur-sm" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[20%] right-[15%] w-20 h-20 bg-brand-turquoise/30 rounded-full animate-float blur-sm" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[15%] left-[20%] w-32 h-32 bg-brand-lime/30 rounded-full animate-float blur-sm" style={{ animationDelay: "2s" }} />
        
        {/* Rotating circles */}
        <div className="absolute top-[30%] right-[25%] w-72 h-72 border-4 border-brand-turquoise/40 rounded-full animate-rotate-slow blur-[2px]" />
        <div className="absolute bottom-[20%] left-[15%] w-56 h-56 border-4 border-brand-lime/40 rounded-full animate-rotate-slow blur-[2px]" style={{ animationDirection: "reverse" }} />
        
        {/* Additional decorative elements */}
        <div className="absolute top-[40%] left-[40%] w-16 h-16 bg-brand-turquoise/20 rotate-45 animate-pulse-scale blur-sm" />
        <div className="absolute bottom-[30%] right-[35%] w-20 h-20 bg-brand-lime/20 rotate-45 animate-pulse-scale blur-sm" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 sm:translate-x-1/3 w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] lg:w-[40vw] lg:h-[40vw] max-w-lg max-h-lg bg-brand-turquoise/30 rounded-full animate-pulse-scale blur-sm" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className="text-left animate-fade-in-up md:order-1"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            <div className="inline-block bg-brand-lime/90 rounded-full px-4 py-2 mb-4">
              <p className="text-base sm:text-lg font-bold text-gray-900">#SnapFig で話題沸騰中</p>
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
              大切な思い出を<br/>
              <span className="text-brand-turquoise">AIでフィギュアに。</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
              あなたの大切な一枚が、AI技術で世界にひとつのオリジナル3Dフィギュアに。最新技術で、思い出をもっと身近に、もっと特別に。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                size="lg"
                className="bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-bold text-lg w-full sm:w-auto px-8 py-5 sm:px-10 sm:py-6 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <ShoppingCart className="mr-3 h-6 w-6" />
                今すぐ注文する
              </Button>
            </div>
            <p className="text-brand-turquoise font-semibold text-base sm:text-lg mt-6">写真1枚で、あなただけのフィギュアを。</p>
          </div>
          <div
            className="md:order-2 mt-8 md:mt-0 animate-fade-in-up relative z-10"
            style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
          >
            <Image
              src="/person-holding-3d-figurine.png"
              alt="写真から3Dフィギュアへの変換イメージ"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl mx-auto object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

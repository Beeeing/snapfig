"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Gift, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Sサイズプラン",
    size: "高さ 約5cm",
    price: "3,000",
    features: ["コンパクトで飾りやすい", "プチギフトに最適", "最短3日で発送", "4種類のデザインから選択可能"],
    isPopular: false,
  },
  {
    name: "Mサイズプラン",
    size: "高さ 約7cm",
    price: "4,500",
    features: ["一番人気の定番サイズ", "ディテールと存在感のベストバランス", "最短3日で発送", "4種類のデザインから選択可能"],
    isPopular: true,
  },
  {
    name: "Lサイズプラン",
    size: "高さ 約10cm",
    price: "6,000",
    features: ["圧倒的な存在感", "細部まで最高クオリティ", "最短3日で発送", "4種類のデザインから選択可能"],
    isPopular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          選べる<span className="text-brand-turquoise">3つサイズ</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "bg-white rounded-xl shadow-lg border flex flex-col transition-transform duration-300 relative",
                plan.isPopular 
                  ? "border-brand-turquoise border-2 shadow-2xl lg:scale-105" 
                  : "border-gray-200",
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-turquoise text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center z-10">
                  <Star className="h-4 w-4 mr-1.5 fill-white" />
                  一番人気
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h3>
                  <p className="text-brand-turquoise font-semibold">{plan.size}</p>
                  <p className="text-5xl font-extrabold text-gray-900 mt-4">
                    {plan.price}
                    <span className="text-2xl font-semibold ml-1">円</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">(税込)</p>
                </div>
                <ul className="space-y-3 text-gray-700 flex-1 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-lime mr-3 flex-shrink-0 mt-1" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={cn(
                    "w-full font-bold text-lg py-3 mt-auto",
                    plan.isPopular
                      ? "bg-brand-lime hover:bg-brand-lime/90 text-gray-900 shadow-lg"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800",
                  )}
                  onClick={() => document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Gift className="mr-2 h-5 w-5" />
                  このプランを選ぶ
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-center text-gray-500">※ 別途送料がかかります。</p>
      </div>
    </section>
  )
}

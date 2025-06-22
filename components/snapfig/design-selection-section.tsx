"use client"

import Image from "next/image"
import { Sparkles, Palette, Crown, Leaf } from "lucide-react"

const designs = [
  {
    name: "スタンダード",
    description: "シンプルな台座付きのベーシックなデザイン",
    image: "/designs/standard.png",
    icon: Palette,
    features: ["クラシックなスタイル", "どんなシーンにも合う", "飽きのこないデザイン"],
  },
  {
    name: "アクション",
    description: "動きのあるポーズを強調するダイナミックな台座",
    image: "/designs/action.png",
    icon: Sparkles,
    features: ["躍動感あふれる表現", "スポーツシーンに最適", "エネルギッシュな印象"],
  },
  {
    name: "エレガント",
    description: "高級感のある装飾的な台座デザイン",
    image: "/designs/elegant.png",
    icon: Crown,
    features: ["上品で洗練された仕上がり", "特別な贈り物に最適", "プレミアム感のある装飾"],
  },
  {
    name: "ナチュラル",
    description: "自然素材を模した有機的なデザイン",
    image: "/designs/natural.png",
    icon: Leaf,
    features: ["温かみのある自然な質感", "リラックス空間にぴったり", "環境に優しいイメージ"],
  },
]

export default function DesignSelectionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-brand-turquoise">選べる</span>デザイン
          </h2>
          <p className="text-xl text-gray-600 mb-8">
          あなたの個性やシーンに合わせて、4つの異なるスタイルからお選びいただけます
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {designs.map((design, index) => {
            const IconComponent = design.icon
            return (
              <div 
                key={design.name} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={design.image}
                    alt={`${design.name}デザイン`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-5 w-5 text-brand-turquoise" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">#{index + 1}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-turquoise transition-colors duration-300">
                      {design.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {design.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {design.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-brand-turquoise uppercase tracking-wide">
                        選択可能
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-brand-lime rounded-full opacity-60" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-turquoise/10 to-brand-lime/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              どのデザインも追加料金なし！
            </h3>
            <p className="text-gray-600 mb-6">
              4つのデザインはすべて同じ価格でご提供。お客様の好みや用途に合わせて自由にお選びいただけます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Sparkles className="h-8 w-8 text-brand-turquoise mx-auto mb-2" />
                <p className="font-semibold text-gray-800">高品質素材</p>
                <p className="text-sm text-gray-600">すべて同じ高品質な3Dプリント素材を使用</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Crown className="h-8 w-8 text-brand-turquoise mx-auto mb-2" />
                <p className="font-semibold text-gray-800">精密加工</p>
                <p className="text-sm text-gray-600">どのデザインも同じ精密さで製作</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Palette className="h-8 w-8 text-brand-turquoise mx-auto mb-2" />
                <p className="font-semibold text-gray-800">自由選択</p>
                <p className="text-sm text-gray-600">注文時にお好みのデザインを選択</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
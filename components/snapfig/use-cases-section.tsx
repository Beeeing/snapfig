import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, User, Heart, PawPrint } from "lucide-react"

const useCases = [
  {
    icon: <Gift className="h-8 w-8 text-brand-turquoise" />,
    title: "大切な人へのギフトに",
    description:
      "誕生日や記念日のサプライズプレゼントとして。世界に一つの贈り物は、きっと忘れられない思い出になります。",
    imageSrc: "/gift-figurine-scene.png",
  },
  {
    icon: <User className="h-8 w-8 text-brand-turquoise" />,
    title: "自分へのご褒美に",
    description:
      "お気に入りのアバターや、理想の自分をフィギュアに。デスクに飾れば、毎日のモチベーションがアップします。",
    imageSrc: "/desk-figurine-motivation.png",
  },
  {
    icon: <Heart className="h-8 w-8 text-brand-turquoise" />,
    title: "思い出を形に",
    description:
      "結婚式や旅行など、特別な瞬間の服装やポーズをそのままフィギュアに。色褪せない思い出を、いつでもそばに。",
    imageSrc: "/wedding-memory-figurine.png",
  },
  {
    icon: <PawPrint className="h-8 w-8 text-brand-turquoise" />,
    title: "愛するペットを再現",
    description: "かわいいペットの姿を、いつでも撫でられるフィギュアに。虹の橋を渡った子のメモリアルとしても。",
    imageSrc: "/cute-corgi-figurine.png",
  },
]

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          <span className="text-brand-turquoise">SnapFig</span>は、こんなシーンで選ばれています
        </h2>
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-4 md:pb-0">
          {useCases.map((useCase) => (
            <Card
              key={useCase.title}
              className="flex-shrink-0 w-80 md:w-auto shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={useCase.imageSrc || "/placeholder.svg"}
                alt={useCase.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-brand-lime/20 rounded-full p-2 mr-4">{useCase.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800">{useCase.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Cpu, Rocket } from "lucide-react"

const features = [
  {
    icon: <Camera className="h-8 w-8 sm:h-10 sm:w-10 text-brand-turquoise" />,
    title: "📸 写真1枚で完結",
    description: "複雑な操作は一切不要。スマホの写真1枚でOK！あなたの思い出が形になります。",
  },
  {
    icon: <Cpu className="h-8 w-8 sm:h-10 sm:w-10 text-brand-turquoise" />,
    title: "🤖 AIモデリング",
    description: "最新AI技術が写真を元に3Dデータを作成。おしゃれでカワイイデザインに変換します。",
  },
  {
    icon: <Rocket className="h-8 w-8 sm:h-10 sm:w-10 text-brand-turquoise" />,
    title: "🚀 最短3日で発送",
    description: "ご注文からスピーディーに製作・発送。大切な瞬間をすぐにお届けします。",
  },
]

export default function ValuePropsSection() {
  return (
    <section id="value-props" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          SnapFigだけの<span className="text-brand-turquoise">特別体験</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <div className="mx-auto bg-brand-lime/20 rounded-full p-4 w-fit">{feature.icon}</div>
                <CardTitle className="mt-4 text-xl md:text-2xl font-semibold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 px-2">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg md:text-xl text-gray-700">
            <span className="font-bold text-brand-turquoise">500人以上</span>が体験！SNS投稿数{" "}
            <span className="font-bold text-brand-turquoise">#SnapFig 1,000件</span>突破！
          </p>
          <p className="text-md md:text-lg text-gray-600 mt-2">メディアでも話題の最新サービスです！</p>
        </div>
      </div>
    </section>
  )
}

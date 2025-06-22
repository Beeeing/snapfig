import { UploadCloud, ScanSearch, CuboidIcon as Cube, Printer, PackageCheck, ArrowDown } from "lucide-react"

const steps = [
  {
    icon: <UploadCloud className="h-10 w-10 sm:h-12 sm:w-12 text-brand-turquoise" />,
    title: "1. 写真アップロード",
    description: "お気に入りの写真を1枚選んで、専用フォームから簡単送信！",
  },
  {
    icon: <ScanSearch className="h-10 w-10 sm:h-12 sm:w-12 text-brand-turquoise" />,
    title: "2. AI解析処理",
    description: "最新AIがあなたの写真の特徴を解析します。",
  },
  {
    icon: <Cube className="h-10 w-10 sm:h-12 sm:w-12 text-brand-turquoise" />,
    title: "3. 3Dモデリング",
    description: "解析データから3DデータをAIが自動でモデリングします。",
  },
  {
    icon: <Printer className="h-10 w-10 sm:h-12 sm:w-12 text-brand-turquoise" />,
    title: "4. 3Dプリント",
    description: "最新鋭の3Dプリンターで、細部までこだわった精密造形。",
  },
  {
    icon: <PackageCheck className="h-10 w-10 sm:h-12 sm:w-12 text-brand-turquoise" />,
    title: "5. 完成・発送",
    description: "スピーディーに製作し、最短3日で発送！世界でひとつのフィギュアがご自宅へ。",
  },
]

export default function ProcessSection() {
  return (
    <section id="process-section" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          簡単<span className="text-brand-turquoise">5ステップ</span>でオリジナルフィギュアをGET！
        </h2>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          {/* Dashed line for desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-repeat-x bg-center -z-10"
            style={{ 
              backgroundImage: `linear-gradient(to right, #A8E6CF 50%, transparent 50%)`,
              backgroundSize: '20px 2px',
              width: '90%',
              transform: 'translateY(-50%)',
              marginLeft: '5%',
              marginRight: '5%',
            }}
          ></div>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-5 md:gap-6 pb-4 md:pb-0">
            {steps.map((step, index) => (
              <div key={step.title} className="flex-shrink-0 w-64 md:w-auto flex flex-col items-center text-center p-4">
                <div className="bg-brand-lime/20 rounded-full p-5 mb-4 relative z-10 bg-white">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

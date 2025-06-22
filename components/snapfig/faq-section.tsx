import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "どんな写真が適していますか？",
    answer:
      "顔や全身がはっきりと写っており、明るくピントが合っている写真が最適です。背景はシンプルな方がより綺麗に仕上がりますが、AIが賢く処理しますのでご安心ください。1MB以上の解像度を推奨します。",
  },
  {
    question: "製作から発送までどのくらいかかりますか？",
    answer:
      "ご注文（決済完了）から最短3日で発送いたします。製作の混雑状況や写真の複雑さにより、4〜5日いただく場合もございます。発送後は、お住まいの地域によりますが1〜3日程度でお届けとなります。",
  },
  {
    question: "配送はどのくらいかかりますか？",
    answer:
      "製作完了後、通常2-3営業日以内に発送いたします。お住まいの地域によって異なりますが、発送から1-3日程度でお届けとなります。",
  },
  {
    question: "写真のデータはどう扱われますか？",
    answer:
      "お客様からお預かりした写真データは、フィギュア製作目的以外には一切使用いたしません。製作完了後、一定期間保管の後、責任を持って削除いたします。プライバシーポリシーもご確認ください。",
  },
  {
    question: "返品・交換は可能ですか？",
    answer:
      "オーダーメイド製品の特性上、お客様都合での返品・交換は原則としてお受けできません。ただし、万が一製品に明らかな不備があった場合は、到着後7日以内にご連絡ください。状況を確認の上、対応させていただきます。",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          よくあるご質問 (FAQ)
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow border-b-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-left px-6 py-4 hover:no-underline hover:text-brand-turquoise">
                <span className="flex-1 text-left pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base px-6 pb-6 pt-0">
                <p className="border-t border-gray-200 pt-4">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

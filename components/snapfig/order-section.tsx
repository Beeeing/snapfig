"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, ShoppingCart, UploadCloud } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function OrderSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement actual form submission logic
    alert("ご注文ありがとうございます！実際にはここでフォームデータが送信されます。")
  }

  return (
    <section id="order-section" className="py-16 md:py-24 bg-brand-turquoise/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-brand-turquoise">SnapFig</span>を注文する
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              写真1枚で、あなただけのオリジナルフィギュアを手に入れよう！
            </p>
            <p className="mt-4 font-bold text-xl text-red-500 animate-pulse">
              【残りわずか】今月分は限定生産です！
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-semibold">お名前</Label>
              <Input id="name" type="text" placeholder="例: 山田 太郎" required className="py-6" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg font-semibold">メールアドレス</Label>
              <Input id="email" type="email" placeholder="例: snapfig@example.com" required className="py-6"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-confirm" className="text-lg font-semibold">メールアドレス（確認）</Label>
              <Input id="email-confirm" type="email" placeholder="例: snapfig@example.com" required className="py-6"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="size" className="text-lg font-semibold">サイズ選択</Label>
              <Select name="size" required>
                <SelectTrigger className="py-6">
                  <SelectValue placeholder="フィギュアのサイズを選んでください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="S">Sサイズ (高さ 約5cm) - 3,000円</SelectItem>
                  <SelectItem value="M">Mサイズ (高さ 約7cm) - 4,500円</SelectItem>
                  <SelectItem value="L">Lサイズ (高さ 約10cm) - 6,000円</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="design" className="text-lg font-semibold">デザイン選択</Label>
              <Select name="design" required>
                <SelectTrigger className="py-6">
                  <SelectValue placeholder="フィギュアのデザインを選んでください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realistic">リアル風デザイン</SelectItem>
                  <SelectItem value="chibi">ちびキャラ風デザイン</SelectItem>
                  <SelectItem value="anime">アニメ風デザイン</SelectItem>
                  <SelectItem value="custom">カスタムデザイン（要相談）</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="photo" className="text-lg font-semibold">写真アップロード</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-brand-turquoise bg-gray-50 hover:bg-gray-100 transition">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-gray-600">クリックしてファイルを選択</p>
                <Input id="photo" type="file" required className="hidden" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-lg font-semibold">ご要望・その他</Label>
              <Textarea id="notes" placeholder="（任意）服装やポーズに関するご希望、その他特記事項があればご記入ください。" rows={4}/>
            </div>

            <Alert className="border-brand-lime bg-brand-lime/10">
              <AlertCircle className="h-5 w-5 text-brand-lime-darker" />
              <AlertTitle className="font-bold text-brand-lime-darker">お支払いについて</AlertTitle>
              <AlertDescription className="text-brand-lime-darker">
                フォーム送信後、ご入力のメールアドレス宛にSTORES決済用のリンクをお送りします。
                決済完了をもって正式なご注文受付となります。
              </AlertDescription>
            </Alert>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-bold text-xl py-7 shadow-lg"
            >
              <ShoppingCart className="mr-3 h-6 w-6" />
              注文を確定する
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

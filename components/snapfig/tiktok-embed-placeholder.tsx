import { PlayCircle, MessageCircle, Heart, Share2, Music2 } from "lucide-react"
import Image from "next/image"

export default function TiktokEmbedPlaceholder() {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          <span className="text-brand-turquoise">#SnapFig</span> で話題沸騰中！TikTok投稿をチェック
        </h2>
        <div className="max-w-sm mx-auto bg-black rounded-xl shadow-xl overflow-hidden p-1.5">
          <div className="relative aspect-[9/16] bg-gray-700 rounded-lg overflow-hidden">
            {/* Placeholder for video content */}
            <Image
              src="/tiktok-figurine-video.png"
              alt="TikTok Video Placeholder"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-white/70" />
            </div>

            {/* Overlay with TikTok UI elements */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <div className="flex items-end justify-between">
                <div className="w-3/4">
                  <p className="font-semibold text-sm">@snapfig_fan_123</p>
                  <p className="text-xs mt-1 truncate">
                    見てみてー！SnapFigで作ってもらったフィギュアが可愛すぎる😍 #SnapFig #3Dフィギュア #オリジナルグッズ
                    #推し活
                  </p>
                  <div className="flex items-center mt-1.5">
                    <Music2 className="w-3 h-3 mr-1.5" />
                    <p className="text-xs truncate">オリジナル楽曲 - SnapFig公式</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden mb-1">
                      <Image src="/diverse-user-avatars.png" alt="User Avatar" width={40} height={40} />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Heart className="w-7 h-7" fill="white" />
                    <span className="text-xs mt-0.5">12.3K</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MessageCircle className="w-7 h-7" />
                    <span className="text-xs mt-0.5">234</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Share2 className="w-7 h-7" />
                    <span className="text-xs mt-0.5">102</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

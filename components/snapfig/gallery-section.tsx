"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const galleryItems = [
  {
    beforeSrc: "/smiling-woman.png",
    afterSrc: "/3d-smiling-woman-figurine.png",
    alt: "製作事例1：人物フィギュア",
  },
  {
    beforeSrc: "/cute-corgi.png",
    afterSrc: "/cute-corgi-figurine.png",
    alt: "製作事例2：ペットフィギュア",
  },
  {
    beforeSrc: "/cosplay-before-figurine.png",
    afterSrc: "/cosplay-figurine.png",
    alt: "製作事例3：コスプレフィギュア",
  },
  {
    beforeSrc: "/figurine-couple.png",
    afterSrc: "/couple-figurine-3d.png",
    alt: "製作事例4：カップルフィギュア",
  },
  {
    beforeSrc: "/anime-figurine-fanart.png",
    afterSrc: "/placeholder.svg?width=300&height=300",
    alt: "製作事例5：アニメキャラクター",
  },
  {
    beforeSrc: "/placeholder.svg?width=300&height=300",
    afterSrc: "/placeholder.svg?width=300&height=300",
    alt: "製作事例6：オリジナルキャラクター",
  },
]

export default function GallerySection() {
  return (
    <section id="gallery-section" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          驚きの<span className="text-brand-turquoise">仕上がり</span>をご覧ください
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          「こんなカワイイデザインに！」あなたの写真も、こんな素敵なフィギュアに。
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {galleryItems.map((item, index) => (
              <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <div className="grid grid-cols-2 gap-2 items-center w-full">
                        <div>
                          <p className="text-center font-semibold mb-2 text-gray-700 text-sm">Before<br className="sm:hidden"/>(写真)</p>
                          <Image
                            src={item.beforeSrc || "/placeholder.svg"}
                            alt={`${item.alt} - Before`}
                            width={150}
                            height={150}
                            className="rounded-md object-cover aspect-square mx-auto"
                          />
                        </div>
                        <div>
                          <p className="text-center font-semibold mb-2 text-gray-700 text-sm">
                            After<br className="sm:hidden"/>(フィギュア)
                          </p>
                          <Image
                            src={item.afterSrc || "/placeholder.svg"}
                            alt={`${item.alt} - After`}
                            width={150}
                            height={150}
                            className="rounded-md object-cover aspect-square mx-auto"
                          />
                        </div>
                      </div>
                      <p className="mt-3 text-center font-medium text-gray-800 text-sm">{item.alt}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}

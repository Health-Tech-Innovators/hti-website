import { YouTubeEmbed } from '@/components/youtube-embed'

export const metadata = {
  title: 'Demo',
}

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="space-y-4 lg:col-span-3">
          <h1 className="text-pretty text-2xl tracking-tight text-gray-900 sm:text-3xl text-right">Demo Video</h1>
          <p className="text-gray-700 text-m text-right">
          VigeoDASH is an operational intelligence platform for healthcare providers with end-to-end revenue cycle management specializing in the homecare market.  VigeoDASH is actively pursuing physician practices that offer telehealth and transitional care.
          </p>
        </div>
        <div className="aspect-video lg:col-span-9">
          <YouTubeEmbed 
            videoId="AxSxuli2AbI" 
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
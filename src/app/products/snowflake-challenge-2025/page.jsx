import { YouTubeEmbed } from '@/components/youtube-embed'

export const metadata = {
  title: 'Snowflake Challenge 2025',
}

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="space-y-4 lg:col-span-3">
          <h1 className="text-pretty text-2xl tracking-tight text-gray-900 sm:text-3xl text-right">Snowflake Challenge 2025</h1>
          <p className="text-gray-700 text-m text-right">
          VigeoDASH is an operational intelligence platform for healthcare providers with end-to-end revenue cycle management specializing in the homecare market.  VigeoDASH is actively pursuing physician practices that offer telehealth and transitional care.
          </p>
        </div>
        <div className="aspect-video lg:col-span-9">
          <YouTubeEmbed 
            // TODO: change to actual video id
            videoId="AxSxuli2AbI" 
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
        <a
          href="https://drive.google.com/file/d/1jkEHlvq1ygKyynOOFD5Fle7DWiDc9GjC/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#0d9e85] hover:bg-[#0b8a74]"
        >
          Investor Summary
        </a>
        <a
          href="https://drive.google.com/file/d/1V6zNvhzNVQbnBtSIhxcSIaqMfiCZ29Be/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#0d9e85] hover:bg-[#0b8a74]"
        >
          Pitch Deck
        </a>
      </div>
    </div>
  )
}
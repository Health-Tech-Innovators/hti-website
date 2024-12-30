'use client'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'

const features = [
  {
    name: 'Who we are',
    description:
    'VigeoDASH is a cloud-based revenue cycle management platform that helps healthcare organizations streamline their revenue cycle processes. It provides a comprehensive suite of tools and features to help healthcare organizations manage their revenue cycle processes more efficiently.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'What we do',
    description: 'We provide a comprehensive suite of tools and features to help healthcare organizations manage their revenue cycle processes more efficiently.',
    icon: LockClosedIcon,
  },
  {
    name: 'Industries we serve',
    description: 'VigeoDashTM was created by and for home healthcare professionals. We understand all aspects of the Post-Acute Care Continuum (PACC). Experiencing our own industry challenges prompted the need for an impactful solution. With a custom approach, we utilize technology convergence of multiple platforms into one dashboard. The unique solution extracts, translates and loads electronic healthcare record data that leads to improved operational throughput. Catering to diverse industries, we specialize in optimizing revenue cycles and financial management through our billing platform and RCM services. From home health and hospice to physician practices and billing companies, we empower organizations to streamline operations, reduce indirect costs and maximize collections.',
    icon: ServerIcon,
  },
]

const carouselImages = [
  `${process.env.NEXT_PUBLIC_BASE_PATH}/product/vigeodash_files/1-1fc9bf12-1440w.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/product/vigeodash_files/2-a476f3c4-1440w.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/product/vigeodash_files/3-bfbcee7e-1440w.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/product/vigeodash_files/4-da63deff-1440w.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/product/vigeodash_files/5-4d4db788-1440w.png`,
]

export default function VigeodashContent() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
    // Auto-advance the slideshow every 5 seconds
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % carouselImages.length
        )
      }, 5000)
  
      return () => clearInterval(timer)
    }, [])
  
    return (
      <div className="overflow-hidden bg-gray py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/product/vigeodash_files/vigeodash+logo+tm-4x-1920w.png`} 
              alt="VigeoDASH" 
              className="h-28 w-auto mx-auto"
            />
          </div>
          {/* Slideshow Section */}
          <div className="mb-16">
            <div className="bg-[#25313f] p-16 overflow-hidden relative">
              <img
                alt={`Product screenshot ${currentImageIndex + 1}`}
                src={carouselImages[currentImageIndex]}
                className="w-full max-w-5xl mx-auto rounded-xl transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-[#0d9e85]' : 'bg-gray-400'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base/7 font-semibold text-[#25313f] text-center">                
              Patient care is your priority. Saving you time and money is ours!
            </h2>
            
            <p className="mt-6 text-lg/8 text-gray-600 text-center">
              Overwhelmed by intricate revenue cycle management processes? It is time for a fresh perspective. With VigeoDASH you can assess episode utilization, claims and denial data for enhanced operational efficiency and boosted collections.
            </p>
            <dl className="mt-10 space-y-8 text-base/7 text-gray-600">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#0d9e85]" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
            
            <div className="mt-10 text-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/products/pricing`}
                className="inline-flex items-center rounded-md bg-[#0d9e85] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#0b8a74] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d9e85]"
              >
                VigeoDASH Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
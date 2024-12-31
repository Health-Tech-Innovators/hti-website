'use client'
import { usePathname } from 'next/navigation'
// import { getBackgroundClass } from '@/utils/backgroundStyles'

export const getBackgroundClass = (pathname) => {
    const pathStyles = {
      '/services': 'bg-[#3c4c5e]',
      '/about': 'bg-[#3c4c5e]',
      '/team': 'bg-[#3c555d]',
      '/products/pricing': 'bg-[#3c555d]',
      'default': 'bg-zinc-100' 
    }
  
    return pathStyles[pathname] || pathStyles.default
  }

export function DynamicBackground({ children }) {
  const pathname = usePathname()
  const backgroundClass = getBackgroundClass(pathname)

  return (
    <div className={`min-h-screen ${backgroundClass}`}>
      {children}
    </div>
  )
}
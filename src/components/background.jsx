'use client'
import { usePathname } from 'next/navigation'
// import { getBackgroundClass } from '@/utils/backgroundStyles'

export const getBackgroundClass = (pathname) => {
    const pathStyles = {
      '/services': 'bg-[#3c4c5e] dark:bg-[#3c4c5e]',
    //   '/about': 'bg-gray-100 dark:bg-gray-900',
      // Add more paths and their corresponding background classes
      'default': 'bg-zinc-100 dark:bg-zinc-900' // default background
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
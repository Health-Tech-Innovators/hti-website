"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import { DropdownMenu, DropdownItem, DropdownLabel } from '@/components/dropdown'

function ServicesDropdownMenu({ anchor }) {
  const pathname = usePathname()

  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem 
        href="/services/healthcare"
        className={`cursor-pointer ${pathname === '/services/healthcare' ? 'font-bold' : ''}`}
      >
        <ShieldCheckIcon />
        <DropdownLabel>Healthcare Consulting</DropdownLabel>
      </DropdownItem>
      <DropdownItem 
        href="/services/pharma"
        className={`cursor-pointer ${pathname === '/services/pharma' ? 'font-bold' : ''}`}
      >
        <LightBulbIcon />
        <DropdownLabel>Pharma Data Management</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  )
}

function ProductsDropdownMenu({ anchor }) {
  const pathname = usePathname()

  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem 
        href="/products/vigeodash"
        className={`cursor-pointer ${pathname === '/products/vigeodash' ? 'font-bold' : ''}`}
      >
        <ShieldCheckIcon />
        <DropdownLabel>VigeoDASH</DropdownLabel>
      </DropdownItem>
      {/* <DropdownItem 
        href="/products/pricing"
        className={`cursor-pointer ${pathname === '/products/pricing' ? 'font-bold' : ''}`}
      >
        <LightBulbIcon />
        <DropdownLabel>VigeoDASH Pricing</DropdownLabel>
      </DropdownItem> */}
    </DropdownMenu>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState('')

  // Update activeLink when pathname changes
  useEffect(() => {
    // Remove leading slash and map to our link names
    const path = pathname.slice(1) || 'home'
    setActiveLink(path)
  }, [pathname])

  const getLinkClass = (linkName) => {
    // Check if the current path starts with the section name
    const isActive = linkName === 'home' 
      ? activeLink === 'home'
      : pathname.startsWith(`/${linkName}`)

    return isActive
      ? "rounded-md bg-gray-900 px-3 py-2 text-sm md:text-base font-medium text-white"
      : "rounded-md px-3 py-2 text-sm md:text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
  }

  return (
    <Disclosure as="nav" className="bg-[#25313f]">
      <div className="mx-auto max-w-7.25xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-24 items-center justify-between">
          <div className="shrink-0">
            <a href="/hti-website" onClick={() => setActiveLink('home')}>
              <img
                alt="Your Company"
                src="/logo/hti_long.jpg"
                className="h-24 w-auto cursor-pointer"
              />
            </a>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-5 ">
              {/* <a 
                href="/" 
                onClick={() => setActiveLink('home')}
                className={getLinkClass('home')}
              >
                Home
              </a> */}
              <Menu as="div" className="relative">
                <MenuButton className={getLinkClass('products')}>
                  Products
                </MenuButton>
                <ProductsDropdownMenu />
              </Menu>
              {/* <Menu as="div" className="relative">
                <MenuButton className={getLinkClass('services')}>
                  Services
                </MenuButton>
                <ServicesDropdownMenu />
              </Menu> */}
              <a
                href="/hti-website/services"
                onClick={() => setActiveLink('services')}
                className={getLinkClass('services')}
              >
                Services
              </a>
              <a
                href="/hti-website/team"
                onClick={() => setActiveLink('team')}
                className={getLinkClass('team')}
              >
                Team
              </a>
              <a
                href="/hti-website/contact"
                onClick={() => setActiveLink('contact')}
                className={getLinkClass('contact')}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}

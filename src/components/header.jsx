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
      <DropdownItem 
        href="/products/demo"
        className={`cursor-pointer ${pathname === '/products/demo' ? 'font-bold' : ''}`}
      >
        <LightBulbIcon />
        <DropdownLabel>Demo</DropdownLabel>
      </DropdownItem>
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
      {({ open }) => (
        <div className="mx-auto max-w-7.25xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-24 items-center justify-between">
            <div className="shrink-0">
              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`} onClick={() => setActiveLink('home')}>
                <img
                  alt="Your Company"
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo/hti_long.jpg`}
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
                    Product
                  </MenuButton>
                  <ProductsDropdownMenu />
                </Menu>
                {/* <Menu as="div" className="relative">
                  <MenuButton className={getLinkClass('services')}>
                    Services
                  </MenuButton>
                  <ServicesDropdownMenu />
                </Menu> */}
                {/* <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH}/products/vigeodash`}
                  onClick={() => setActiveLink('products')}
                  className={getLinkClass('products')}
                >
                  Products
                </a> */}
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH}/services`}
                  onClick={() => setActiveLink('services')}
                  className={getLinkClass('services')}
                >
                  Services
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH}/team`}
                  onClick={() => setActiveLink('team')}
                  className={getLinkClass('team')}
                >
                  Team
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH}/contact`}
                  onClick={() => setActiveLink('contact')}
                  className={getLinkClass('contact')}
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button>
              <Menu as="div" className="relative">
                <MenuButton
                  as={Disclosure.Button}
                  className={getLinkClass('products')}
                >
                  Product
                </MenuButton>
                <ProductsDropdownMenu />
              </Menu>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href={`/services`}
                onClick={() => setActiveLink('services')}
                className={getLinkClass('services')}
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href={`/team`}
                onClick={() => setActiveLink('team')}
                className={getLinkClass('team')}
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href={`/contact`}
                onClick={() => setActiveLink('contact')}
                className={getLinkClass('contact')}
              >
                Contact Us
              </Disclosure.Button>
            </div>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  )
}

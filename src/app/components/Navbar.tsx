'use client'

import React, { ReactNode, useState } from "react"
import { ShoppingBagIcon, UserCircleIcon, Bars3Icon, SparklesIcon } from '@heroicons/react/24/outline'

export function NavItem({ href, children }: { href: string, children: ReactNode}) {
    return <a href={href}
    className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
        {children}
    </a> 
}

export function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    const mobileHiddenClass = isOpen ? '' : 'animated-hidden'

    
    return (
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/products" className="flex items-center space-x-3 rtl:space-x-reverse ">
        Example Shop
    </a>
    <button onClick={() => {setIsOpen(!isOpen)}} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
       <Bars3Icon className="size-6" />

    </button>
    <div className={`${mobileHiddenClass} w-full md:block md:w-auto lg:block`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <NavItem href="/products">
            <span className="flex flex-1 flex-row gap-2 justify-center items-center">
            <SparklesIcon className="size-6 hidden sm:block text-white" />
            <span className="text-white">Browse Products</span>
            </span>
        </NavItem>
        </li>
        <li>
        <NavItem href="/cart">
            <ShoppingBagIcon className="size-6 hidden sm:block text-white" />
            <span className="sm:hidden block">Cart</span>
        </NavItem>
        </li>
        <li>
        <NavItem href="/profile">
            <UserCircleIcon className="size-6 hidden sm:block text-white" />
            <span className="sm:hidden block">Me</span>
        </NavItem>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}
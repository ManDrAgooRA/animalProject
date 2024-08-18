'use client'

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'

import { HEADER_LINKS } from './links'

const Header = () => {
  const pathname = usePathname()
  return (
    <div className='flex justify-center bg-blue-600 py-2 align-middle text-neutral-50'>
      {HEADER_LINKS.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('mr-1 rounded p-2', {
              'bg-sky-100 text-blue-600': pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}

export default Header

'use client'

import Link from 'next/link'
import React from 'react'

const links = [{
  href: "/",
  label: "Home"
},
{
  href: "/requests",
  label: "Requests"
},
{
  href: "/reports",
  label: "Reports"
},
{
  href: "/profile",
  label: "Profile"
},
]

export default function Navbar() {
  return (
    <div className='bg-white shadow shadow-black/80 py-4 px-16 flex justify-between items-center'>
      <div className="">
        <div className="font-bold text-3xl">
          Barangay Kalikid Sur Online Registry
        </div>
        <div className="text-black/50">
          Digital System for Registered Residents
        </div>
      </div>

      <nav>
        <ul className='flex items-center gap-6'>
          {links.map(({ href, label }) => (
            <Link href={href} key={href} className='bg-blue-200 rounded text-sm font-semibold px-6 py-2'>
              {label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

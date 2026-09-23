import { Check, SaveCheck } from 'lucide-react'
import React from 'react'

const guides = [
  {
    title: "Malinaw at Maliwanag (Clear Photo)",
    desc: "Iwasan ang blurred o malabong litrato.",
  },
  {
    title: "Walang Silaw o Anino (No Glare)",
    desc: "Huwag gumamit ng flash na tumatama sa mukha.",
  },
  {
    title: "Kitang-kita ang 4 na Sulok (Corners)",
    desc: "Buong card dapat ang nakikita sa kuha.",
  },
  {
    title: "Nababasa ang Detalye (Legible Text)",
    desc: "Dapat malinaw ang bawat letra at numero.",
  },
]

export default function DocumentGuide() {
  return (
    <div className="bg-white rounded-xl p-8 h-fit">
      <div className="flex gap-4 items-center">
        <SaveCheck />
        <div className="">
          <h3 className='font-semibold text-xl'>Alituntunin sa Dokumento</h3>
          <p className='text-sm'>Checklist para sa mabilisang pagsang-ayon</p>
        </div>
      </div>
      <ul className='space-y-4 mt-4'>
        {guides.map(({ desc, title }) => (
          <li key={title} className='flex items-center gap-2'>
            <Check className='p-1 rounded-full bg-green-500' />
            <div className="">
              <div className="font-semibold">{title}</div>
              <div className="text-sm">{desc}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-blue-200 p-4 rounded-lg mt-4">
        test image here
      </div>
    </div>
  )
}

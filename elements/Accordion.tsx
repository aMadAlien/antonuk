'use client'

import { useState } from "react"
import { FAQ } from "@/types/common";


export default function Accordion({ data }: { data: FAQ[] }) {
  const [active, setActive] = useState<number | null>(0);

  if (!data || !data.length) return null;

  return (
    <div className="accordion">
      {
        data.map((item, i) => (
          <div key={i} className="accordion__elem">
            <button
              type="button"
              className="accordion__title"
              onClick={() => setActive(i === active ? null : i)}
            >
              <span>{item.title}</span>
              <span className={`plusminus ${active === i ? 'active' : ''}`} />
            </button>

            <div className={`accordion__text ${active === i ? 'active' : ''}`}>
              {item.text}
            </div>
          </div>
        ))
      }
    </div>
  )
}

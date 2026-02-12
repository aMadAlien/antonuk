'use client'

import Image, { StaticImageData } from "next/image";
import { useMemo, useState } from "react";

export default function Gallery({ images }: { images: StaticImageData[] }) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const cellsNumber = 12;
  const imagesToDisplay = expanded
    ? images
    : images.slice(0, cellsNumber);

  return (
    <div className="px-container">
      <div className="grid grid-cols-4 gap-2">
        {
          imagesToDisplay.map((item, index) => (
            <Image
              key={index}
              src={item}
              width={560}
              height={100}
              alt="photo"
              className="aspect-square w-full ml-auto object-cover rounded-[4px] hover:brightness-80 transition-all duration-500"
            />
          ))
        }
      </div>

      {
        images.length > cellsNumber &&
        <button
          type="button"
          className="block mt-9 mx-auto px-10 h-[50px] bg-black rounded-[10px] text-white text-base !text-center leading-[50px] hover:bg-gray-500 transition-colors duration-300"
          onClick={() => setExpanded(prev => !prev)}
        >
          {expanded ? 'Згорнути' : 'Розгорнути'}
        </button>
      }
    </div>
  )
}

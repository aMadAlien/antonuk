'use client'

import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Gallery({ images }: { images: StaticImageData[] }) {
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  const cellsNumber = 12;
  const hasMore = images.length > cellsNumber;

  const measure = useCallback(() => {
    const grid = gridRef.current;
    if (!grid || !hasMore) return;

    if (expanded) {
      setMaxHeight(grid.scrollHeight);
    } else {
      const items = grid.children;
      if (items.length >= cellsNumber) {
        const gridRect = grid.getBoundingClientRect();
        const lastRect = items[cellsNumber - 1].getBoundingClientRect();
        setMaxHeight(lastRect.bottom - gridRect.top);
      }
    }
  }, [expanded, hasMore]);

  useEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <div className="px-container">
      <div
        ref={gridRef}
        className="grid grid-cols-4 gap-2 overflow-hidden transition-[max-height] duration-700 ease-in-out"
        style={maxHeight !== undefined ? { maxHeight: `${maxHeight}px` } : undefined}
      >
        {images.map((item, index) => (
          <Image
            key={index}
            src={item}
            width={400}
            height={400}
            alt="photo"
            className="aspect-square w-full ml-auto object-cover rounded-[4px] hover:brightness-80 transition-all duration-500"
          />
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          className="block mt-9 mx-auto px-10 h-[50px] bg-black rounded-[10px] text-white text-base !text-center leading-[50px] hover:bg-gray-500 transition-colors duration-300"
          onClick={() => setExpanded(prev => !prev)}
        >
          {expanded ? 'Згорнути' : 'Розгорнути'}
        </button>
      )}
    </div>
  )
}

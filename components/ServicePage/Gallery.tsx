'use client'

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import ZoomedGallery from "./ZoomedGallery";
import { Media } from "@/types/common";
import { VideoSlide } from "@/elements/VideoSlide";

export default function Gallery({ media }: { media: Media[] }) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [openLightbox, setOpenLightbox] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  const cellsNumber = 12;
  const hasMore = media?.length > cellsNumber;

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

  if (!media || !media.length) return null
  return (
    <div className="px-container">
      <div
        ref={gridRef}
        className="grid grid-cols-4 gap-2 overflow-hidden transition-[max-height] duration-700 ease-in-out"
        style={maxHeight !== undefined ? { maxHeight: `${maxHeight}px` } : undefined}
      >
        {media.map((item, index) =>
          <div
            key={index}
            onClick={() => setOpenLightbox(index)}
            className="aspect-square w-full ml-auto rounded-[4px] hover:brightness-80 transition-all duration-500"
          >
            {
              item.mediaType === 'photo' ?
                <Image
                  src={item.mediaUrl}
                  alt="Slide"
                  loading="lazy"
                  className="object-cover" />
                : <VideoSlide src={item.mediaUrl as string} />
            }
          </div>
        )}
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

      {openLightbox !== null && (
        <ZoomedGallery
          media={media}
          currentSlide={openLightbox}
          onClose={() => setOpenLightbox(null)}
        />
      )}
    </div>
  )
}

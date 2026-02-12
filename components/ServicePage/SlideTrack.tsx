import React, { useEffect, useRef } from 'react'
import { SlideTrackProps } from '@/types/common';
import { VideoSlide } from '@/elements/VideoSlide';
import Image from 'next/image';

const SlideTrack = ({ media, activeMedia, onSelect }: SlideTrackProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slidesRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentSlide = slidesRefs.current[activeMedia];
    const container = scrollContainerRef.current;

    if (currentSlide && container) {
      currentSlide.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [activeMedia]);


  return (
    <div
      ref={scrollContainerRef}
      className='flex gap-2 px-[100px] overflow-x-auto'
    >
      {media.map((item, index) => (
        <div
          key={index}
          ref={(el) => { (slidesRefs.current[index] = el) }}
          className={`zoomed-gallery__slide cursor-pointer
            ${index !== activeMedia ? 'zoomed-gallery__slide--unselected' : ''}`}
          onClick={() => onSelect(index)}
        >
          {(item.mediaType === 'photo' || item.mediaType === 'picture') ? (
            <Image
              src={item.mediaUrl}
              width={560}
              height={100}
              alt="photo"
              // className="lg:h-[65vh] md:w-[90%] ml-auto object-cover rounded-[8px] hover:brightness-80 transition-all duration-500"
            />
          ) : (
            <VideoSlide src={item.mediaUrl} />
          )}
        </div>
      ))}
    </div>
  )
}

export default SlideTrack
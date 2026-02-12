'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image';
import SlideTrack from './SlideTrack';
import { VideoSlide } from '@/elements/VideoSlide';
import useArrowNavigation from '@/hooks/useArrowNavigation';
import { Media } from '@/types/common';
import ArrowIcon from '../icons/ArrowIcon';
import CrossIcon from '../icons/CrossIcon';
import useIsMobile from '@/hooks/useIsMobile';
import Slider from '@/elements/slider/Slider';


const ZoomedGallery = (
  { media, currentSlide, onClose }:
    {
      media: Media[]
      currentSlide?: number
      onClose: () => void
    }
) => {
  const [activeMedia, setActiveMedia] = useState<number>(0);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  const goLeft = useCallback(() => {
    if (activeMedia > 0) setActiveMedia((prev) => prev - 1);
  }, [activeMedia]);

  const goRight = useCallback(() => {
    if (activeMedia < media.length - 1) setActiveMedia((prev) => prev + 1);
  }, [activeMedia]);

  useArrowNavigation(goLeft, goRight);

  useEffect(() => {
    setPortalTarget(document.getElementById('gallery-portal'));
  }, []);

  useEffect(() => {
    const pageContent = document.getElementById('page-content');
    document.body.style.overflow = 'hidden';
    if (pageContent) pageContent.style.filter = 'blur(4px)';
    return () => {
      document.body.style.overflow = '';
      if (pageContent) pageContent.style.filter = '';
    };
  }, []);

  useEffect(() => {
    if (currentSlide === undefined) return;
    setActiveMedia(currentSlide);
  }, [currentSlide])

  // close gallery on ESC click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const content = (
    <div className='fixed w-screen h-[100dvh] bg-[#12161dd6] z-[100] top-0 left-0 flex flex-col md:pt-[84px] pb-6 md:pb-2'>
      <button
        onClick={onClose}
        title="close button"
        className='absolute top-[28px] md:top-[58px] right-[28px] md:right-[58px]'
        type="button">
        <CrossIcon />
      </button>

      <div className='flex items-center justify-between flex-grow-1 md:px-12'>
        <button
          type='button'
          title='prev slide'
          disabled={activeMedia === 0}
          onClick={goLeft}
          className={`w-[48px] h-[48px] flex items-center justify-center rounded-full
                      rotate-90 shrink-0 max-md:hidden transition-all duration-500
                      ${activeMedia === 0 ? 'bg-gray-500' : 'bg-white'}`}
        >
          <ArrowIcon />
        </button>

        {
          isMobile ?
            <Slider
              activeSlide={activeMedia}
              slides={media}
              onChange={setActiveMedia}
            />
            :
            <div className='zoomed-gallery__slide zoomed-gallery__slide--active'>
              {media[activeMedia] &&
                (media[activeMedia].mediaType === 'photo') ?
                <Image
                  src={media[activeMedia].mediaUrl}
                  alt={`Slide ${activeMedia}`}
                  loading="lazy"
                  fill
                  className="object-cover" />
                : <VideoSlide src={media[activeMedia].mediaUrl as string} />
              }
            </div>
        }

        <button
          type='button'
          title='next slide'
          disabled={activeMedia === media.length - 1}
          onClick={goRight}
          className={`w-[48px] h-[48px] flex items-center justify-center rounded-full
                      -rotate-90 shrink-0 max-md:hidden transition-all duration-500
                      ${activeMedia === media.length - 1 ? 'bg-gray-500' : 'bg-white'}`}
        >
          <ArrowIcon />
        </button>
      </div>

      <div className='mt-6 mb-12 text-center text-white font-medium leading-140 text-base'>
        {activeMedia + 1}/{media.length}
      </div>

      <SlideTrack
        media={media}
        activeMedia={activeMedia}
        onSelect={setActiveMedia}
      />
    </div>
  )

  if (!portalTarget) return null;
  return createPortal(content, portalTarget);
}

export default ZoomedGallery
'use client'

import { useRef } from 'react'
import { useSwipe } from '@/hooks/useSwipe';
import { VideoSlide } from '../VideoSlide';
import Image from 'next/image';
import { Media } from '@/types/common';


const SlideContent = ({ slides, activeSlide, preloadIndices = [] }: {
    slides: Media[],
    activeSlide: number,
    preloadIndices?: number[]
}) => {
    if (!slides?.length) return null;


    return (
        <>
            {slides.map((item, index) => (
                <div className="images-slider__track" key={index}>
                    {item.mediaType === 'photo' ?
                        <Image
                            src={item.mediaUrl}
                            alt=''
                            loading="lazy"
                            fill
                            className="object-cover" />
                        : <VideoSlide src={item.mediaUrl as string} />
                    }
                </div>
            ))}
        </>
    )
}

export interface SliderProps {
    activeSlide: number
    slides: Media[]
    onChange: (arg: number) => void
}

const Slider = ({ activeSlide, slides, onChange }: SliderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    if (!slides.length) return null;

    const { swipeHandlers } = useSwipe({
        slidesLength: slides.length,
        containerRef,
        currentIndex: activeSlide,
        onChange,
    });

    return (
        <div className='images-slider__container' ref={containerRef}>
            <div className="flex relative images-slider__track" {...swipeHandlers}>
                <SlideContent slides={slides} activeSlide={activeSlide} />
            </div>
        </div>
    )
}

export default Slider
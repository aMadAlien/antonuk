'use client';

import { ReactNode, useEffect, useRef } from 'react';

export default function HorizontalSlider({ sliders }: { sliders: ReactNode[] }) {
  const sliderRef = useRef<HTMLUListElement | null>(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const end = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const start = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      slider.classList.add('active');

      const pageX =
        'touches' in e ? e.touches[0].pageX : e.pageX;

      startX = pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const move = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;

      e.preventDefault();

      const pageX =
        'touches' in e ? e.touches[0].pageX : e.pageX;

      const x = pageX - slider.offsetLeft;
      const dist = x - startX;
      slider.scrollLeft = scrollLeft - dist;
    };

    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);

    return () => {
      slider.removeEventListener('mousedown', start);
      slider.removeEventListener('touchstart', start);
      slider.removeEventListener('mousemove', move);
      slider.removeEventListener('touchmove', move);
      slider.removeEventListener('mouseleave', end);
      slider.removeEventListener('mouseup', end);
      slider.removeEventListener('touchend', end);
    };
  }, []);

  if (!sliders || !sliders.length) return null;
  
  return (
    <ul ref={sliderRef} className="slider pl-[80px]">
      {sliders.map((slide, i) => (
        <li key={i} className="slide">{slide}</li>
      ))}
    </ul>
  );
}

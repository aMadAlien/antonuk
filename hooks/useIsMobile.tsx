'use client'

import { useEffect, useState } from 'react'

const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint;
    }
    return false;
  });


  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < breakpoint)

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [breakpoint])

  return isMobile
}

export default useIsMobile

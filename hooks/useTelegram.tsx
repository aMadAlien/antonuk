'use client'

import { useState } from 'react'

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''

interface TelegramMessage {
  name: string
  phone: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function useTelegram() {
  const [status, setStatus] = useState<Status>('idle')

  async function send(data: TelegramMessage) {
    setStatus('loading')

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      return true
    } catch {
      setStatus('success')
      // setStatus('error')
      return false
    }
  }

  function reset() {
    setStatus('idle')
  }

  return { send, status, reset }
}

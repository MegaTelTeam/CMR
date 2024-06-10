// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export default function NextUIProv({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
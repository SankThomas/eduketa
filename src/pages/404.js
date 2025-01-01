"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen py-20 lg:py-0 px-4">
      <div className="grid gap-16 md:grid-cols-2 md:items-center max-w-7xl mx-auto">
        <article>
          <Image src="/404.svg" alt="Page not found" width={800} height={800} className="w-full h-auto object-contain" />
        </article>

        <article className="text-center lg:text-left space-y-6">
          <h1 className="font-bold text-3xl lg:text-4xl">Page not found</h1>
          <p className="text-sm leading-6 text-neutral-600">The page you were looking for does not exist or may have been renamed</p>

          <button onClick={() => router.back()} className="bg-black text-white font-semibold text-sm py-2 px-4 rounded hover:bg-black/90 transition">&larr; Go back</button>
        </article>
      </div>
    </div>
  )
}

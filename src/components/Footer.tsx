import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="my-16">
        <p className="text-center text-sm text-slate-500">
          Copyright © {new Date().getFullYear()} Blunk. All rights reserved.
        </p>
        
        <p className="text-center text-xs text-slate-500 mt-1">
          Made by <a
            href="https://sannidhya.web.app"
            target="_blank"
            rel="noopener"
            className="hover:underline">
            Sannidhya
          </a>
        </p>
      </footer>
    </>
  )
}

export default Footer
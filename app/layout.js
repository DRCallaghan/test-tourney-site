'use client'

import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
import Login from './components/login'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test Tourney Website',
  description: 'A WIP test site for an osu tournament',
  charset: 'UTF-8'
}

export default function RootLayout({ children }, session) {

  return (
    <SessionProvider session={session}>
      <html lang="en">
        {/* put shared UI components here like header, nav bar, and footer */}
        <body className={inter.className}>
          {/* nav set to justify-between so that home page button is on the left and the child flexbox containing all other nav elements is on the right */}
          <nav className='flex flex-row items-center justify-between w-4/5 m-4 p-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-6 backdrop-blur-2xl-dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            <div className='m-3 text-2xl font-semibold'><Link href='/'>The Perennial</Link></div>
            {/* child flex box set to justify end so that it is on the right side of the screen */}
            <div className='flex flex-row items-center justify-end'>
              <div className='m-3 text-2xl font-semibold'><Link href='/info'>Info</Link></div>
              <div className='m-3 text-2xl font-semibold'>Teams/Players</div>
              <div className='m-3 text-2xl font-semibold'>Schedules</div>
              <div className='m-3 text-2xl font-semibold'>Mappools</div>
              <div className='m-3 text-2xl font-semibold'>Staff</div>
            </div>
          </nav>
          <div className='m-3 text-2xl font-semibold'><Login /></div>
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}

import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { nextAuthOptions } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test Tourney Website',
  description: 'A WIP test site for an osu tournament',
  charset: 'UTF-8'
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <html lang="en">
      {/* put shared UI components here like header, nav bar, and footer */}
      <body className={inter.className}>
        {/* shared nav elements for overall styling of header/nav bar */}
        <nav className='flex flex-row min-w-screen items-center justify-between w-4/5 m-4 p-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-6 backdrop-blur-2xl-dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          {/* individual nav links here */}
          <div className='m-3 text-2xl font-semibold'><Link href='/'>The Perennial</Link></div>
          <div className='m-3 text-2xl font-semibold'><Link href='/info'>Info</Link></div>
          <div className='m-3 text-2xl font-semibold'>Teams/Players</div>
          <div className='m-3 text-2xl font-semibold'>Schedules</div>
          <div className='m-3 text-2xl font-semibold'>Mappools</div>
          <div className='m-3 text-2xl font-semibold'>Staff</div>
          {/* conditional rendering for oauth login button */}
          {session ? (
            <div className='flex flex-col m-3 text-2xl font-semibold'>
              <div>Logged in as {session.user.name}</div>
              <div><Link href='/'>Log Out</Link></div>
            </div>
          ) : (
            <div className='m-3 text-2xl font-semibold'>Not logged in.</div>
          )}

        </nav>
        {children}
      </body>
    </html>
  )
}

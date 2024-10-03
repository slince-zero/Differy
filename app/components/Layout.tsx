'use client'

import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      <header className='bg-white dark:bg-gray-800 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
              Differy
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className='text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'>
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      </header>
      <main className='flex-grow flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8'>
        <div className='w-full max-w-4xl bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6'>
          {children}
        </div>
      </main>
      <footer className='bg-white dark:bg-gray-800 shadow-sm mt-auto'>
        <div className='max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-500 dark:text-gray-400'>
              © 2024 Differy. All rights reserved.
            </p>
            <div className='flex space-x-4'>
              <Link
                href='/privacy-policy'
                className='text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'>
                Privacy Policy
              </Link>
              <Link
                href='/terms-of-service'
                className='text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'>
                Terms of Service
              </Link>
              <Link
                href='/contact-us'
                className='text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

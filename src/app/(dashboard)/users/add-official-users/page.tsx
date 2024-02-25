import { Button, Title } from '@/Components/atomics'
import Form from '@/Components/ui/form'
import React from 'react'

const page = () => {
  return (
    <div className="relative p-6 space-y-6">
      <section className="relative p-6 bg-white rounded-lg-10">
        <nav className="flex items-center justify-between mb-8">
          <Title size="lg" variant="default">
            <p className='text-netral-25'>
              Add Official User
            </p>
          </Title> 
        </nav>
        {/* Input section */}
        <div>
          <div className='flex gap-4'>
            <input
              type="text"
              required 
              placeholder="User Id"
              className="block max-w-md w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <input
              type="text"
              required 
              placeholder="Official Id"
              className="block max-w-md w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button className='text-sm rounded-md bg-netral-20 px-2 py-1 text-netral-25 bg-netral-35 h-10 w-full mt-8'>
            ADD OFFICIAL USER
          </button>
        </div>
      </section>
    </div>
  )
}

export default page

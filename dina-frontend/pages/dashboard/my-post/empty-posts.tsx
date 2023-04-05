import DashboardLayout from '@/components/layouts/DashboardLayout'
import React from 'react'

const EmptyPosts = () => {
  return (
    <DashboardLayout>
      <div className='flex  w-full justify-center items-center flex-col mt-10 gap-2'>
        <h1 className='font-bold text-lg text-gray-900'>Welcom Anthone</h1>
        <p className='text-gray-500 mb-8 w-[550px] text-center'>Dipisicing elit. Veniam, quibusdam. sit amet consectetur adipisicing elit. Eaque, voluptatem?</p>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          Create New Post
        </button>

      </div>
    </DashboardLayout>
  )
}

export default EmptyPosts
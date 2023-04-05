import DashboardLayout from '@/components/layouts/DashboardLayout'
import Image from 'next/image'
import React from 'react'
import ProfileImg from '../../public/profile3.jpg'

const ProfileSetting = () => {
    return (
        <DashboardLayout>
            <div className="flex gap-6 shadow-sm px-4 py-2">
                <div>
                    <Image className='w-48 h-48 mb-3 rounded-full shadow-lg object-cover' src={ProfileImg} alt="image" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-bold text-3xl text-gray-900 mb-1'>Anthony Account</h1>
                    <p className='font-semibold text-lg mb-6 text-gray-500'>whitegoose@123</p>
                    <div>
                        <button type="button" className="text-gray-900 bg-gray-200 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                            <svg className='w-4 h-4 mr-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.1562 11.9297C20.1562 11.3672 20.0859 10.9453 20.0156 10.4883H11.7188V13.4766H16.6406C16.4648 14.7773 15.1641 17.2383 11.7188 17.2383C8.73047 17.2383 6.30469 14.7773 6.30469 11.7188C6.30469 6.83203 12.0703 4.58203 15.1641 7.57031L17.5547 5.28516C16.043 3.87891 14.0391 3 11.7188 3C6.86719 3 3 6.90234 3 11.7188C3 16.5703 6.86719 20.4375 11.7188 20.4375C16.7461 20.4375 20.1562 16.9219 20.1562 11.9297Z" fill="#4B5563" />
                            </svg>

                            Connect with MetaMask
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex mt-4 rounded bg-gray-100 gap-16 py-4 px-8'>

                <form className='bg-white flex-[0.5] rounded p-6'>
                    <h1 className='text-2xl font-semibold text-gray-700 mb-6'>General Information</h1>
                    <div className="mb-6">
                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display Name</label>
                        <input type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                </form>
                <form className='bg-white flex-[0.5] rounded p-6'>
                    <h1 className='text-2xl font-semibold text-gray-700 mb-6'>Password</h1>
                    <div className="mb-6">
                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                        <input type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        <input type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='mb-6'>
                        <p className='text-sm text-gray-800'>At least 6 characters including </p>
                        <p className='text-sm text-gray-800'>one uppercase character</p>
                        <p className='text-sm text-gray-800'>one special character, e.g., _ ! @ # ?</p>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Password</button>
                </form>





            </div>
        </DashboardLayout>
    )
}

export default ProfileSetting
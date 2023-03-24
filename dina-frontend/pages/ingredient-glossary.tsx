import Image from 'next/image'
import Logo from '../public/placeholder-logo.png'
import Corn from '../public/corn.png'
import Tomato from '../public/tomato.png'

const IngredientGlossary = () => {
    return (
        <>
            <nav className="flex justify-between px-16 py-6">
                <div className='flex gap-6'>
                    <div>
                        <Image className='inline-block ml-2' src={Logo} alt='DiNA' width="50" height="50"></Image>
                        <span>DiNA</span>
                    </div>
                    <div>
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for food..." required />
                            </div>
                        </form>
                    </div>
                </div>

                <ul className='flex gap-4'>
                    <li>
                        Login
                    </li>
                    <li>About</li>
                    <li>
                        <button>Get Started</button>
                    </li>
                </ul>
            </nav>

            <div className='flex px-16'>
                <div className='border-r border-black'> {/*Sidebar*/}
                    <div>All posts</div>
                    {/* Just a fix for now */}
                    <div className='mr-4'>Ingredient Glossary</div>

                </div>
                <div className='flex-1 px-20'> {/* Main Content 1. ... 2. ...*/}
                    <div className='pb-8'>
                        <form>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                    </div>

                    <div>
                        {/* Card Goes Here */}
                        <div className='bg-white flex rounded shadow-md overflow-hidden mb-8'>
                            <Image className='w-full h-72  object-cover' src={Corn} alt='corn'></Image>
                            <div className='m-8'>
                                    <h1 className='mb-4 text-4xl font-bold'>Corn</h1>
                                    <p className='font-semibold mb-2'>Healty Rating: ⭐⭐⭐⭐⭐</p>
                                    <p className='text-gray-500 text-sm'>Amet id porttitor feugiat amet. Elementum nascetur ut a pulvinar mattis nunc. Sollicitudin eget nunc et eu. Arcu eget scelerisque risus non. Vestibulum sed malesuada eu senectus mattis donec consectetur. Semper velit neque nec gravida fames.</p>
                            </div>
                        </div>
                        <div className='bg-white flex rounded shadow-md overflow-hidden mb-8'>
                            <Image className='w-full h-72  object-cover' src={Tomato} alt='corn'></Image>
                            <div className='m-8'>
                                    <h1 className='mb-4 text-4xl font-bold'>Tomato</h1>
                                    <p className='font-semibold mb-2'>Healty Rating: ⭐⭐⭐⭐⭐</p>
                                    <p className='text-gray-500 text-sm'>Amet id porttitor feugiat amet. Elementum nascetur ut a pulvinar mattis nunc. Sollicitudin eget nunc et eu. Arcu eget scelerisque risus non. Vestibulum sed malesuada eu senectus mattis donec consectetur. Semper velit neque nec gravida fames.</p>
                            </div>
                        </div>

                        
                    </div>

                    <div> {/* Related Food Posts */}
                        <h4>Related Food Post</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IngredientGlossary


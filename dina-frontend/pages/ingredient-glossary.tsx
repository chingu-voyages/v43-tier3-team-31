import Image from "next/image";
import Logo from "../public/logo.png";
import Corn from "../public/corn.png";
import Tomato from "../public/tomato.png";
import Img from "../public/placeholder-image.png";
import { Pagination } from "flowbite-react";
import Navbar from "@/components/publicPages/landing/Navbar";
// import PostCard from "@/components/publicPages/landing/PostCard";

const IngredientGlossary = () => {
  const onPageChange = () => {};
  return (
    <>
      <Navbar />

      <div className="flex px-16">
        <div className="border-r border-black">
          {" "}
          {/*Sidebar*/}
          <div>All posts</div>
          {/* Just a fix for now */}
          <div className="mr-4">Ingredient Glossary</div>
        </div>
        <div className="flex-1 px-20">
          {" "}
          {/* Main Content 1. ... 2. ...*/}
          <div className="pb-8">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div>
            {/* Card Goes Here */}
            <div className="bg-white flex rounded shadow-md overflow-hidden mb-8">
              <Image
                className="w-full h-64  object-cover"
                src={Corn}
                alt="corn"
              ></Image>
              <div className="mx-8 my-2">
                <h1 className="mb-4 text-4xl font-bold">Corn</h1>
                <p className="font-semibold mb-2">Healty Rating: ⭐⭐⭐⭐⭐</p>
                <p className="text-gray-500 text-sm">
                  Amet id porttitor feugiat amet. Elementum nascetur ut a
                  pulvinar mattis nunc. Sollicitudin eget nunc et eu. Arcu eget
                  scelerisque risus non. Vestibulum sed malesuada eu senectus
                  mattis donec consectetur. Semper velit neque nec gravida
                  fames.
                </p>
              </div>
            </div>
            <div className="bg-white flex rounded shadow-md overflow-hidden mb-8">
              <Image
                className="w-full h-64  object-cover"
                src={Tomato}
                alt="corn"
              ></Image>
              <div className="mx-8 my-2">
                <h1 className="mb-4 text-4xl font-bold">Tomato</h1>
                <p className="font-semibold mb-2">Healty Rating: ⭐⭐⭐⭐⭐</p>
                <p className="text-gray-500 text-sm">
                  Amet id porttitor feugiat amet. Elementum nascetur ut a
                  pulvinar mattis nunc. Sollicitudin eget nunc et eu. Arcu eget
                  scelerisque risus non. Vestibulum sed malesuada eu senectus
                  mattis donec consectetur. Semper velit neque nec gravida
                  fames.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Pagination
                currentPage={1}
                onPageChange={onPageChange}
                showIcons={true}
                totalPages={100}
              />
            </div>
          </div>
          <div>
            {" "}
            {/* Related Food Posts */}
            <h4 className="text-4xl font-bold">Related Food Post</h4>
            {/* <div className='mt-8 grid grid-cols-3 gap-4'>
                            {
                                [1, 2, 3, 4, 5, 6].map((i) => {
                                    return (
                                        <PostCard key={i} />
                                    )
                                })
                            }
                        </div> */}
            <div className="flex items-center justify-center m-8">
              <Pagination
                currentPage={1}
                onPageChange={onPageChange}
                showIcons={true}
                totalPages={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IngredientGlossary;

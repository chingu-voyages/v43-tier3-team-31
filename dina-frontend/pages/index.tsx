import Head from "next/head";
import { Inter } from "next/font/google";
import Landing from "@/components/publicPages/landing";
import Navbar from "@/components/publicPages/landing/Navbar";
import Img from "../public/placeholder-image.png";
const inter = Inter({ subsets: ["latin"] });
import Hero from "../public/Hero.jpg";
import Image from "next/image";

import Logo from "../public/logo.png";
import PostCard from "@/components/publicPages/landing/PostCard";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <nav className="sticky opacity-90 top-0 z-30 flex px-16 py-4 bg-white items-center">
        <div className="flex items-center">
          <Image
            className="inline-block ml-2 w-12 h-12 mr-2"
            src={Logo}
            alt="DiNA"
            width="50"
            height="50"
          ></Image>
          <span className="text-lg font-bold text-gray-700">DiNA</span>
        </div>
        <div className="ml-4 flex-1">
          <form className="flex w-96 items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for food..."
                required
              />
            </div>
          </form>
        </div>

        <ul className="flex gap-3 items-center">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>About</li>
          <li>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get Started
            </button>
          </li>
        </ul>
      </nav>

      <div
        style={{
          background:
            "linear-gradient(  rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url('/img4.png') no-repeat fixed",
          backgroundSize: "cover",
        }}
        className="flex justify-center items-center flex-col gap-2 w-full h-[550px] "
      >
        <h1 className="text-[50px] font-bold text-white">
          Know ingredients in your food
        </h1>
        <p className="font-center text-white">
          Here at DiNA we focus on food transparency where everyone can discover
          what's in your food.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Started &#8594;
          </button>
          <button
            type="button"
            className="text-white hover:text-blue-700 border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-white"
          >
            Learn now{" "}
          </button>
        </div>
      </div>

      <div className="px-16 py-16">
        <div className="ml-4">
          <p className=" text-gray-500">Explore</p>
          <h1 className="text-3xl font-bold">Feature Post</h1>
        </div>

        <div className="grid gap-3 grid-cols-4 my-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <PostCard key={i} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 my-16">
          <span className="flex w-3 h-3 bg-gray-200 rounded-full"></span>
          <span className="flex w-3 h-3 bg-gray-500 rounded-full dark:bg-gray-700"></span>
          <span className="flex w-3 h-3 bg-gray-200 rounded-full"></span>
          <span className="flex w-3 h-3 bg-gray-200 rounded-full"></span>
          <span className="flex w-3 h-3 bg-gray-200 rounded-full"></span>
          <svg
            fill="none"
            className="flex w-7 h-7"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <p className=" text-gray-500">Explore</p>
          <h1 className="text-3xl font-bold">Popular Post</h1>
        </div>

        <div className="grid gap-3 grid-cols-4 my-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <PostCard key={i} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 my-16">
          <span className="flex w-3 h-3 bg-gray-200 rounded-full"></span>
          <span className="flex w-3 h-3 bg-gray-500 rounded-full dark:bg-gray-700"></span>
          <span className="flex w-3 h-3 bg-gray-200 rounded-full"></span>
          <span className="flex w-3 h-3 bg-gray-200 rounded-full"></span>
          <span className="flex w-3 h-3 bg-gray-200 rounded-full"></span>
          <svg
            fill="none"
            className="flex w-7 h-7"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(  rgba(0, 0,100, 0.2), rgba(0, 0, 0, 0.9)), url('/bg3.png')",
        }}
        className=" w-full bg-cover bg-no-repeat h-[800px]"
      >
        <div className="flex flex-col w-[340px] gap-10 justify-center items-start pt-[126px] pl-[64px]">
          <div className="bg-white bg-opacity-20 shadow-md p-4 border-gray-50 rounded">
            <div className="w-288 h-[3px] bg-blue-600  rounded-sm "></div>
            <h2 className="text-[16px] font-bold text-white mb-2 pt-2">
              Browse food around the world
            </h2>
            <p className="text-[14px] text-white">
              Explore the new cuisines and insider tips on the best food
              worldwide, from street food to fine dining.
            </p>
          </div>
          <div className=" p-4 ">
            <div className="w-288 h-[3px] bg-gray-600  rounded-sm "></div>
            <h2 className="text-[16px] font-bold text-white mb-2 pt-2">
              Ingredient tags in the post
            </h2>
            <p className="text-[14px] text-white">
              Easily understand what's in your food contribute by the community.
              Create ingredient list, add notes and tags.
            </p>
          </div>
          <div className=" p-4 ">
            <div className="w-288 h-[3px] bg-gray-600  rounded-sm "></div>
            <h2 className="text-[16px] font-bold text-white mb-2 pt-2">
              Ingredient Glossary
            </h2>
            <p className="text-[14px] text-white">
              Explore the new cuisines and insider tips on the best food
              worldwide, from street food to fine dining.
            </p>
          </div>
          <div className=" p-4 ">
            <div className="w-288 h-[3px] bg-gray-600  rounded-sm "></div>
            <h2 className="text-[16px] font-bold text-white mb-2 pt-2">
              Browse food around the world
            </h2>
            <p className="text-[14px] text-white">
              Explore the new cuisines and insider tips on the best food
              worldwide, from street food to fine dining.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

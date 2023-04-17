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
      <Navbar />

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

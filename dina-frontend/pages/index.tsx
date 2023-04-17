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
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/utils/firebaseClient";

type Post = {
  uid: string;
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  timestamp: any; // Replace 'any' with a more specific type if needed
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("timestamp", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          imgUrl: doc.data().imgUrl,
          description: doc.data().description,
          timestamp: doc.data().timestamp,
          uid: doc.data().uid,
        }));
        setPosts(fetchedPosts);
      });

      return () => unsubscribe();
    };

    fetchPosts();
  }, []);
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
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get Started &#8594;
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="text-white hover:text-blue-700 border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-white"
            >
              Learn now{" "}
            </button>
          </Link>
        </div>
      </div>

      <div className="px-16 py-16">
        <div className="ml-4">
          <p className=" text-gray-500">Explore</p>
          <h1 className="text-3xl font-bold">Latest Posts</h1>
        </div>

        <div className="grid gap-3 grid-cols-4 my-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              imgUrl={post.imgUrl}
              description={post.description}
              timestamp={post.timestamp}
              uid={post.uid}
              postId={post.id}
            />
          ))}
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

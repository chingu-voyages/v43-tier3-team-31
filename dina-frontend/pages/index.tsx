import Head from "next/head";
import { Inter } from "next/font/google";
import Landing from "@/components/publicPages/landing";
import Navbar from "@/components/publicPages/landing/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Hero from '../public/Hero.jpg'
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="">
        <Image className="w-full h-96  object-cover grayscale opacity-80" src={Hero} alt='food'/>
      </div>
    </>
  );
}

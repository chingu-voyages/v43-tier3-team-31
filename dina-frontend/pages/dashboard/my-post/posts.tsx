import DashboardLayout from "@/components/layouts/DashboardLayout";
import Image from "next/image";
import React from "react";

const Posts = () => {
  return (
    <DashboardLayout>
      <>
        <div className="flex justify-between">
          <h1 className="font-bold text-lg text-gray-900">My Posts</h1>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new{" "}
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-3">
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
          <div className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              }
              alt="image"
              width={500}
              height={500}
            ></Image>
            <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </h1>
          </div>
        </div>
      </>
    </DashboardLayout>
  );
};

export default Posts;

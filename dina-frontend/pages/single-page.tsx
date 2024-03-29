import Image from "next/image";
import Profile from "../public/profile.png";
import { auth, db } from "@/utils/firebaseClient";
import { DocumentReference, doc, getDoc } from "firebase/firestore";
import Navbar from "@/components/publicPages/landing/Navbar";
import { useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import CommentField from "@/components/single-post/CommentField";
import CommentList from "@/components/single-post/CommentList";

interface UserData {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
const SinglePage = ({ post, postId }) => {
  const [userLogged, setUserLogged] = useState<UserData | null>(null);

  auth.onAuthStateChanged(function (user) {
    if (user) {
      setUserLogged(user);
    }
  });

  return (
    <>
      <Navbar />

      <div className="flex px-6">
        <div className="border-r border-gray pt-8 px-6">
          {" "}
          {/*Sidebar*/}
          <div>All posts</div>
          {/* Just a fix for now */}
          <div className="mr-4">Ingredient Glossary</div>
        </div>
        <div className="flex-1 px-12">
          {" "}
          {/* Main Content 1. ... 2. ...*/}
          <div className="bg-white grid grid-cols-2 rounded shadow-md overflow-hidden mb-8">
            <Image
              className="w-full rounded  object-cover"
              src={post.imgUrl}
              width={500}
              height={500}
              alt={post.title}
            ></Image>
            <div className="mx-8 my-2 flex flex-col">
              <h2 className="font-semibold text-xl">{post.title}</h2>
              {/* <div className="pt-3 flex justify-between items-center border-b pb-2 border-b-gray-300">
                <div className="flex-1 flex items-center gap-2">
                  <Image
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL ?? Profile}
                    alt={user?.displayName}
                    width={40}
                    height={40}
                  ></Image>
                  <div className="flex flex-col">
                    <p className=" font-bold text-s">
                      {user?.displayName || "John Doe"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-none">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.04897 0.927078C7.34897 0.00607812 8.65197 0.00607812 8.95097 0.927078L10.021 4.21908C10.0863 4.41957 10.2134 4.59426 10.384 4.71818C10.5547 4.84211 10.7601 4.90892 10.971 4.90908H14.433C15.402 4.90908 15.804 6.14908 15.021 6.71908L12.221 8.75308C12.05 8.87711 11.9227 9.05209 11.8573 9.25293C11.7919 9.45377 11.7918 9.67017 11.857 9.87108L12.927 13.1631C13.227 14.0841 12.172 14.8511 11.387 14.2811L8.58697 12.2471C8.41618 12.1231 8.21053 12.0563 7.99947 12.0563C7.78842 12.0563 7.58277 12.1231 7.41197 12.2471L4.61197 14.2811C3.82797 14.8511 2.77397 14.0841 3.07297 13.1631L4.14297 9.87108C4.20815 9.67017 4.20803 9.45377 4.14264 9.25293C4.07725 9.05209 3.94994 8.87711 3.77897 8.75308L0.979974 6.72008C0.196974 6.15008 0.599974 4.91008 1.56797 4.91008H5.02897C5.24002 4.91013 5.44568 4.84342 5.6165 4.71948C5.78732 4.59554 5.91455 4.42073 5.97997 4.22008L7.04997 0.928078L7.04897 0.927078Z"
                      fill="#4B5563"
                    />
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.04897 0.927078C7.34897 0.00607812 8.65197 0.00607812 8.95097 0.927078L10.021 4.21908C10.0863 4.41957 10.2134 4.59426 10.384 4.71818C10.5547 4.84211 10.7601 4.90892 10.971 4.90908H14.433C15.402 4.90908 15.804 6.14908 15.021 6.71908L12.221 8.75308C12.05 8.87711 11.9227 9.05209 11.8573 9.25293C11.7919 9.45377 11.7918 9.67017 11.857 9.87108L12.927 13.1631C13.227 14.0841 12.172 14.8511 11.387 14.2811L8.58697 12.2471C8.41618 12.1231 8.21053 12.0563 7.99947 12.0563C7.78842 12.0563 7.58277 12.1231 7.41197 12.2471L4.61197 14.2811C3.82797 14.8511 2.77397 14.0841 3.07297 13.1631L4.14297 9.87108C4.20815 9.67017 4.20803 9.45377 4.14264 9.25293C4.07725 9.05209 3.94994 8.87711 3.77897 8.75308L0.979974 6.72008C0.196974 6.15008 0.599974 4.91008 1.56797 4.91008H5.02897C5.24002 4.91013 5.44568 4.84342 5.6165 4.71948C5.78732 4.59554 5.91455 4.42073 5.97997 4.22008L7.04997 0.928078L7.04897 0.927078Z"
                      fill="#4B5563"
                    />
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.04897 0.927078C7.34897 0.00607812 8.65197 0.00607812 8.95097 0.927078L10.021 4.21908C10.0863 4.41957 10.2134 4.59426 10.384 4.71818C10.5547 4.84211 10.7601 4.90892 10.971 4.90908H14.433C15.402 4.90908 15.804 6.14908 15.021 6.71908L12.221 8.75308C12.05 8.87711 11.9227 9.05209 11.8573 9.25293C11.7919 9.45377 11.7918 9.67017 11.857 9.87108L12.927 13.1631C13.227 14.0841 12.172 14.8511 11.387 14.2811L8.58697 12.2471C8.41618 12.1231 8.21053 12.0563 7.99947 12.0563C7.78842 12.0563 7.58277 12.1231 7.41197 12.2471L4.61197 14.2811C3.82797 14.8511 2.77397 14.0841 3.07297 13.1631L4.14297 9.87108C4.20815 9.67017 4.20803 9.45377 4.14264 9.25293C4.07725 9.05209 3.94994 8.87711 3.77897 8.75308L0.979974 6.72008C0.196974 6.15008 0.599974 4.91008 1.56797 4.91008H5.02897C5.24002 4.91013 5.44568 4.84342 5.6165 4.71948C5.78732 4.59554 5.91455 4.42073 5.97997 4.22008L7.04997 0.928078L7.04897 0.927078Z"
                      fill="#4B5563"
                    />
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.04897 0.927078C7.34897 0.00607812 8.65197 0.00607812 8.95097 0.927078L10.021 4.21908C10.0863 4.41957 10.2134 4.59426 10.384 4.71818C10.5547 4.84211 10.7601 4.90892 10.971 4.90908H14.433C15.402 4.90908 15.804 6.14908 15.021 6.71908L12.221 8.75308C12.05 8.87711 11.9227 9.05209 11.8573 9.25293C11.7919 9.45377 11.7918 9.67017 11.857 9.87108L12.927 13.1631C13.227 14.0841 12.172 14.8511 11.387 14.2811L8.58697 12.2471C8.41618 12.1231 8.21053 12.0563 7.99947 12.0563C7.78842 12.0563 7.58277 12.1231 7.41197 12.2471L4.61197 14.2811C3.82797 14.8511 2.77397 14.0841 3.07297 13.1631L4.14297 9.87108C4.20815 9.67017 4.20803 9.45377 4.14264 9.25293C4.07725 9.05209 3.94994 8.87711 3.77897 8.75308L0.979974 6.72008C0.196974 6.15008 0.599974 4.91008 1.56797 4.91008H5.02897C5.24002 4.91013 5.44568 4.84342 5.6165 4.71948C5.78732 4.59554 5.91455 4.42073 5.97997 4.22008L7.04997 0.928078L7.04897 0.927078Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div> */}
              <div className="border-b flex-1 border-b-gray-300">
                <p className="pt-4 text-sm pb-4">{post.description}</p>
                <div className="flex flex-wrap">
                  {post.tags.map((tag: string) => (
                    <span className="bg-blue-100 mb-2 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-2">
                <div className="flex justify-start item-center gap-3 mt-3">
                  <svg
                    fill="none"
                    className="w-4 h-4 dark:text-white"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </div>
              </div>
              <CommentField postId={postId} user={userLogged} />
              <CommentList postId={postId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const postId: string | any = context.query.postId; // Get the uid from the query string

  const postRef = doc(db, "posts", postId);
  const postDoc = await getDoc(postRef);

  if (!postDoc.exists()) {
    return {
      notFound: true,
    };
  }

  const postData = postDoc.data();
  const post = {
    uid: postData.uid,
    id: postDoc.id,
    title: postData.title,
    location: postData.location,
    imgUrl: postData.imgUrl,
    description: postData.description,
    tags: postData.tags,
    timestamp: postData.timestamp.toDate().toISOString(), // Convert Firestore Timestamp to JavaScript Date and then to ISO string
  };

  return {
    props: {
      post,
      postId,
    },
  };
}

export default SinglePage;

import DashboardLayout from "@/components/layouts/DashboardLayout";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { auth, db } from "@/utils/firebaseClient";
import { useAuthState } from "react-firebase-hooks/auth";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user) return;
      const postsRef = collection(db, "posts");
      const q = query(
        postsRef,
        where("uid", "==", user.uid),
        orderBy("timestamp", "desc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(fetchedPosts);
      });

      return () => unsubscribe();
    };

    fetchPosts();
  }, [user]);

  return (
    <DashboardLayout>
      <>
        <div className="flex justify-between">
          <h1 className="font-bold text-lg text-gray-900">My Posts</h1>
          <Link href="/dashboard/create-post">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add new{" "}
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-3">
          {posts &&
            posts?.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded shadow-md overflow-hidden"
              >
                <Image
                  src={post.imgUrl}
                  alt={post.title}
                  width={500}
                  height={500}
                ></Image>
                <h1 className="p-4 w-full  font-bold text-lg text-gray-700">
                  {post.title}
                </h1>
                <p className="pb-4 px-4 text-gray-600">
                  Tags: {post.tags.join(", ")}
                </p>
              </div>
            ))}
        </div>
      </>
    </DashboardLayout>
  );
};

export default Posts;

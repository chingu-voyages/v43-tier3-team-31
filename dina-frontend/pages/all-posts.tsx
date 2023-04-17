import Image from "next/image";
import Logo from "../public/logo.png";
import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../utils/firebaseClient";
import Navbar from "@/components/publicPages/landing/Navbar";
import Link from "next/link";

type Post = {
  uid: string;
  id: string;
  title: string;
  location: string;
  imgUrl: string;
  description: string;
  tags: string[];
  timestamp: any; // Replace 'any' with a more specific type if needed
};

const AllPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("timestamp", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          location: doc.data().location,
          imgUrl: doc.data().imgUrl,
          description: doc.data().description,
          tags: doc.data().tags,
          timestamp: doc.data().timestamp,
          uid: doc.data().uid,
        }));
        setPosts(fetchedPosts);
      });

      return () => unsubscribe();
    };

    fetchPosts();
  }, []);

  console.log("object", posts);
  return (
    <>
      <Navbar />

      <div className="flex  px-6">
        <div className="border-r border-gray pt-8 px-6">
          {" "}
          {/*Sidebar*/}
          <div>All posts</div>
          {/* Just a fix for now */}
          <div className="mr-4">Ingredient Glossary</div>
        </div>
        <div className="flex-1  px-12 mb-16">
          {" "}
          {/* Main Content 1. ... 2. ...*/}
          <div className="flex justify-center flex-wrap gap-4">
            {posts &&
              posts?.map((post) => (
                <div className="w-3/12" key={post.id}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={post.imgUrl}
                    alt={post.title}
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      {post.title.slice(0, 20)}{" "}
                      {post.title.length > 19 ? "..." : ""}
                    </div>
                    <div>
                      <Link href={`/single-page?postId=${post.id}`}>
                        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded my-2">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;

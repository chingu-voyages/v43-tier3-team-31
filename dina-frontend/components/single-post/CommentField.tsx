import { db } from "@/utils/firebaseClient";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Spinner } from "flowbite-react";
import React, { useState } from "react";

function CommentField({ postId, user }: { postId: string; user: any }) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const postComment = async (e) => {
    e.preventDefault();
    setLoading(true);
    const commentsRef = collection(
      doc(collection(db, "posts"), postId),
      "comments"
    );
    comment &&
      (await addDoc(commentsRef, {
        text: comment,
        username: user.displayName,
        createdAt: new Date().toISOString(),
      }));
    setComment("");
    setLoading(false);
  };

  return (
    <>
      <div className="bg-gray-50 p-4 flex items-center">
        <div className="flex items-center flex-1">
          <label htmlFor="commentTarget" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              type="text"
              id="commentTarget"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Comment"
              required
            />
          </div>
        </div>
        <div className="flex-none ml-4">
          <button className="" onClick={postComment}>
            {loading ? (
              <Spinner color="info" aria-label="Posting comment" />
            ) : (
              <svg
                fill="none"
                className="w-6 h-6 dark:text-white"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default CommentField;

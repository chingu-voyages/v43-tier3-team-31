import { db } from "@/utils/firebaseClient";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

function CommentList({ postId }: { postId: string }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const commentsRef = collection(
        doc(collection(db, "posts"), postId),
        "comments"
      );
      const commentsQuery = query(commentsRef, orderBy("createdAt", "desc"));

      const unsubscribe = onSnapshot(commentsQuery, (querySnapshot) => {
        const commentsData = [];
        querySnapshot.forEach((doc) => {
          commentsData.push({ id: doc.id, ...doc.data() });
        });
        setComments(commentsData);
      });

      return () => unsubscribe();
    };

    fetchComments();
  }, [postId]);
  console.log("object", comments);
  return (
    <>
      {comments.map((comment) => (
        <Card className="my-2" key={comment.id}>
          <p className="text-slate-400 text-xs m-0">{comment.username}</p>
          <p className=" m-0">{comment.text}</p>
        </Card>
      ))}
    </>
  );
}

export default CommentList;

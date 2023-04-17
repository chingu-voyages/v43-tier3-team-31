import React from "react";
import Img from "../../../public/placeholder-image.png";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ title, imgUrl, description, timestamp, uid, postId }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <Image src={imgUrl} width={400} height={400} alt="image"></Image>
      <div className="p-4">
        <p className="font-bold text-base mb-2">{title}</p>
        <p className="text-gray-500 text-sm">
          {description.slice(50)} {description.length > 49 ? "..." : "."}
        </p>
        <Link href={`/single-page?postId=${postId}`}>
          <span className="text-green-400 block font-semibold text-end mt-4">
            Read More...
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

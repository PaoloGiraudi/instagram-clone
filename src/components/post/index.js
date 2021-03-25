import React, { useRef } from "react";

import Actions from "./actions";
import Image from "./image";
import Header from "./header";
import Footer from "./footer";
import Comments from "./comments";

export default function Post({ content }) {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  return (
    <div className="rounded col-span-4 border bg-white mb-16">
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totaleLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer username={content.username} caption={content.caption}></Footer>
    </div>
  );
}

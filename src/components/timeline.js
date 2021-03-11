import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Timeline() {
  const photos = null;
  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        photos.map((content) => <p>I will be the photo</p>)
      )}
    </div>
  );
}

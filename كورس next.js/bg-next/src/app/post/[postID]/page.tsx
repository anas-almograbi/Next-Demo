import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import Fetchdata to ensure it's client-side rendered
const Fetchdata = dynamic(() => import("@/app/component/Fetchdata"), {
  ssr: false, // Disable server-side rendering for this component
});

interface Params {
  postID: number; // Assuming postID is a number
}

interface PostProps {
  params: Params; // Define params to include postID
}

export default function PostId({ params }: PostProps) {
  const postID = params.postID; // Access postID correctly

  // Static headline for initial load (will show while Fetchdata fetches its data)
  const headline = <h1>Simple test</h1>;

  return (
    <div>
      <h1>Post Details</h1>
      {/* This is the Suspense boundary. It will show the headline until Fetchdata is ready */}
      <Suspense fallback={headline}>
        {/* Fetchdata is client-side only, so it fetches the actual data */}
        <Fetchdata id={postID} />
      </Suspense>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

interface Props {
  id: number;
}

interface ApiData {
  title: string;
  body: string;
  id: number;
}

export default function Fetchdata({ id }: Props) {
  const [api, setApi] = useState<ApiData | null>(null); // Add appropriate type

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setApi(data);
    };

    fetchData();
  }, [id]); // Add id as dependency

  if (!api) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <p>{api.id}</p>
      <h1>{api.title}</h1>

      <p>{api.body}</p>
    </div>
  );
}

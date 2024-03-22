import { useState, useEffect } from "react";

export default function useFetchPost(postFunction: Function) {
  console.log(postFunction);

  const [toPost, setToPost] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!toPost) {
      console.log("non fare nulla");
    }
    if (toPost) {
      console.log("fai partire post");
    }
  }, []);

  return { response, loading, error, setToPost };
}

import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [comments,setComments] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setComments(data)
      });
  }, []);

  return [products, comments];
}

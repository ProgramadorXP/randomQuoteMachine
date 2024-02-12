import { useEffect, useState } from "react";

export function useFetch(url) {
  const [quotes, setQuotes] = useState([]);


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((quote) => setQuotes(quote))
      .catch((err) => console.log(err))
  }, [url]);

  return { quotes };
}

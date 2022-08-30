import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const abrtCont = new AbortController();
    fetch(url, { signal: abrtCont.signal })
      .then(response => {
        if (!response.ok) {
          throw Error('Could not fetch data');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setErr(null);
      })
      .catch(err => {
        setErr(err.message);
        setIsPending(false);
      });
    return () => abrtCont.abort();
  }, [url]);
  return { data, isPending, err };
};
export default useFetch;

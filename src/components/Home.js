import BlogList from './BlogList';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isPending,
    err,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div>
      {err && <div>{err}</div>}
      {isPending && <h2>Loading...</h2>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};
export default Home;

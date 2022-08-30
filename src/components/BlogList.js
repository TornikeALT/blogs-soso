import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogList.module.css';

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className={styles.listwrapper}>
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p className={styles.lists}>Written by: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogList;

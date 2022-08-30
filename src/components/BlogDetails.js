import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    err,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();

  const deleteHandler = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {err && <div>{err}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <div> {blog.body} </div>
          <p>Written by {blog.author}</p>
          <button onClick={deleteHandler}>Delete</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;

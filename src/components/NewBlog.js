import styles from './NewBlog.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Tornike');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    fetch(
      'https://myfirstproject-c16f5-default-rtdb.europe-west1.firebasedatabase.app/blog.json',
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      }
    ).then(() => {
      setIsPending(false);
      navigate('/');
    });
  };

  return (
    <div className={styles.formwrapper}>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>Enter Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Enter Text:</label>
        <textarea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="Tornike">Tornike</option>
          <option value="Soso">Soso</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Blog is adding...</button>}
      </form>
    </div>
  );
};

export default NewBlog;

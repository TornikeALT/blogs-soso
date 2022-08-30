import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <h1>Torenas Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/*" />
            <Link to="/home">Home</Link>
            <Link to="/newblog">New Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;

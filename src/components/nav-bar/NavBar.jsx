import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div style={{backgroundColor: 'var(--nav-bg)'}}>
      <nav className={`${styles.nav} content-wrapper`}>
        <Link to="/" className={styles.navLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>home</title>
            <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          Home
        </Link>
        <Link to="shop" className={styles.navLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>store</title>
            <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" />
          </svg>
          Shop
        </Link>
      </nav>
    </div>
  );
}

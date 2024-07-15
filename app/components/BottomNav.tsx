'use client'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/All.module.scss';
import { usePathname } from 'next/navigation';

const BottomNavbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.bottomNavbar}> 
      <Link href="/">
        <div className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
          <FontAwesomeIcon icon={faHome} />
          <span className={styles.label}>Home</span>
        </div>
      </Link>
      <Link href="/favourites">
        <div className={`${styles.navLink} ${pathname === '/favourites' ? styles.active : ''}`}>
          <FontAwesomeIcon icon={faHeart} />
          <span className={styles.label}>Liked</span>
        </div>
      </Link>
    </nav>
  );
};
export default BottomNavbar;

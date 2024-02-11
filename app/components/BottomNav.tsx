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












// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import HomeIcon from '@mui/icons-material/Home';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// <Box
//   sx={{
  //     position: isMobile ? 'fixed' : 'static', // Use fixed position on mobile and static position on larger screens
  //     bottom: isMobile ? 0 : 'auto', // Bottom 0 on mobile, auto (default) on larger screens
  //     top: isMobile ? 'auto' : 0, // Auto (default) on mobile, top 0 on larger screens
  //     left: 0,
  //     right: 0,
  
  //   }}
  // >
  //   {isMobile ? (
    //     <BottomNavigation
    //       showLabels={!isMobile} // Show labels on larger screens, hide on mobile
    //       value={value}
    //       onChange={(event, newValue) => {
    //         setValue(newValue);
    //       }}
    //     >
    //       <BottomNavigationAction icon={<HomeIcon />} />
    //       <BottomNavigationAction icon={<FavoriteIcon />} />
    //     </BottomNavigation>
    //   ) : (
    //     <BottomNavigation value={value} onChange={(event, newValue) => setValue(newValue)}>
    //       <BottomNavigationAction label="Home" icon={<HomeIcon />} />
    //       <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    //     </BottomNavigation>
    //   )}
    // </Box>

    
    
 


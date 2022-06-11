import Link from 'next/link';
import styles from './navbar.module.scss';

function Navbar() {
    console.log(styles)

    return ( 
        <nav className={styles.navbar}>
            <Link href={'/'}>Home</Link>
            <Link href={'/users'}>Users</Link>
            <Link href={'/posts'}>Posts</Link>
            <Link href={`/posts/${5}`}>
                Post#5
            </Link>
        </nav>
     );
}

export default Navbar;
'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navBar.module.css';
import { navList } from './routes';

export default function Navbar() {
  const navItem = (obj) => {
    return (
      <Link key={obj?.key} href={obj?.href}>
        {/* todo item logo */}
        <span className={styles.nav_link_title}>{obj?.title}</span>
      </Link>
    );
  };

  return (
    <>
      <nav className={styles.nav} id="layout_nav">
        <Image
          className={styles.nav_logo}
          src="/next.svg"
          alt="blog Logo"
          width={80}
          height={20}
          priority
        />
        <div className={styles.nav_links}>
          {navList?.map((v) => navItem(v))}
        </div>
      </nav>
      {/* todo: mobile */}
    </>
  );
}

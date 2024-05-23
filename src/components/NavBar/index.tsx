'use client';
import Logo from '@public/images/xuwentao.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navBar.module.css';
import { navList } from './routes';
import useScrollStyle from './use-scroll-style';

export default function Navbar() {
  useScrollStyle();

  const navItem = (obj) => {
    return (
      <Link key={obj?.key} href={obj?.href} className={styles.nav_link}>
        {/* todo item icon */}
        <span className={styles.nav_link_title}>{obj?.title}</span>
      </Link>
    );
  };

  return (
    <>
      <nav className={styles.nav} id="layout_nav">
        <Link href="/">
          <Image
            className={styles.nav_logo}
            src={Logo}
            alt="blog Logo"
            width={145}
            height={41}
            priority
          />
        </Link>
        <div className={styles.nav_links}>
          {navList?.map((v) => navItem(v))}
        </div>
      </nav>
      {/* todo: mobile */}
    </>
  );
}

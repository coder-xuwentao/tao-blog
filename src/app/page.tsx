import bgImgLight from '@public/images/main-background.jpg';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.bg_card}>
        <Image
          className={styles.bg_card_img}
          width={2000}
          height={1000}
          src={bgImgLight}
          alt="blog-bg"
          priority={true}
        />
      </div>
    </main>
  );
}

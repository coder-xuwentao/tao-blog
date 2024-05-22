'use client';

import bgImgLight from '@public/images/main-background.jpg';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './page.module.css';

export default function Home() {
  const typeTarget = useRef<any>(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        `大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。

        遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。`,
      ],
      typeSpeed: 60,
      backSpeed: 0,
      loop: true,
      loopCount: Infinity,
      autoInsertCss: false,
      backDelay: 60000,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

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
      {/* 暗黑模式 */}
      {/* <div className={styles.bg_mask} id="bg_mask" /> */}

      <div className={styles.bg_content}>
        <div className={styles.title}>念奴娇·赤壁怀古</div>
        <div className={styles.author}>苏轼</div>
        <div className={styles.description_box}>
          <div className={styles.description} ref={typeTarget} />
        </div>

        {/* 箭头 */}
        {/* <div className={styles.arrow}>
        </div> */}
      </div>
    </main>
  );
}

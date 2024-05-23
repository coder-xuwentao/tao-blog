'use client';
import Image from 'next/image';
import Link from 'next/link';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.other_websites}>
        <div className={style.title}>站内索引</div>
        <Link
          className={`${style.link} ${style.link_click}`}
          href="/sitemap"
          target="_blank"
        >
          站点地图
        </Link>
        <Link
          className={`${style.link} ${style.link_click}`}
          href="/rss"
          target="_blank"
        >
          RSS订阅
        </Link>
        <Link
          className={`${style.link} ${style.link_click}`}
          href="/friendly-links"
        >
          友情链接
        </Link>
      </div>

      <div className={style.contact}>
        <div className={style.title}>外部链接</div>
        <Link
          className={`${style.link} ${style.link_click}`}
          href="https://www.baidu.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <Image
            width={200}
            height={16}
            style={{ width: 'auto', height: '16px' }}
            src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
            alt="百度"
          />
        </Link>
        <Link
          className={`${style.link} ${style.link_click}`}
          href="https://www.baidu.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <Image
            width={200}
            height={16}
            style={{ width: 'auto', height: '16px' }}
            src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
            alt="百度"
          />
        </Link>

        <Link
          className={`${style.link} ${style.link_click}`}
          href="https://www.baidu.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <Image
            width={200}
            height={16}
            style={{ width: 'auto', height: '16px' }}
            src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
            alt="百度"
          />
        </Link>
      </div>
      <div className={style.contact}>
        <div className={style.title}>联系我</div>
        <div className={style.link}>qq: 1294087473</div>
        <div className={style.link}>微信: bigtao28</div>
        <Link
          className={`${style.link} ${style.link_click}`}
          href="mailto:1294087473@163.com?subject=邮件标题&body=邮件内容"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          邮箱: 1294087473@qq.com
        </Link>
      </div>
      <div className={style.copyright}>
        <div className={style.user}>
          © {new Date().getFullYear()} xuwentao |
          <Link
            className={style.github_link}
            href={'https://github.com/coder-xuwentao'}
            target="_blank"
          >
            <Image
              width={12}
              height={12}
              alt="github"
              src={'https://github.githubassets.com/favicons/favicon.svg'}
            />
          </Link>
        </div>
        <div className={style.legalText}>
          <Link
            className={`${style.link} ${style.link_click}`}
            href="/copyright-notice"
          >
            版权声明
          </Link>
          <Link
            className={`${style.link} ${style.link_click}`}
            href="/disclaimers"
          >
            免责声明
          </Link>
          <Link
            className={`${style.link} ${style.link_click}`}
            href="https://beian.miit.gov.cn"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            京ICP备todo
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

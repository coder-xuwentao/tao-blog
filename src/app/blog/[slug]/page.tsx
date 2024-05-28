import BlogList from '../BlogDetails';
import { blogListData, classifyNum, pageList, totalPage } from '../mock';

// 动态路由
export async function generateStaticParams() {
  // todo 换成接口
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }];
}

// 获取数据
async function getPost(params: { slug: any }) {
  // todo: 换成接口
  return {
    page: params.slug, // 分页器用
    data: blogListData,
    classifyNum,
    totalPage,
    pageList,
  };
}

export default async function Page({ params }) {
  const post = await getPost(params);

  return <BlogList post={post} />;
}

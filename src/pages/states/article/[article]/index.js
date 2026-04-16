// import { notFound } from "next/navigation";
// import ArticleView from "@/components/ArticleView";

// export default async function ArticlePage({ params }) {
//     try {

//         const { article } = await params;

//         if (!article) {
//             notFound();
//         }

//         // ✅ split using "_"
//         const [state, articleSlug] = article.split("_");

//         if (!state || !articleSlug) {
//             notFound();
//         }

//         console.log(article);

//         const baseUrl =
//             process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

//         const res = await fetch(`${baseUrl}/api/news/${state}/${articleSlug}`, {
//             cache: "no-store",
//         });
//         if (!res.ok) {
//             notFound();
//         }

//         const data = await res.json();

//         if (!data?.success || !data?.article) {
//             notFound();
//         }

//         return (
//             <div className="min-h-screen bg-slate-50 p-5">
//                 <ArticleView article={data.article} />
//             </div>
//         );
//     } catch (error) {
//         console.error("Article page error:", error);
//         notFound();
//     }
// }

// pages/states/article/[article]/index.js

import AdPageLayout from "@/components/AdPageLayout";
import ArticleView from "@/components/ArticleView";
import { stateWiseNews as mockStates } from "@/datas/data";

// Flatten stateWiseNews for easier lookup
const allArticles = mockStates.flatMap((stateItem) =>
  stateItem.news.map((article) => ({
    ...article,
    state: stateItem.state,
  }))
);

export async function getStaticPaths() {
  const paths = allArticles.map((article) => ({
    params: {
      article: `${article.state}_${article.slug}`,
    },
  }));

  return {
    paths,
    fallback: false, // all articles are pre-rendered
  };
}

export async function getStaticProps({ params }) {
  const { article } = params;

  if (!article) return { notFound: true };

  const [state, slug] = article.split("_");
  if (!state || !slug) return { notFound: true };

  const foundArticle = allArticles.find(
    (item) => item.state === state && item.slug === slug
  );

  if (!foundArticle) return { notFound: true };

  return {
    props: {
      article: foundArticle,
    },
  };
}

export default function ArticlePage({ article }) {
  return (
    <AdPageLayout>
      <div className="min-h-screen bg-slate-50 p-5">
        <ArticleView article={article} />
      </div>
    </AdPageLayout>
  );
}
import Link from "next/link";
import * as allNews from "@/datas/data";
import AdPageLayout from "@/components/AdPageLayout";

const CATEGORY_MAP = {
  automobile: allNews.AUTOMOBILE_NEWS,
  bollywood: allNews.BOLLYWOOD_NEWS,
  breaking: allNews.BREAKING_NEWS,
  business: allNews.BUSINESS_NEWS,
  cricket: allNews.CRICKET_NEWS,
  crime: allNews.CRIMES_NEWS,
  education: allNews.EDUCATION_NEWS,
  election: allNews.ELECTION_NEWS,
  entertainment: allNews.ENTERTAINMENT_NEWS,
  foreign: allNews.FOREIGN_NEWS,
  health: allNews.HEALTH_NEWS,
  latest: allNews.LATEST_NEWS,
  politics: allNews.POLITICS_NEWS,
  religion: allNews.RELIGION_NEWS,
  sports: allNews.SPORTS_NEWS,
  technology: allNews.TECHNOLOGY_NEWS,
};

export async function getStaticPaths() {
  const paths = Object.entries(CATEGORY_MAP).flatMap(([category, newsArray]) => {
    if (!newsArray) return [];

    return newsArray.map((article, index) => {
      const slug = article.slug || `article-${index}`;
      return {
        params: {
          article: `${category}_${slug}`,
        },
      };
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { article } = params;

  if (!article || typeof article !== "string" || !article.includes("_")) {
    return { notFound: true };
  }

  const [category, slug] = article.split("_");

  if (!category || !slug) {
    return { notFound: true };
  }

  const categoryNewsArray = CATEGORY_MAP[category];
  if (!categoryNewsArray) {
    return { notFound: true };
  }

  const foundArticle =
    categoryNewsArray.find(
      (item, index) => item.slug === slug || `article-${index}` === slug
    ) || null;

  if (!foundArticle) {
    return { notFound: true };
  }

  const title = foundArticle.title || "Article";
  const img = foundArticle.img || "/placeholder.jpg";
  const description =
    foundArticle.description ||
    `${title} से जुड़ी यह खबर ${foundArticle.category || category
    } श्रेणी की प्रमुख अपडेट्स में से एक है।`;

  const content =
    foundArticle.content ||
    `${title} से जुड़ी यह खबर फिलहाल डेमो डेटा के रूप में दिखाई जा रही है।\n\nयह समाचार ${foundArticle.category || category
    } से संबंधित है और पाठकों के लिए महत्वपूर्ण अपडेट प्रस्तुत करता है।`;

  return {
    props: {
      article: {
        title,
        img,
        category: foundArticle.category || category,
        author: foundArticle.author || "राचित चेतना डेस्क",
        publishedAt: foundArticle.time || "हाल ही में प्रकाशित",
        description,
        content,
        tags: foundArticle.tags || [foundArticle.category || category],
      },
    },
  };
}

export default function ArticlePage({ article }) {
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-2 text-2xl font-bold text-slate-800">Article not found</h1>
        <p className="mb-5 text-slate-500">
          जिस article को आप खोलना चाहते हैं, वह उपलब्ध नहीं है।
        </p>
        <Link
          href="/"
          className="rounded-lg bg-teal-600 px-4 py-2 font-medium text-white transition hover:bg-teal-700"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <AdPageLayout>
      <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
        <div className="mx-auto max-w-4xl">
          <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <img
              src={article.img}
              alt={article.title}
              className="h-64 w-full object-cover md:h-[420px]"
            />
            <div className="p-5 md:p-8">
              <h1 className="mb-4 text-2xl font-extrabold text-slate-900 md:text-4xl">
                {article.title}
              </h1>
              <p className="mb-4 text-slate-500">{article.publishedAt}</p>
              <p className="mb-6 text-lg leading-8 text-slate-600">
                {article.description}
              </p>

              {article.content.split("\n").map((para, i) => (
                <p key={i} className="mb-4 text-slate-700">
                  {para}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </AdPageLayout>
  );
}
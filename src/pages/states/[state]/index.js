"use client"

import AdPageLayout from "@/components/AdPageLayout";
import { stateWiseNews as articles, STATES } from "@/datas/data";

export async function getStaticPaths() {
  const paths = STATES.map((item) => {
    const st = item.href.split("/states/")[1];
    return { params: { state: st } };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { state } = params;

  if (!state) return { notFound: true };

  const stateData = articles.find((item) => item.state === state);

  return {
    props: {
      state,
      news: stateData ? stateData.news : [],
    },
  };
}

export default function StatePage({ state, news }) {
  const stateNamesHindi = {
    "uttar-pradesh": "उत्तर प्रदेश",
    "delhi": "दिल्ली",
    "bihar": "बिहार",
    "punjab": "पंजाब",
    "madhya-pradesh": "मध्य प्रदेश",
    "jharkhand": "झारखंड",
    "chhattisgarh": "छत्तीसगढ़",
    "gujarat": "गुजरात",
    "haryana": "हरियाणा",
    "himachal-pradesh": "हिमाचल प्रदेश",
    "maharashtra": "महाराष्ट्र",
    "rajasthan": "राजस्थान",
  };

  const displayStateName = stateNamesHindi[state] || state;

  return (

    <AdPageLayout>

      <div className="p-5 space-y-6 w-full">
        <h1 className="text-3xl font-bold text-teal-700">
          {displayStateName} न्यूज़
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <a
              key={item.slug}
              href={`/states/article/${state}_${item.slug}`}
              className="bg-white rounded-xl shadow-sm border p-4 block"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />

              <h3 className="font-bold text-lg mb-2">{item.title}</h3>

              <p className="text-sm text-gray-500">
                {item.category} • {item.time}
              </p>
            </a>
          ))}
        </div>
      </div>

    </AdPageLayout>
  );
}
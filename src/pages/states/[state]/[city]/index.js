import AdPageLayout from "@/components/AdPageLayout";
import { stateWiseNews as articles, STATES } from "@/datas/data";

export async function getStaticPaths() {
    const paths = [];

    STATES.forEach((stateItem) => {
        const state = stateItem.href.split("/states/")[1];

        stateItem.cities?.forEach((cityItem) => {
            const parts = cityItem.href.split("/");
            const city = parts[parts.length - 1];

            if (state && city) {
                paths.push({
                    params: { state, city },
                });
            }
        });
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { state, city } = params;

    if (!state || !city) {
        return { notFound: true };
    }

    const stateData = articles.find((item) => item.state === state);

    const matchedState = STATES.find(
        (item) => item.href === `/states/${state}`
    );

    const matchedCity = matchedState?.cities?.find((item) => {
        const parts = item.href.split("/");
        return parts[parts.length - 1] === city;
    });

    return {
        props: {
            state,
            city,
            cityName: matchedCity?.name || city,
            news: stateData ? stateData.news : [],
        },
    };
}

export default function CityPage({ state, city, cityName, news }) {
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
                    {displayStateName} - {cityName} न्यूज़
                </h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {news.map((item) => (
                        <a
                            key={item.slug}
                            href={`/states/article/${state}_${item.slug}`}
                            className="block rounded-xl border bg-white p-4 shadow-sm"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="mb-3 h-48 w-full rounded-lg object-cover"
                            />

                            <h3 className="mb-2 text-lg font-bold">{item.title}</h3>

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
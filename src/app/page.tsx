import Link from "next/link";

const features = [
  {
    name: "Daily Crave Recipes:",
    description:
      "Say goodbye to snack monotony! Our AI chefs work tirelessly to come up with a brand new, delectable snack recipe every single day. From savory delights to sweet surprises, we cater to all your cravings and keep you excited to try something new in the kitchen.",
    icon: (props: any) => <span {...props}>🍩</span>,
  },
  {
    name: "AI-Generated Perfection:",
    description:
      "Powered by the latest AI technology, Crave of the Day delivers unmatched precision and creativity in every recipe. Our AI chefs analyze a vast array of ingredients and cooking techniques, producing unique combinations that will leave your taste buds dancing with joy",
    icon: (props: any) => <span {...props}>🤖</span>,
  },
  {
    name: "Easy-to-Follow Instructions:",
    description:
      "No more complicated cooking processes! Our recipes are designed with simplicity in mind. Each step is carefully explained, ensuring that even novice cooks can create mouthwatering snacks without any hassle.",
    icon: (props: any) => <span {...props}>🍟</span>,
  },
  {
    name: "Get Social on Twitter:",
    description: (
      <div>
        {"Don't"} miss out on your daily dose of delectable delights! Follow our{" "}
        <a
          href="https://twitter.com/crave_daily"
          className="font-bold text-pink-500 hover:underline"
          target="_blank"
        >
          Twitter bot
        </a>{" "}
        and treat yourself to mouthwatering snack notifications every single
        day.
      </div>
    ),
    icon: (props: any) => <span {...props}>🎉</span>,
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative isolate">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-pink-500 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-pink-300">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-pink-300 to-purple-300 opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-yellow-300  sm:text-6xl">
                  Say goodbye to snack monotony 👋
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-50 sm:max-w-md lg:max-w-none">
                  Are you tired of the same old snacks? Craving something
                  exciting and new to tickle your taste buds? Look no further!
                  This is your ultimate destination for a unique and fun snack
                  experience that changes with each passing day. 😋
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/today"
                    className="rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                  >
                    See Todays Snack
                  </Link>
                  <Link
                    href="/snack"
                    className="text-sm font-semibold leading-6 text-gray-50"
                  >
                    See Past Snacks<span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src="/img/watermelon-mint-popsicles.png"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src="/img/roasted-chickpeas.png"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="/img/homemade-multiseed-crackers.png"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src="/img/nutty-dark-chocolate-bark.png"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="/img/tropical-delight-skewers.png"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-yellow-300">
                  A better way to snack
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-yellow-300 sm:text-4xl">
                  A better way to snack
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-50">
                  Welcome to Crave of the day, where every day is a delicious
                  adventure!
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-50 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-yellow-300">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-pink-500"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1612201143788-b15844da6606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNuYWNrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

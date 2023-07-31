const Intro = () => {
  return (
    <main className="mx-auto max-w-2xl  w-full h-full flex justify-center flex-col mt-5">
      <h1 className="leading-10 font-bold text-4xl m-2 md:m-10">
        🎉 Introducing "Crave of the Day" - Your Daily Snack Adventure!
      </h1>
      <p className="my-2">
        🎉 Say farewell to snack monotony because we have something exciting in
        store for you! Crave of the Day is your ultimate destination for a
        unique and fun snack experience that changes with each passing day.
        🍩🍟😋
      </p>
      <p className="my-2">Why Crave of the Day?</p>
      <ul className="list-disc list-inside">
        <li>A new snack AI generated recipe every day</li>
        <li>Unique snacks that have never been seen before</li>
        <li>Snacks that are fun and easy to make</li>
      </ul>
      <p className="my-2">
        If you're tired of the same old snacks, then this is the place for you!
        Please{" "}
        <a
          href="https://twitter.com/crave_daily"
          className="font-bold text-pink-500 hover:underline"
          target="_blank"
        >
          follow us on twitter
        </a>{" "}
        for daily posts or checkout{" "}
        <a
          href="/today"
          className="font-bold text-pink-500 hover:underline"
          target="_blank"
        >
          this link
        </a>
        which will take you directly to today's snack.
      </p>

      <p className="my-2">
        So, why settle for the ordinary when you can indulge in the
        extraordinary? Embrace the excitement of a new snack discovery each day
        with Crave of the Day. Get ready to embark on a scrumptious journey that
        will leave you craving for more! 😍🍿🍪
      </p>
    </main>
  );
};

export default Intro;

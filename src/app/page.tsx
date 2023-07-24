export const RainbowText = ({ children }: any) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
      {children}
    </span>
  );
};

export default function Home() {
  return (
    <div className="h-full">
      {/*Nav*/}
      <div className="w-full container mx-auto">
        <div className="w-full flex items-center justify-between">
          <span className="text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            Snack{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Of The Day
            </span>
          </span>
          <div className="flex w-1/2 justify-end content-center">
            <a
              className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://twitter.com/intent/tweet?url=#"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
              </svg>
            </a>
            <a
              className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://www.facebook.com/sharer/sharer.php?u=#"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/*Main*/}
      <div className="mx-auto max-w-3xl">
        <div className="prose w-full break-words dark:prose-invert dark">
          <p>
            <strong>Tropical Fruit Salsa with Cinnamon Pita Chips</strong>
          </p>
          <p>
            <strong>Ingredients:</strong>
          </p>
          <p>For the Tropical Fruit Salsa:</p>
          <ul>
            <li>1 ripe mango, diced</li>
            <li>1 cup fresh pineapple, diced</li>
            <li>1 kiwi, peeled and diced</li>
            <li>1/2 cup strawberries, diced</li>
            <li>1/4 cup red bell pepper, finely chopped</li>
            <li>2 tablespoons fresh lime juice</li>
            <li>1 tablespoon honey</li>
            <li>1 tablespoon fresh mint leaves, finely chopped</li>
          </ul>
          <p>For the Cinnamon Pita Chips:</p>
          <ul>
            <li>4 whole wheat pita bread rounds</li>
            <li>2 tablespoons melted butter</li>
            <li>2 tablespoons granulated sugar</li>
            <li>1 teaspoon ground cinnamon</li>
          </ul>
          <p>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li>
              <p>Preheat the oven to 350°F (175°C).</p>
            </li>
            <li>
              <p>
                To make the Tropical Fruit Salsa, combine all the diced fruits
                (mango, pineapple, kiwi, strawberries, and red bell pepper) in a
                large mixing bowl.
              </p>
            </li>
            <li>
              <p>
                In a separate small bowl, whisk together the lime juice and
                honey. Pour the mixture over the diced fruits and gently toss
                everything together until the fruits are well coated. Add the
                finely chopped mint leaves and mix again. Cover the bowl with
                plastic wrap and refrigerate the salsa for about 20-30 minutes
                to let the flavors meld.
              </p>
            </li>
            <li>
              <p>
                While the salsa is chilling, prepare the Cinnamon Pita Chips.
                Cut each pita bread round into triangular wedges.
              </p>
            </li>
            <li>
              <p>
                In a small bowl, mix together the granulated sugar and ground
                cinnamon.
              </p>
            </li>
            <li>
              <p>
                Brush the pita wedges with melted butter on both sides and
                sprinkle the cinnamon-sugar mixture over them, ensuring they are
                evenly coated.
              </p>
            </li>
            <li>
              <p>
                Place the coated pita wedges on a baking sheet lined with
                parchment paper and bake in the preheated oven for about 10-12
                minutes or until they turn golden and crispy.
              </p>
            </li>
            <li>
              <p>
                Once the Cinnamon Pita Chips are done, remove them from the oven
                and let them cool.
              </p>
            </li>
            <li>
              <p>
                Serve the chilled Tropical Fruit Salsa in a bowl alongside the
                Cinnamon Pita Chips, and you have a refreshing and flavorful
                snack!
              </p>
            </li>
          </ol>
          <p>
            This snack is not only delicious but also visually appealing,
            perfect for serving at parties or enjoying on a sunny day. The
            combination of tangy tropical fruits with the sweet and crispy pita
            chips makes it a delightful treat for anyone who loves a mix of
            sweet and savory flavors. Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
}

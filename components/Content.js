import Link from 'next/link';
import useDarkMode from '../useDarkMode';

export const Content = () => {
  const [colorTheme, setTheme] = useDarkMode();

   // Define the paths for the light and dark mode images
  const lightModeImagePath = "/A boy in the forest (1).jpg";
  const darkModeImagePath = "a robot smiling.jpg";

   // Determine the image path based on the current color theme
  const imagePath = colorTheme === 'white' ? lightModeImagePath : darkModeImagePath;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 
    bg-[#EFF6FA] dark:bg-[#0C1732] text-[#0C1732]  dark:text-[#00FF00]">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
        <div>
          {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-500 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p> */}
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#122B68]sm:text-4xl md:mx-auto lg:text-4xl">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Empowering</span>
          </span>{' '}
          Tomorrow, Today:

          <span className="inline-block text-[#122B68] dark:text-gray-300">
            {' '}
            AI Beyond Boundaries.
            </span>
        </h2>
        <p className="text-base text-[#122B68] dark:text-gray-400 md:text-xl lg-text-xl ">
          Shaping tomorrow with AI-driven innovation. Join us on a journey to the future.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="overlay-image" style={{overflow:'hidden'}}>
          
          <img
            className="object-contain w-10% h-10% col-span-2 rounded shadow-lg " 
            src={imagePath} 
            alt=""
          />
          

        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5 dark:text-[#00FF00] text-[#0C1732] sm:text-4xl sm:leading-none lg:text-2xl"  >
              Machine Learning (ML):
            </h6>
            <p className="text-sm  dark:text-gray-300 text-gray-800 sm:text-4xl md:text-auto sm:leading-none lg:text-xl">
             At its core, machine learning is the process of using data to train algorithms to make decisions without explicit programming. ML models &quot;learn&quot; from the data, allowing them to make predictions or decisions without being specifically coded for the task.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5 dark:text-[#00FF00] text-[#0C1732] sm:text-4xl sm:leading-none lg:text-2xl"   >
              Deep Learning:
            </h6>
            <p className="text-sm  dark:text-gray-300 text-gray-800 sm:text-4xl md:text-auto sm:leading-none lg:text-xl">
              A subset of machine learning, deep learning uses neural networks with many layers (hence “deep”) to analyze various factors of data. Deep learning is especially powerful for tasks like image and speech recognition. Convolutional Neural Networks (CNNs) for image tasks and Recurrent Neural Networks (RNNs) for sequential data are popular structures in deep learning.
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5 dark:text-[#00FF00] text-[#0C1732] sm:text-4xl sm:leading-none lg:text-2xl"  >
              Natural Language Processing (NLP):
            </h6>
            <p className="text-sm  dark:text-gray-300 text-gray-800 sm:text-4xl md:text-auto sm:leading-none lg:text-xl">
              NLP involves the interaction between computers and human language. It enables computers to process, analyze, and generate human language in a way that&apos;s valuable. Tasks like sentiment analysis, machine translation, and chatbots are common applications of NLP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
import Link from 'next/link';
import useDarkMode from '../useDarkMode';

export const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="bg-[#EFF6FA] dark:bg-[#0C1732] text-[#0C1732]  dark:text-[#00FF00]">
      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight dark:text-[#00FF00] text-[#0C1732] sm:text-4xl sm:leading-none lg:text-4xl">
              Empowering Tomorrow,
              <br className="hidden md:block" />
              <span className="inline-block dark:text-[#EEF2FC] text-[#122B68]">
                One Algorithm at a Time.
              </span>
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg lg:text-2xl">
              Transforming the future with AI-driven insights and solutions. Dive in, and let innovation lead the way.
            </p>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <a
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-sm bg-[#122B68] dark:bg-[#095a09] hover:bg-[#00003D] dark:hover:bg-[#45ad45] text-teal-accent-400 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/truck passion.jpg"
            className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

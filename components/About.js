export const About = () => {
  return (
    <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#EFF6FA] dark:bg-[#0C1732] text-[#0C1732]  dark:text-[#00FF00]">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2" >
        <div className="flex flex-col justify-center" >
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans sm:text-4xl md:text-auto sm:leading-none lg:text-3xl font-bold tracking-tight text-[#007AA3]sm:text-4xl">
              Transforming Ideas into Intelligent 
              <br className="hidden md:block" />
              {' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-[#0C1732] dark:bg-[#EFF6FA]" />
                <span className="relative inline-block text-gray-400 sm:text-4xl md:text-auto sm:leading-none lg:text-3xl">
                  Realities.
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-md sm:text-4xl md:text-auto sm:leading-none lg:text-xl">
               Witness the transformation of abstract concepts into tangible AI-powered solutions. Where dreams meet data, that&apos;s where we thrive.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2" >
            <div className="sm:text-4xl md:text-auto sm:leading-none lg:text-2xl bg-[#EFF6FA] dark:bg-[#0C1732]  border-l-4 shadow-sm border-[#0C1732] dark:border-[#00FF00]">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  AI Creative Design Tools
                </h6>
                <p className="sm:text-4xl md:text-auto sm:leading-none lg:text-xl text-sm text-gray-700 dark:text-gray-300">
                  AI can be used to turn imaginative or abstract ideas into real, concrete solutions. 
                </p>
              </div>
            </div>
            <div className="sm:text-4xl md:text-auto sm:leading-none lg:text-2xl bg-[#EFF6FA] dark:bg-[#0C1732]  border-l-4 shadow-sm border-[#0C1732] dark:border-[#00FF00]">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Dream Analysis with AI
                </h6>
                <p className="sm:text-4xl md:text-auto sm:leading-none lg:text-xl text-sm text-gray-700 dark:text-gray-300">
                  An AI system could be developed to identify patterns, themes, and emotions, providing insights into the subconscious mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className= "relative">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
        
            src="/A robot having a conversation with a human (1).jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
          <div className="absolute inset-0 bg-[#007AA3] bg-opacity-20 rounded shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};
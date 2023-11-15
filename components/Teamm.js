import React from 'react';

const Teamm = () => {
  const teamMembers = [
    {
      name: 'Justina Ariguzo',
      role: 'CEO',
      image: '/A boy in the forest (1).jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      name: 'Marta Clermont',
      role: 'Design Team Lead',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      name: 'Anthony Geek',
      role: 'CTO, Lorem Inc.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      name: 'Alice Melbourne',
      role: 'Human Resources',
      image: 'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      name: 'Martin Garix',
      role: 'Good guy',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Andrew Larkin',
      role: 'Backend Developer',
      image: 'https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
        {
      name: 'Andrew Larkin',
      role: 'Backend Developer',
      image: 'https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },

  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#EFF6FA] dark:bg-[#0C1732] text-[#0C1732] dark:text-[#00FF00]">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gray-800">
            Core Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight bg-[#EFF6FA] dark:bg-[#0C1732] text-[#0C1732] dark:text-[#00FF00] sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-[#EFF6FA] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            
            <span className="relative">Welcome</span>
          </span>{' '}
          <span  className="bg-[#EFF6FA] dark:bg-[#0C1732] text-[#122B68] dark:text-gray-300">
          our talented team of professionals
          </span>
        </h2>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={member.image}
                alt={member.name}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-[#EFF6FA]">
                  {member.name}
                </p>
                <p className="mb-1 text-xs tracking-wider text-[#EFF6FA] uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teamm;

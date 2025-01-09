import React from 'react';

const ProgramsList = () => {
  const programs = [
    {
      title: 'Science and Technology',
      description: 'Explore the latest advancements in science and technology with hands-on projects and research.',
      icon: '🧪',
    },
    {
      title: 'Arts and Humanities',
      description: 'Foster creativity and critical thinking through a range of art, music, and literature programs.',
      icon: '🎨',
    },
    {
      title: 'Sports and Athletics',
      description: 'Promote physical fitness and teamwork through various sports and athletic activities.',
      icon: '⚽',
    },
    {
      title: 'Business and Economics',
      description: 'Prepare for the corporate world with foundational courses in business and finance.',
      icon: '📈',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Our Programs</h2>
          <p className="mt-4 text-gray-600">
            ATA School offers a variety of programs to suit the interests and aspirations of every student.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl">{program.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-700 mt-4">{program.title}</h3>
              <p className="mt-2 text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsList;

import React from 'react';

const NewsEvents = ({ news }) => {
  return (
    <section className="news-events py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">News & Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {news.map(item => (
            <div key={item.id} className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.excerpt}</p>
              <a href={`/news/${item.id}`} className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
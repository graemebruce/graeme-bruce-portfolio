import React from 'react';
import './App.css';

const stories = [
  {
    id: 1, title: "U.S.... presidents are older than ever while Canada's PMs are getting younger. Why?", image: './president-age.jpg', url: "https://www.cbc.ca/news/world/president-prime-minister-age-1.7131860"
  },
  {
    id: 2, title: "Is another pipe failure looming? A health check of Canada's water mains", image: '/pipe-health.jpg', url: "https://www.cbc.ca/news/canada/water-main-age-health-canada-1.7307124"
  },
  { id: 3, title: 'Live tracking wildfires in Canada', image: '/wildfires.jpg', url: "https://www.cbc.ca/newsinteractives/features/wildfires-tracker-canada" },

  { id: 4, title: 'Many parts of Canada are seeing less snow on the ground over Christmas. Find out if you’ll have snow this holiday.', image: '/snow.png', url: "https://newsinteractives.cbc.ca/features/2022/white-christmas/" },

  { id: 5, title: 'Calculate how your mortgage will be affected as interest rates change', image: '/mortgage-calc.jpeg', url: "https://www.cbc.ca/news/business/mortgage-calculator-1.7007572" },

  { id: 6, title: 'Many workers hit the picket line in 2023. These 5 charts help contextualize a year of strikes', image: '/strikes.jpg', url: "https://www.cbc.ca/news/canada/year-of-strike-2023-historic-1.7042081" },

  { id: 7, title: "COVID-19's place in history of wars, tragedies and innovations", image: '/covid-history.jpg', url: 'https://today.yougov.com/health/articles/32202-covid-place-history' },

  { id: 8, title: 'Church and state: How important is religion to the American voter?', image: '/church-state.jpg', url: 'https://today.yougov.com/politics/articles/31507-church-and-state-just-how-important-religion-ameri' },

  { id: 9, title: 'How much money do Canadians think they can make in their life?', image: '/salary.jpg', url: 'https://today.yougov.com/economy/articles/28772-how-much-money-do-canadians-think-they-can-make-th' },

  { id: 10, title: "Officers are dispatched an average of 600 times a day; the Free Press finds out where they're headed and why", image: '/police.png', url: 'https://www.winnipegfreepress.com/featured/2018/10/01/911-calls-overall' },
];


const App = () => {
  return (
    <div className="container">
      <header>
        <div className="header-content">
          <img src="/graeme-bruce.jpg" alt="Graeme Bruce Headshot" className="headshot" />
          <h1>Graeme Bruce</h1>
        </div>
      </header>
      <p className="intro">Hi there! I'm a skilled data journalist with expertise in creating data-driven visual content and performing in-depth analysis across diverse sectors, including economics, health, and politics. Experienced in leading teams, developing workflows, and ensuring content meets journalistic and accessibility standards for a broad audience.
      </p>
      {/* <a href="/resume.pdf" download className="download-button"> Download my resume</a> */}
      <hr />


      <h2>Some recent work</h2>
      <section className="story-links">
        {stories.map(story => (
          <a key={story.id} href={story.url} target="_blank">
            <img src={story.image} alt={story.title} />
            <h2>{story.title}</h2>
          </a>
        ))}
      </section>
      <hr />
      <div className="contact-info">
        <h2>Contact me</h2>
        <p><a href="mailto:grjbruce@gmail.com">Email</a></p>
        <p><a href="tel:2047219301">Phone</a></p>
        <p><a href="https://www.linkedin.com/in/grjbruce" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><a href="https://twitter.com/graemebruce_" target="_blank" rel="noopener noreferrer">Twitter/X</a></p>
      </div>
    </div >

  );
};

export default App;

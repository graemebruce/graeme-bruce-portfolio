import React from 'react';
import './App.css';

const stories = [
  {
    id: 0, title: "Tracking Canada's economic health: Follow the country's progress at a glance", image: `${process.env.PUBLIC_URL}/images/economic-health.png`, url: "https://www.cbc.ca/newsinteractives/features/tracking-canada-economic-health"
  },
  {
    id: 1, title: "U.S. presidents are older than ever while Canada's PMs are getting younger. Why?", image: `${process.env.PUBLIC_URL}/images/president-age.jpg`, url: "https://www.cbc.ca/news/world/president-prime-minister-age-1.7131860"
  },
  {
    id: 2, title: "Is another pipe failure looming? A health check of Canada's water mains", image: `${process.env.PUBLIC_URL}/images/pipe-health.jpg`, url: "https://www.cbc.ca/news/canada/water-main-age-health-canada-1.7307124"
  },
  { id: 3, title: 'Live tracking wildfires in Canada', image: `${process.env.PUBLIC_URL}/images/wildfires.jpg`, url: "https://www.cbc.ca/newsinteractives/features/wildfires-tracker-canada" },

  { id: 4, title: 'Many parts of Canada are seeing less snow on the ground over Christmas. Find out if you’ll have snow this holiday.', image: `${process.env.PUBLIC_URL}/images/snow.png`, url: "https://newsinteractives.cbc.ca/features/2022/white-christmas/" },

  { id: 5, title: 'Calculate how your mortgage will be affected as interest rates change', image: `${process.env.PUBLIC_URL}/images/mortgage-calc.jpeg`, url: "https://www.cbc.ca/news/business/mortgage-calculator-1.7007572" },

  { id: 6, title: 'Many workers hit the picket line in 2023. These 5 charts help contextualize a year of strikes', image: `${process.env.PUBLIC_URL}/images/strikes.jpg`, url: "https://www.cbc.ca/news/canada/year-of-strike-2023-historic-1.7042081" },

  { id: 7, title: "COVID-19's place in history of wars, tragedies and innovations", image: `${process.env.PUBLIC_URL}/images/covid-history.jpg`, url: 'https://today.yougov.com/health/articles/32202-covid-place-history' },

  { id: 8, title: 'Church and state: How important is religion to the American voter?', image: `${process.env.PUBLIC_URL}/images/church-state.jpg`, url: 'https://today.yougov.com/politics/articles/31507-church-and-state-just-how-important-religion-ameri' },

  { id: 9, title: 'How much money do Canadians think they can make in their life?', image: `${process.env.PUBLIC_URL}/images/salary.jpg`, url: 'https://today.yougov.com/economy/articles/28772-how-much-money-do-canadians-think-they-can-make-th' },


];


const App = () => {
  return (
    <div className="container">
      <header>
        <div className="header-content">
          <img
            src={`${process.env.PUBLIC_URL}/images/graeme-bruce.jpg`}
            alt="Graeme Bruce Headshot"
            className="headshot"
          />
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

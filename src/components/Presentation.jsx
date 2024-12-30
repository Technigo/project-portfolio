import React from 'react';
import Slider from 'react-slick';
import './Presentation.css';
import ArticleCard from './ArticleCard';
import SquigglyLine from './squigglyline';
import Article1 from '../assets/Article1.jpg';
import Article2 from '../assets/Article2.jpg';
import Article3 from '../assets/Article3.jpg';
import Article4 from '../assets/Article4.jpg';
import Article5 from '../assets/Article5.png';

function Presentation() {
  const articles = [
    {
      id: 5,
      title: "Job searching during a bad economy",
      description: "Job searching is hell, but one day you will catch a break",
      imageUrl: Article5,
      date: "August 2024",
      url: "https://medium.com/@alexandrameija/job-searching-during-a-bad-economy-36fa0fee115c",
    },
    {
      id: 4,
      title: "Coding and ADHD- a match made in heaven?",
      description:
        "I struggled a lot in going into code because of the diagnosis, but now, I realize that coding is exactly what my ADHD brain needs",
      imageUrl: Article4,
      date: "April 2024",
      url: "https://medium.com/@alexandrameija/coding-and-adhd-a-match-made-in-heaven-d8f564b17df5",
    },
    {
      id: 3,
      title: "Imposter syndrome and when it hits you",
      description: "My everlasting feeling of being an imposter and how I deal with it",
      imageUrl: Article3,
      date: "March 2024",
      url: "https://medium.com/@alexandrameija/impostor-syndrome-and-when-it-hits-you-d794c6d4cd69",
    },
    {
      id: 2,
      title: "GLOW",
      description: "The start of the community GLOW (Glorious Ladies of Web development).",
      imageUrl: Article2,
      date: "March 2024",
      url: "https://medium.com/@alexandrameija/glow-b02ed82d2ca6",
    },
    {
      id: 1,
      title: "Why I became a techie (and launched a new careerpath after 40)",
      description: "My journey towards becoming a person in tech.",
      imageUrl: Article1,
      date: "March 2024",
      url: "https://medium.com/@alexandrameija/why-i-became-a-techie-and-launched-a-new-careerpath-after-40-e853fdba98e4",
    },
  ];

  const settings = {
    dots: true, // Show dots below the carousel
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 2, // Default: Show 2 slides
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Automatically scroll
    autoplaySpeed: 3000, // Speed of autoplay in ms
    arrows: false, // Hide next/previous arrows
    responsive: [
      {
        breakpoint: 1279, // Tablet and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 743, // Mobile and below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="presentation">
      <SquigglyLine />
      <h2 className="presentation-heading">My words</h2>
      <Slider {...settings}>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            date={article.date}
            url={article.url}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Presentation;



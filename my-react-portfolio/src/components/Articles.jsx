import { Tag } from './Tag.jsx';
// import './Articles.css';

const articles = [
  {
    id: 1,
    date: 'July 5th',
    title: 'How to stop being scared: Learning to love code',
    description: 'The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.',
    imageUrl: 'https://via.placeholder.com/327x200',
  },
  {
    id: 2,
    date: 'July 12th',
    title: 'How to stop being scared: Learning to love code',
    description: 'The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.',
    imageUrl: 'https://via.placeholder.com/327x200',
  },
  {
    id: 3,
    date: 'July 15th',
    title: 'How to stop being scared: Learning to love code',
    description: 'The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.',
    imageUrl: 'https://via.placeholder.com/327x200',
  },
];

export const Articles = () => {
  return (
    <div className="articles-container">
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <img src={article.imageUrl} alt={article.title} className="article-image" />
            <div className="article-content">
              <div className="article-date">
                <Tag text={article.date} />
              </div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <button className="read-article-btn">Read article</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

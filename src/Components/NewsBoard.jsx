import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "../Components/style.css";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {articles.map((news, index) => (
          <div className="col" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;

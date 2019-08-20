import React from "react";

const SingleNews = ({ item }) => {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title} />
          <span className="card-title">{item.source.name}</span>
        </div>
        <div className="card-content">
          <p>{item.content}</p>
        </div>
        <div className="card-action">
          <a href={item.url} target="_blank">
            Full article
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;

import React, { Component } from "react";
import SingleNews from "./SingleNews";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.country
    }&${this.props.news.category}&apiKey=d94efa04117b41ddaeb36bffcb564496`;
    // const url =
    //   "https://newsapi.org/v2/top-headlines?country=nl&category=science&apiKey=d94efa04117b41ddaeb36bffcb564496";

    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          news: data.articles
        })
      )
      .catch(error => console.error());
  }

  renderItems = () => {
    return this.state.news.map(item => (
      <SingleNews key={item.url} item={item} />
    ));
  };
  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;

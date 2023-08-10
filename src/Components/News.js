import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {

  constructor() {
    super();
    console.log("Hello i am constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0a203f25cbce44b7a8ac359e19460557";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }


  handlePreviousClick = () => {
console.log("Previous")
  }

  handleNextClick = () => {
console.log("Next")

  }

  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  descripation={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    );
  }
}

export default News;
